// Dummy local data for prototype demo - no Firebase dependency

// In-memory storage for orders
let dummyOrders: OrderData[] = [];
let orderIdCounter = 1;

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

/**
 * Dummy upload - converts images to data URLs for demo
 */
async function uploadImages(imageFiles: File[]): Promise<string[]> {
  const uploadedUrls: string[] = [];

  for (const file of imageFiles) {
    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      uploadedUrls.push(dataUrl);
    } catch (error) {
      console.error(`Failed to process image:`, error);
    }
  }

  return uploadedUrls;
}

/**
 * Creates a new order with dummy local storage
 * @param orderData - The order data to store
 * @param imageFiles - Array of image files to upload (optional)
 * @returns The order ID
 */
export async function createOrder(
  orderData: Omit<OrderData, "id" | "images" | "createdAt" | "status"> & { images?: string[] },
  imageFiles?: File[]
): Promise<string> {
  let imageUrls: string[] = [];

  // Process images if files are provided
  if (imageFiles && imageFiles.length > 0) {
    try {
      imageUrls = await uploadImages(imageFiles);
    } catch (error) {
      console.error("Image processing failed:", error);
    }
  } else if (orderData.images) {
    imageUrls = orderData.images;
  }

  // Create order with dummy ID
  const orderId = `order-${orderIdCounter++}`;
  const newOrder: OrderData = {
    id: orderId,
    userId: orderData.userId,
    category: orderData.category,
    images: imageUrls,
    address: orderData.address,
    schedule: orderData.schedule,
    pricing: orderData.pricing,
    condition: orderData.condition,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  // Store in memory
  dummyOrders.push(newOrder);
  
  // Also store in localStorage for persistence across page reloads
  try {
    const existing = JSON.parse(localStorage.getItem('dummyOrders') || '[]');
    existing.push(newOrder);
    localStorage.setItem('dummyOrders', JSON.stringify(existing));
  } catch (e) {
    console.warn('localStorage not available');
  }

  console.log("✓ Order created:", orderId, newOrder);
  return orderId;
}

/**
 * Fetch active orders for a user
 */
export async function fetchActiveOrders(userId: string): Promise<OrderData[]> {
  // Load from localStorage if available
  try {
    const stored = localStorage.getItem('dummyOrders');
    if (stored) {
      dummyOrders = JSON.parse(stored);
    }
  } catch (e) {
    console.warn('localStorage not available');
  }

  const activeOrders = dummyOrders.filter(
    order => order.userId === userId && 
    ["pending", "accepted", "en_route"].includes(order.status)
  );
  
  console.log("Fetched orders:", activeOrders);
  return activeOrders;
}

/**
 * Subscribe to order updates (simulated polling for demo)
 */
export function subscribeToOrder(orderId: string, onData: (order: OrderData | null) => void) {
  let disposed = false;
  
  const poll = async () => {
    if (disposed) return;
    
    // Load from localStorage
    try {
      const stored = localStorage.getItem('dummyOrders');
      if (stored) {
        dummyOrders = JSON.parse(stored);
      }
    } catch (e) {
      // ignore
    }
    
    const order = dummyOrders.find(o => o.id === orderId) || null;
    console.log("Live update:", order);
    onData(order);
  };

  poll();
  const timer = window.setInterval(poll, 3000);
  
  return () => {
    disposed = true;
    window.clearInterval(timer);
  };
}
