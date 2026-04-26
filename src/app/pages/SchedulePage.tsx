import { useMemo, useRef, useState } from "react";
import type React from "react";
import { useNavigate } from "react-router";
import { Battery, Camera, Check, ChevronRight, Clock, Laptop, LocateFixed, Monitor, MoreHorizontal, Phone, Plus, Smartphone, Upload, X } from "lucide-react";
import { Address, useUser } from "../context/UserContext";
import { createOrder } from "../../services/orderService";
import { analyzeDeviceCondition } from "../../services/aiService";
import "./SchedulePage.css";

const categories = [
  { id: "phone", label: "Phone", icon: Smartphone, estimate: 300 },
  { id: "laptop", label: "Laptop", icon: Laptop, estimate: 600 },
  { id: "tv", label: "TV", icon: Monitor, estimate: 420 },
  { id: "battery", label: "Battery", icon: Battery, estimate: 180 },
  { id: "accessories", label: "Accessories", icon: Phone, estimate: 120 },
  { id: "other", label: "Other", icon: MoreHorizontal, estimate: 150 },
];

const slots = [
  { id: "morning", label: "Morning", time: "8 AM - 11 AM" },
  { id: "afternoon", label: "Afternoon", time: "12 PM - 3 PM" },
  { id: "evening", label: "Evening", time: "4 PM - 7 PM" },
] as const;

const steps = ["Select item", "Upload images", "Address", "Date & time", "Confirm"];
const MIN_REQUIRED_IMAGES = 3;

function getDates() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return {
      value: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }),
    };
  });
}

function pickTag(tags: Record<string, string> | undefined, keys: string[]) {
  if (!tags) return "";
  for (const key of keys) {
    const value = tags[key];
    if (value && value.trim()) return value.trim();
  }
  return "";
}

function parseOverpassAddress(data: any, latitude: number, longitude: number) {
  const elements = Array.isArray(data?.elements) ? data.elements : [];
  const withTags = elements.map((item: any) => item?.tags).filter(Boolean) as Array<Record<string, string>>;
  const tags = withTags[0] || {};

  const houseNumber = pickTag(tags, ["addr:housenumber"]);
  const street = pickTag(tags, ["addr:street", "addr:place", "name"]);
  const locality = pickTag(tags, ["addr:suburb", "addr:neighbourhood", "addr:quarter", "addr:village", "addr:hamlet"]);
  const city = pickTag(tags, ["addr:city", "addr:town", "addr:district", "addr:state"]);
  const pincode = pickTag(tags, ["addr:postcode", "postal_code"]);

  const addressLine =
    [houseNumber, street].filter(Boolean).join(", ") ||
    street ||
    `Lat ${latitude.toFixed(5)}, Lng ${longitude.toFixed(5)}`;

  return {
    addressLine,
    locality: locality || city || "Current Area",
    city: city || "Bengaluru",
    pincode,
  };
}

