import { db, storage } from "../firebase";
import { collection, addDoc, doc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export interface OrderAddress {
  label: string;
  houseNo: string;
  street: string;
  locality: string;
  city: string;
  pincode: string;
  phone: string;
}

export interface OrderSchedule {
  date: string;
  slot: string;
  slotLabel: string;
}

export interface OrderPricing {
  estimated: number;
}

export interface OrderData {
  id?: string;
  userId: string;
  category: string;
  images: string[];
  address: OrderAddress;
  schedule: OrderSchedule;
  pricing: OrderPricing;
  condition: string;
  status: "pending" | "accepted" | "en_route" | "completed";
  createdAt: any;
}

function shouldSkipStorageUpload() {
  if (import.meta.env.VITE_ENABLE_STORAGE_UPLOAD === "true") return false;
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

function isClientFirebaseConfigured() {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const appId = import.meta.env.VITE_FIREBASE_APP_ID;
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  return Boolean(apiKey && appId && projectId && !String(apiKey).includes("DummyKey"));
}

function getOrderApiBase() {
  const fromEnv = String(import.meta.env.VITE_ORDER_API_BASE || "").trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");

  if (typeof window !== "undefined") {
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isLocal) return "http://localhost:3001";
  }

  return "";
}

function serverFetch(path: string, init?: RequestInit) {
  const base = getOrderApiBase();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return fetch(`${base}${normalizedPath}`, init);
}

async function createOrderViaServer(documentData: OrderData): Promise<string> {
  const response = await serverFetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(documentData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Server order save failed (${response.status}): ${errorText}`);
  }

  const payload = await response.json();
  if (!payload?.id) {
    throw new Error("Server did not return order id.");
  }

  return payload.id as string;
}

async function fetchActiveOrdersViaServer(userId: string): Promise<OrderData[]> {
  const response = await serverFetch(`/api/orders/active/${encodeURIComponent(userId)}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch active orders from server (${response.status})`);
  }
  const payload = await response.json();
  return (payload?.orders || []) as OrderData[];
}

async function fetchOrderByIdViaServer(orderId: string): Promise<OrderData | null> {
  const response = await serverFetch(`/api/orders/${encodeURIComponent(orderId)}`);
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to fetch order by id from server (${response.status})`);
  }
  const payload = await response.json();
  return (payload?.order || null) as OrderData | null;
}

/**
 * Uploads images to Firebase Storage via backend proxy to avoid CORS
 */
async function uploadImages(imageFiles: File[]): Promise<string[]> {
  const uploadedUrls: string[] = [];

  for (const file of imageFiles) {
    try {
      // Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
          const base64Data = result.split(',')[1];
          resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const response = await serverFetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: base64,
          fileName: `orders/${Date.now()}-${file.name}`,
          mimeType: file.type,
        }),
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }

      const result = await response.json();
      if (result.success && result.url) {
        uploadedUrls.push(result.url);
      } else {
        throw new Error('Invalid upload response');
      }
    } catch (error) {
      console.error('Failed to upload image:', error);
      // Continue with remaining files
    }
  }

  return uploadedUrls;
}

/**
 * Creates a new order in Firestore with image uploads
 * @param orderData - The order data to store
 * @param imageFiles - Array of image files to upload (optional, if images are already URLs)
 * @returns The document ID of the created order
 */
export async function createOrder(
  orderData: Omit<OrderData, "id" | "images" | "createdAt" | "status"> & { images?: string[] },
  imageFiles?: File[]
): Promise<string> {
  let imageUrls: string[] = [];

  // Upload images if files are provided
  if (imageFiles && imageFiles.length > 0) {
    try {
      imageUrls = await uploadImages(imageFiles);
    } catch (error) {
      console.error("Image upload failed:", error);
      imageUrls = [];
    }
  } else if (orderData.images) {
    // Use provided image URLs (e.g., base64 or existing URLs)
    imageUrls = orderData.images;
  }

  // Never persist large data URLs to Firestore documents.
  imageUrls = imageUrls.filter((url) => typeof url === "string" && !url.startsWith("data:"));

  // Construct the document with the required schema
  const documentData: OrderData = {
    userId: orderData.userId,
    category: orderData.category,
    images: imageUrls,
    address: orderData.address,
    schedule: orderData.schedule,
    pricing: orderData.pricing,
    condition: orderData.condition,
    status: "pending",
    createdAt: serverTimestamp(),
  };

  if (!isClientFirebaseConfigured()) {
    console.warn("Client Firebase config missing. Falling back to server order API.");
    return createOrderViaServer({
      ...documentData,
      createdAt: new Date().toISOString(),
    });
  }

  // Save to Firestore
  try {
    const docRef = await addDoc(collection(db, "orders"), documentData);
    return docRef.id;
  } catch (error) {
    console.error("Firestore save failed:", error);
    console.warn("Retrying order save via server API...");
    return createOrderViaServer({
      ...documentData,
      createdAt: new Date().toISOString(),
    });
  }
}

export async function fetchActiveOrders(userId: string): Promise<OrderData[]> {
  if (!isClientFirebaseConfigured()) {
    const data = await fetchActiveOrdersViaServer(userId);
    console.log("Fetched orders:", data);
    return data;
  }

  const ordersRef = collection(db, "orders");
  const q = query(
    ordersRef,
    where("userId", "==", userId),
    where("status", "in", ["pending", "accepted", "en_route"]),
    orderBy("createdAt", "desc"),
    limit(1),
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...(docSnap.data() as Omit<OrderData, "id">),
  }));
  console.log("Fetched orders:", data);
  return data;
}

export function subscribeToOrder(orderId: string, onData: (order: OrderData | null) => void) {
  if (!isClientFirebaseConfigured()) {
    let disposed = false;
    const poll = async () => {
      if (disposed) return;
      try {
        const raw = await fetchOrderByIdViaServer(orderId);
        console.log("Live update:", raw);
        onData(raw);
      } catch (error) {
        console.error("Server order poll failed:", error);
      }
    };

    poll();
    const timer = window.setInterval(poll, 3000);
    return () => {
      disposed = true;
      window.clearInterval(timer);
    };
  }

  const orderRef = doc(db, "orders", orderId);
  return onSnapshot(orderRef, (docSnap) => {
    const raw = docSnap.exists() ? { id: docSnap.id, ...(docSnap.data() as Omit<OrderData, "id">) } : null;
    console.log("Live update:", raw);
    onData(raw);
  });
}
