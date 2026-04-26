import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

dotenv.config();

// Initialize Firebase Admin
const serviceAccount = JSON.parse(
  await readFile(new URL('./firebase.json', import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Test Firestore Connection on Startup
db.collection('system_tests').doc('connection_check').set({
  lastStartup: new Date().toISOString(),
  message: "Firebase connected successfully from server!"
}).then(() => {
  console.log("✓ Firestore connection verified - 'system_tests' document updated.");
}).catch(err => {
  console.error("✗ Firestore connection failed:", err);
});

const app = express();
const port = process.env.PORT || 3001;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.method === 'POST') console.log('Body:', JSON.stringify(req.body, null, 2));
  next();
});

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

app.post('/api/estimate', upload.array('images', 3), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, error: 'No images uploaded' });
  }

  const category = req.body.category || 'unknown';
  const userDescription = req.body.userDescription || '';

  // Check if API Key is configured
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.includes('YOUR_KEY')) {
    console.error("CRITICAL ERROR: Gemini API Key is not configured correctly in .env");
    return res.status(500).json({ success: false, error: 'AI Service Configuration Error. Please check .env file.' });
  }

  try {
    // 1. Process images (Sharp)
    const imageParts = await Promise.all(req.files.map(async (file) => {
      const processedBuffer = await sharp(file.buffer)
        .resize({ width: 1024, withoutEnlargement: true })
        .jpeg({ quality: 70 })
        .toBuffer();
      
      return {
        inlineData: {
          data: processedBuffer.toString('base64'),
          mimeType: "image/jpeg",
        },
      };
    }));

    // 2. AI Estimation with Gemini (Rigorous Inspection Prompt)
    const prompt = `You are a professional E-Waste Valuation Expert. 
Your goal is to perform a RIGOROUS visual inspection of the device in the images provided.

User Selection: ${category}
${category === 'other' ? `User Description: "${userDescription}"` : ''}

INSPECTION GUIDELINES:
1. SCREEN: Look for cracks, deep scratches, dead pixels, or bleeding (if screen is on).
2. BODY: Check for dents, missing buttons, broken ports, or significant wear.
3. COMPLETENESS: Does it look intact? Are any major parts missing?
4. CONDITION SCALE:
   - "good": Minimal wear, no cracks, looks functional.
   - "average": Visible scratches/wear, small dents, but no major breakage.
   - "poor": Cracked screen, major body damage, missing parts, or very old.

VALUATION RULES:
- Be realistic. If the screen is shattered, value should be very low (e.g., 10-20% of base).
- If "good", give a fair market price for recycling/refurbishment.
- RETURN ONLY VALID JSON.

Format:
{
  "condition": "poor|average|good",
  "estimated_price": number,
  "confidence": number (0-100)
}`;

    const result = await geminiModel.generateContent([
      prompt,
      ...imageParts
    ]);

    const responseText = result.response.text().trim();
    const cleanJson = responseText.replace(/```json|```/g, '').trim();
    
    let estimationData;
    try {
      estimationData = JSON.parse(cleanJson);
    } catch (e) {
      console.error("Failed to parse Gemini response:", cleanJson);
      throw new Error("Invalid AI response format");
    }

    res.json({
      success: true,
      condition: estimationData.condition,
      estimated_price: estimationData.estimated_price,
      confidence: estimationData.confidence
    });

  } catch (error) {
    console.error("Estimation error:", error);
    res.status(500).json({ 
      success: false, 
      error: 'Unable to estimate. Value will be confirmed during pickup.' 
    });
  }
});

// PICKUP ENDPOINTS
app.post('/api/pickups', async (req, res) => {
  console.log("Creating pickup for user:", req.body.userId);
  try {
    const pickupData = {
      userId: req.body.userId,
      item: req.body.item,
      images: req.body.images || [],
      address: req.body.address,
      schedule: req.body.schedule,
      pricing: req.body.pricing || { estimated: 0 },
      status: 'pending',
      createdAt: req.body.createdAt || Date.now()
    };
    
    console.log("Saving to Firestore...");
    const docRef = await db.collection('pickups').add(pickupData);
    console.log("✓ Saved with ID:", docRef.id);
    res.json({ success: true, id: docRef.id, ...pickupData });
  } catch (error) {
    console.error("✗ Failed to save pickup:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const payload = req.body || {};
    const orderData = {
      userId: payload.userId || "demo-user",
      category: payload.category || "other",
      images: Array.isArray(payload.images) ? payload.images : [],
      address: payload.address || {},
      schedule: payload.schedule || {},
      pricing: payload.pricing || { estimated: 0 },
      condition: payload.condition || "average",
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection('orders').add(orderData);
    console.log("✓ Order saved in Firestore:", docRef.id);
    res.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("✗ Failed to save order:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/orders/active/:userId', async (req, res) => {
  try {
    const snapshot = await db.collection('orders')
      .where('userId', '==', req.params.userId)
      .where('status', 'in', ['pending', 'accepted', 'en_route'])
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get();

    const orders = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
    res.json({ success: true, orders });
  } catch (error) {
    console.error("✗ Failed to fetch active orders:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  try {
    const docSnap = await db.collection('orders').doc(req.params.id).get();
    if (!docSnap.exists) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    res.json({ success: true, order: { id: docSnap.id, ...docSnap.data() } });
  } catch (error) {
    console.error("✗ Failed to fetch order by id:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/pickups/:userId', async (req, res) => {
  try {
    const snapshot = await db.collection('pickups')
      .where('userId', '==', req.params.userId)
      .orderBy('createdAt', 'desc')
      .get();
    
    const pickups = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ success: true, pickups });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/pickups/active/:userId', async (req, res) => {
  try {
    const snapshot = await db.collection('pickups')
      .where('userId', '==', req.params.userId)
      .where('status', 'in', ['pending', 'assigned', 'en_route'])
      .orderBy('createdAt', 'desc')
      .get();
    
    const activePickups = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ success: true, activePickups });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/pickups/:id/complete', async (req, res) => {
  try {
    await db.collection('pickups').doc(req.params.id).update({ status: 'completed' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Namma E-Waste AI Estimation Service running on port ${port}`);
});