export function SchedulePage() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const { state, selectedAddress, addAddress } = useUser();
  const dates = useMemo(getDates, []);
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("phone");
  const [otherText, setOtherText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [addressMode, setAddressMode] = useState<"saved" | "new">("saved");
  const [addressId, setAddressId] = useState(selectedAddress?.id || "");
  const [newAddress, setNewAddress] = useState({ label: "Home", addressLine: "", locality: "", city: "Bengaluru", pincode: "", phone: state.profile.phone });
  const [date, setDate] = useState(dates[0].value);
  const [slot, setSlot] = useState<(typeof slots)[number]["id"]>("morning");
  const [condition, setCondition] = useState<string>("");
  const [confidence, setConfidence] = useState<number>(0);
  const [aiEstimatedPrice, setAiEstimatedPrice] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");

  const selectedCategory = categories.find((item) => item.id === category) || categories[0];
  const selectedSlot = slots.find((item) => item.id === slot) || slots[0];
  const chosenAddress = addressMode === "saved" ? state.addresses.find((item) => item.id === addressId) || selectedAddress : ({ ...newAddress, id: "new" } as Address);
  const itemName = category === "other" ? otherText || "Other item" : selectedCategory.label;
  const canContinue = [
    category !== "other" || otherText.trim().length > 2,
    images.length >= MIN_REQUIRED_IMAGES,
    Boolean(chosenAddress?.addressLine && chosenAddress.locality && chosenAddress.phone),
    Boolean(date && slot),
    true,
  ][step];

  const onFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []).slice(0, 3 - images.length);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => setImages((current) => [...current, reader.result as string].slice(0, 3));
      reader.readAsDataURL(file);
    });
    event.target.value = "";
  };

  const handleContinue = async () => {
    if (step === 1) {
      if (images.length < MIN_REQUIRED_IMAGES || isAnalyzing) return;

      console.log("\uD83D\uDCF8 Images:", images);
      console.log("\uD83D\uDE80 AI started");
      setIsAnalyzing(true);
      const analysisStartedAt = Date.now();

      try {
        const imageFiles: File[] = [];
        for (const image of images) {
          try {
            const response = await fetch(image);
            const blob = await response.blob();
            const file = new File([blob], `image-${Date.now()}.jpg`, { type: "image/jpeg" });
            imageFiles.push(file);
          } catch (e) {
            console.error("Failed to convert image to file:", e);
          }
        }

        const result = await analyzeDeviceCondition(imageFiles, itemName);
        console.log("\uD83E\uDD16 AI result:", result);
        setCondition(result.condition);
        setConfidence(result.confidence);
        setAiEstimatedPrice(result.estimatedPrice);
      } catch (err) {
        console.error("AI failed", err);
        setCondition("average");
        setConfidence(0);
        setAiEstimatedPrice(200);
      }

      const elapsed = Date.now() - analysisStartedAt;
      const minLoadingMs = 3000;
      if (elapsed < minLoadingMs) {
        await new Promise((resolve) => setTimeout(resolve, minLoadingMs - elapsed));
      }
      setIsAnalyzing(false);
    }

    setStep((current) => current + 1);
  };

  const fillAddressFromCurrentLocation = async () => {
    if (!navigator.geolocation || isFetchingLocation) return;

    setLocationError("");
    setAddressMode("new");
    setIsFetchingLocation(true);

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const overpassQuery = `
        [out:json][timeout:25];
        (
          node(around:150,${latitude},${longitude})["addr:housenumber"];
          way(around:150,${latitude},${longitude})["addr:housenumber"];
          relation(around:150,${latitude},${longitude})["addr:housenumber"];
          node(around:250,${latitude},${longitude})["addr:street"];
          way(around:250,${latitude},${longitude})["addr:street"];
          relation(around:250,${latitude},${longitude})["addr:street"];
        );
        out tags center 10;
      `;

      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body: `data=${encodeURIComponent(overpassQuery)}`,
      });

      if (!response.ok) {
        throw new Error(`Overpass request failed: ${response.status}`);
      }

      const data = await response.json();
      const resolved = parseOverpassAddress(data, latitude, longitude);

      setNewAddress((current) => ({
        ...current,
        label: current.label || "Current Location",
        addressLine: resolved.addressLine,
        locality: resolved.locality,
        city: resolved.city,
        pincode: resolved.pincode || current.pincode,
        phone: current.phone || state.profile.phone,
      }));
    } catch (error) {
      console.error("Failed to fetch current location address:", error);
      setLocationError("Unable to fetch current location address.");
    } finally {
      setIsFetchingLocation(false);
    }
  };

  const confirmPickup = async () => {
    let finalAddress = chosenAddress;
    if (addressMode === "new") {
      addAddress(newAddress);
      finalAddress = { ...newAddress, id: `addr-${Date.now()}` };
    }

    // Guard against undefined address
    if (!finalAddress) {
      console.error("No address selected");
      return;
    }

    // Get userId from localStorage (same as UserContext.getUserId())
    const profile = localStorage.getItem("nammaEWasteProfile");
    let userId = "demo-user";
    if (profile) {
      try {
        const parsed = JSON.parse(profile);
        userId = parsed.email || "demo-user";
      } catch {
        userId = "demo-user";
      }
    }

    // Prepare data for Firestore
    const orderData = {
      userId: userId,
      category: category,
      images,
      address: {
        houseNo: finalAddress.addressLine,
        street: finalAddress.addressLine,
        locality: finalAddress.locality,
        city: finalAddress.city,
        pincode: finalAddress.pincode,
        phone: finalAddress.phone,
      },
      schedule: {
        date: dates.find((item) => item.value === date)?.label || date,
        slot: slot,
        slotLabel: selectedSlot.label,
      },
      pricing: {
        estimated: aiEstimatedPrice ?? selectedCategory.estimate,
      },
      condition,
    };

    console.log("Saving order:", orderData);

    try {
      // Convert base64 images to File objects for upload
      const imageFiles: File[] = [];
      for (const image of images) {
        try {
          const response = await fetch(image);
          const blob = await response.blob();
          const file = new File([blob], `image-${Date.now()}.jpg`, { type: "image/jpeg" });
          imageFiles.push(file);
        } catch (e) {
          console.error("Failed to convert image to file:", e);
        }
      }

      console.log("🚀 Saving order...");
      const orderId = await createOrder(orderData, imageFiles);
      console.log("✅ Order saved:", orderId);
      localStorage.setItem("activeOrderId", orderId);
      navigate("/app/track");
    } catch (error) {
      console.error("❌ Failed to save order:", error);
      return;
    }
  };

  return (
    <div className="schedule-page main-layout grid gap-6 lg:gap-8 lg:grid-cols-[1fr_360px] max-w-6xl mx-auto">
      {/* Main Flow Area */}
      <section className="card bg-white rounded-3xl md:border md:border-slate-200 p-4 sm:p-8">
        
        {/* Custom Progress Bar */}
        <div className="mb-10 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide w-full">
          {steps.map((label, index) => (
            <div key={label} className="flex items-center gap-3 shrink-0">
              <div className={`h-[6px] w-[50px] sm:w-[70px] rounded-full transition-all duration-300 ${index <= step ? "bg-[#02b36c]" : "bg-slate-200"}`} />
              <span className={`text-[13px] sm:text-[14px] font-[800] transition-all tracking-tight whitespace-nowrap ${index === step ? "text-[#033323]" : "text-slate-400"}`}>{label}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Select Item */}
        {step === 0 && (
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
            <h1 className="text-xl sm:text-2xl font-[900] text-slate-900 tracking-tight">Select item</h1>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
              {categories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  className={`rounded-[20px] border p-5 text-left transition-all duration-200 ${
                    category === item.id 
                      ? "border-[#02b36c] bg-[#f0fbf6]" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <item.icon size={26} className={category === item.id ? "text-[#02b36c]" : "text-slate-500"} strokeWidth={category === item.id ? 2.5 : 2} />
                  <p className="mt-8 text-[15px] font-[800] text-slate-900">{item.label}</p>
                </button>
              ))}
            </div>
            {category === "other" && (
              <input
                value={otherText}
                onChange={(event) => setOtherText(event.target.value)}
                placeholder="Describe the item"
                className="mt-6 h-14 w-full rounded-[20px] border border-slate-200 px-5 text-[15px] font-medium outline-none focus:border-[#02b36c] focus:ring-4 focus:ring-[#02b36c]/10 transition-all"
              />
            )}
          </div>
        )}

        {/* Step 2: Upload Images */}
        {step === 1 && (
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
            <h1 className="text-xl sm:text-2xl font-[900] text-slate-900 tracking-tight">Upload images</h1>
            <p className="mt-1.5 text-[15px] text-slate-500 font-medium">Add 3 clear photos.</p>
            
                        {isAnalyzing && (
              <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[24px] border border-slate-200/60 bg-white/45 backdrop-blur-md">
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-600" />
                  <p className="text-[15px] font-[800] text-slate-900">Gemini is analyzing...</p>
                  <p className="text-[12px] font-medium text-slate-500">Please wait while we inspect all 3 photos.</p>
                </div>
              </div>
            )}
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={image} className="relative aspect-square overflow-hidden rounded-[20px] border border-slate-200">
                  <img src={image} alt="E-waste preview" className="h-full w-full object-cover" />
                  <button type="button" onClick={() => setImages((current) => current.filter((_, itemIndex) => itemIndex !== index))} className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
                    <X size={16} className="text-slate-700" strokeWidth={2.5} />
                  </button>
                </div>
              ))}
              {images.length < MIN_REQUIRED_IMAGES && (
                <button type="button" onClick={() => fileRef.current?.click()} className="flex aspect-square flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed border-slate-200 bg-white text-[14px] font-[800] text-[#475569] hover:bg-slate-50 hover:border-slate-300 transition-colors">
                  <Camera size={26} className="text-[#64748b]" strokeWidth={2} />
                  Add
                </button>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={onFiles} />
          </div>
        )}

        {/* Step 3: Address */}
        {step === 2 && (
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
            <h1 className="text-xl sm:text-2xl font-[900] text-slate-900 tracking-tight">Pickup address</h1>
            <div className="mt-6 grid gap-4">
              {state.addresses.map((address) => (
                <button
                  key={address.id}
                  type="button"
                  onClick={() => {
                    setAddressMode("saved");
                    setAddressId(address.id);
                  }}
                  className={`rounded-[20px] border p-5 text-left transition-all duration-200 ${
                    addressMode === "saved" && addressId === address.id 
                      ? "border-[#02b36c] bg-[#f0fbf6]" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <p className="text-[15px] font-[800] text-slate-900">{address.label}</p>
                  <p className="mt-1.5 text-[14px] font-medium text-slate-500 leading-relaxed">{address.addressLine}, {address.locality}</p>
                </button>
              ))}
              <button
                type="button"
                onClick={fillAddressFromCurrentLocation}
                disabled={isFetchingLocation}
                className="mt-2 w-full rounded-[20px] border border-emerald-200 bg-emerald-50/60 p-4 text-left transition-all hover:border-emerald-300 hover:bg-emerald-50 disabled:opacity-60"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-emerald-600 shadow-sm border border-emerald-100">
                      <LocateFixed size={19} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[15px] font-[900] text-emerald-900">
                        {isFetchingLocation ? "Fetching current location..." : "Use current location"}
                      </p>
                      <p className="mt-0.5 text-[12px] font-semibold text-emerald-700/80">Auto-fill from GPS and nearby map data</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-emerald-600 shrink-0" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setAddressMode("new")}
                className="flex items-center gap-2 text-[14px] font-[800] text-slate-700 hover:text-slate-900 transition-colors w-fit px-2 py-1.5 rounded-lg"
              >
                <Plus size={16} strokeWidth={3} />
                Add address manually
              </button>

              {locationError && <p className="text-[13px] font-medium text-red-500">{locationError}</p>}
            </div>
            {addressMode === "new" && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 animate-in fade-in slide-in-from-top-2">
                {(["label", "addressLine", "locality", "city", "pincode", "phone"] as const).map((field) => (
                  <input
                    key={field}
                    value={newAddress[field]}
                    onChange={(event) => setNewAddress((current) => ({ ...current, [field]: event.target.value }))}
                    placeholder={field === "addressLine" ? "Short address" : field.charAt(0).toUpperCase() + field.slice(1)}
                    className="h-14 rounded-[20px] border border-slate-200 px-5 text-[15px] font-medium outline-none focus:border-[#02b36c] focus:ring-4 focus:ring-[#02b36c]/10 transition-all placeholder:text-slate-400"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 4: Date & Time */}
        {step === 3 && (
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
            <h1 className="text-xl sm:text-2xl font-[900] text-slate-900 tracking-tight">Date & time</h1>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              {dates.map((item) => (
                <button 
                  key={item.value} 
                  type="button" 
                  onClick={() => setDate(item.value)} 
                  className={`rounded-[20px] border px-4 py-3.5 text-[14px] font-[800] transition-all duration-200 text-center ${
                    date === item.value 
                      ? "border-[#02b36c] bg-[#f0fbf6] text-[#033323]" 
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-3">
              {slots.map((item) => (
                <button 
                  key={item.id} 
                  type="button" 
                  onClick={() => setSlot(item.id)} 
                  className={`rounded-[20px] border p-4 sm:p-5 text-left transition-all duration-200 ${
                    slot === item.id 
                      ? "border-[#02b36c] bg-[#f0fbf6]" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <p className="text-[15px] font-[800] text-slate-900">{item.label}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                    <Clock size={14} />{item.time}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Confirm */}
        {step === 4 && (
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
            <h1 className="text-xl sm:text-2xl font-[900] text-slate-900 tracking-tight">Confirm pickup</h1>
            <p className="mt-1.5 text-[15px] text-slate-500 font-medium">Review the summary and confirm your request.</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-12 flex gap-4">
          {step > 0 && (
            <button type="button" onClick={() => setStep((current) => current - 1)} className="h-[56px] rounded-full border border-slate-200 bg-white px-8 text-[15px] font-[800] text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-sm">
              Back
            </button>
          )}
          {step < 4 ? (
            <button type="button" disabled={!canContinue || isAnalyzing} onClick={handleContinue} className="h-[56px] flex-1 rounded-full bg-[#02b36c] px-8 text-[16px] font-[800] text-white hover:bg-[#02985c] active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all shadow-sm">
              {isAnalyzing ? "Gemini is analyzing..." : "Continue"}
            </button>
          ) : (
            <button type="button" onClick={confirmPickup} className="h-[56px] flex-1 rounded-full bg-[#02b36c] px-8 text-[16px] font-[800] text-white hover:bg-[#02985c] active:scale-95 transition-all shadow-sm">
              Confirm Pickup
            </button>
          )}
        </div>
      </section>

      {/* Summary Sidebar (Desktop) */}
      <aside className="summary card rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 lg:sticky lg:top-[104px] lg:self-start">
        <h2 className="text-[18px] font-[900] text-slate-900 tracking-tight">Summary</h2>
        {step === 4 ? (
          <div className="mt-6 space-y-4 text-[15px]">
            <div className="flex items-center justify-between gap-3"><span className="text-slate-500 font-medium">Item</span><span className="font-[800] text-slate-900">{itemName}</span></div>
            <div className="flex items-center justify-between gap-3"><span className="text-slate-500 font-medium">Images</span><span className="font-[800] text-slate-900">{images.length}/3</span></div>
            <div className="pt-2">
               <span className="text-slate-500 font-medium">Address</span>
               <p className="mt-1 font-[800] text-slate-900 leading-tight">{chosenAddress?.label || "Not selected"} · {chosenAddress?.locality || "Add locality"}</p>
            </div>
            <div className="flex items-center justify-between gap-3 pt-2"><span className="text-slate-500 font-medium">Slot</span><span className="font-[800] text-slate-900">{selectedSlot.label}</span></div>

            {aiEstimatedPrice !== null && (
              <div className="mt-6 rounded-[20px] bg-[#f0fbf6] p-5">
                <p className="text-[14px] font-[800] text-[#02985c]">Estimated pricing</p>
                <p className="mt-1 text-[28px] font-[900] text-[#033323] tracking-tight">Rs. {aiEstimatedPrice}</p>
                <p className="mt-2 text-xs font-medium text-emerald-600">AI-estimated value based on condition</p>
              </div>
            )}
            {aiEstimatedPrice === null && (
              <div className="mt-6 rounded-[20px] bg-[#f0fbf6] p-5">
                <p className="text-[14px] font-[800] text-[#02985c]">Estimated pricing</p>
                <p className="mt-1 text-[28px] font-[900] text-[#033323] tracking-tight">Rs. {selectedCategory.estimate}</p>
              </div>
            )}

            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3.5 text-[13px] font-medium text-slate-500 border border-slate-100 mt-4">
              <Upload size={16} className="shrink-0" />
              Final value is confirmed during pickup inspection.
            </div>
          </div>
        ) : (
          <p className="mt-6 text-[14px] font-medium text-slate-500">Summary will appear in the final confirm step.</p>
        )}
      </aside>
    </div>
  );
}




