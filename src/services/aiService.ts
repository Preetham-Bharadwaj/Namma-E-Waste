export interface AIConditionResult {
  condition: string;
  confidence: number;
  estimatedPrice: number;
}

/**
 * Converts a File to base64 string
 */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Analyzes device condition using Google Gemini Vision API
 * @param images - Array of image files to analyze
 * @param category - The selected category of the device
 * @returns Analysis result with condition, confidence, and estimated price
 */
export async function analyzeDeviceCondition(images: File[], category: string): Promise<AIConditionResult> {
  console.log("📸 Images:", images.length);
  console.log("📱 Category:", category);

  if (!images || images.length === 0) {
    console.warn("No images provided, using fallback");
    return getFallbackResult();
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY not found, using fallback");
    return getFallbackResult();
  }

  try {
    // Convert images to base64
    const base64Images = await Promise.all(images.map(fileToBase64));
    
    // Prepare the prompt
    const prompt = `Analyze the condition of this ${category}.
Return ONLY JSON (no markdown, no extra text):
{
  "condition": one of [excellent, good, average, poor],
  "confidence": number (0-100),
  "estimatedPrice": number in INR (rough estimate based on condition)
}
Do NOT identify the item. Only evaluate condition.`;

    // Prepare the request body
    const requestBody = {
      contents: [
        {
          parts: [
            { text: prompt },
            ...base64Images.map((base64) => ({
              inline_data: {
                mime_type: "image/jpeg",
                data: base64.split(",")[1], // Remove data URL prefix
              },
            })),
          ],
        },
      ],
    };

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status, response.statusText);
      return getFallbackResult();
    }

    const data = await response.json();
    
    // Extract the response text
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!responseText) {
      console.error("No response text from Gemini");
      return getFallbackResult();
    }

    // Parse JSON response
    let result: AIConditionResult;
    try {
      // Clean the response - remove markdown code blocks if present
      const cleanedText = responseText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      
      result = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", responseText);
      return getFallbackResult();
    }

    console.log("🤖 Condition Result:", result);

    // Validate result structure
    if (!result.condition || typeof result.confidence !== "number" || typeof result.estimatedPrice !== "number") {
      console.error("Invalid result structure from Gemini:", result);
      return getFallbackResult();
    }

    // Check confidence threshold
    if (result.confidence < 50) {
      console.warn("Low confidence from Gemini, using fallback");
      return getFallbackResult();
    }

    return result;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return getFallbackResult();
  }
}

/**
 * Fallback result when AI analysis fails
 */
function getFallbackResult(): AIConditionResult {
  return {
    condition: "average",
    confidence: 0,
    estimatedPrice: 200,
  };
}
