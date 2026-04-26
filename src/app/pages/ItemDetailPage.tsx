import { useNavigate, useParams } from "react-router";
import { useState, useRef } from "react";
import {
  ChevronLeft,
  Camera,
  Upload,
  CheckCircle,
  RotateCcw,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { NotificationBell } from "../components/NotificationBell";
import svgPaths from "../../imports/ItemDetailUpload/svg-iccic6rl0p";
import imgLaptopRef from "figma:asset/33f8dfafc9c1294876e11d5adc9eb5cc9f4a8467.png";

const itemLabels: Record<string, string> = {
  mobile: "Mobile Phone",
  laptop: "Laptop",
  television: "Television",
  battery: "Battery",
  refrigerator: "Refrigerator",
  other: "Other",
};

const itemValues: Record<string, number> = {
  mobile: 210,
  laptop: 420,
  television: 350,
  battery: 85,
  refrigerator: 650,
  other: 150,
};

const itemCarbonSaved: Record<string, string> = {
  mobile: "4.2 kg",
  laptop: "12.4 kg",
  television: "8.6 kg",
  battery: "2.1 kg",
  refrigerator: "18.3 kg",
  other: "3.5 kg",
};

type AnalysisState = "idle" | "analyzing" | "done";

export function ItemDetailPage() {
  const navigate = useNavigate();
  const { type = "laptop" } = useParams();
  const label = itemLabels[type] || "Device";
  const value = itemValues[type] || 200;
  const carbon = itemCarbonSaved[type] || "5.0 kg";

  const [hasImage, setHasImage] = useState(false);
  const [analysisState, setAnalysisState] = useState<AnalysisState>("idle");
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setHasImage(true);
      setAnalysisState("analyzing");
      setTimeout(() => setAnalysisState("done"), 2500);
    }
  };

  const handleReset = () => {
    setHasImage(false);
    setAnalysisState("idle");
  };

  const handleSchedule = () => {
    localStorage.setItem(
      "nammaEWastePickup",
      JSON.stringify({ item: label, credit: value, carbon, category: "Electronics" }),
    );
    setShowConfirm(true);
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8faf7]">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between bg-white border-b border-[#e5eee9] px-4 py-4 sticky top-0 z-10 shadow-[0_4px_20px_rgba(27,94,32,0.08)]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#eef6f3] transition-colors"
          >
            <ChevronLeft size={16} className="text-[#115e59]" />
          </button>
          <span className="text-[#115e59]" style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.5px" }}>
            {label}
          </span>
        </div>
        <NotificationBell />
      </header>

      {/* Desktop Back Button */}
      <div className="hidden lg:flex items-center gap-3 px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#115e59] hover:text-[#0f766e] transition-colors"
        >
          <ChevronLeft size={18} />
          <span style={{ fontWeight: 500, fontSize: "14px" }}>Back to Home</span>
        </button>
      </div>

      <div className="flex-1 px-4 lg:px-8 pt-4 pb-36 lg:pb-8 max-w-4xl lg:mx-auto w-full">
        {/* Desktop Title */}
        <div className="hidden lg:block mb-6">
          <h2 className="text-[#10201c]" style={{ fontWeight: 700, fontSize: "28px", letterSpacing: "-0.5px" }}>
            {label} - Upload & Analyze
          </h2>
          <p className="text-[#647067]" style={{ fontSize: "14px", marginTop: "4px" }}>
            Take or upload a photo for AI-powered valuation
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-8">
          {/* Left: Upload Section */}
          <div>
            {/* Image Upload Box */}
            <div
              className="relative bg-[#eef6f3] rounded-xl border-2 border-dashed border-[#0f766e] cursor-pointer hover:bg-[#e5eee9] transition-colors overflow-hidden mb-4"
              style={{ minHeight: "240px" }}
              onClick={handleUpload}
            >
              {hasImage ? (
                <>
                  {/* Show uploaded image preview */}
                  <div className="absolute inset-0 opacity-20">
                    <img src={imgLaptopRef} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 bg-[#0f766e] rounded-full flex items-center justify-center">
                      <CheckCircle size={32} color="white" />
                    </div>
                    <p className="text-[#0f766e]" style={{ fontWeight: 600, fontSize: "16px" }}>
                      Image Uploaded!
                    </p>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleReset(); }}
                      className="flex items-center gap-1 text-[#33423f] hover:text-[#10201c] transition-colors"
                      style={{ fontSize: "13px" }}
                    >
                      <RotateCcw size={13} /> Re-upload
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-8 gap-4">
                  <div className="w-16 h-16">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 40 36">
                      <path d={svgPaths.p19d4fab0} fill="#134e4a" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[#134e4a]" style={{ fontWeight: 600, fontSize: "18px", lineHeight: 1.4 }}>
                      Tap to photograph your device
                    </p>
                    <p className="text-[#33423f] mt-1" style={{ fontSize: "14px" }}>
                      Ensure good lighting for AI analysis
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpload();
                      }}
                      className="flex items-center gap-2 bg-[#0f766e] text-white rounded-full px-4 py-2 hover:bg-[#134e4a] transition-colors"
                    >
                      <Camera size={16} />
                      <span style={{ fontSize: "13px", fontWeight: 500 }}>Camera</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Photo marked as good quality for AI analysis.");
                      }}
                      className="flex items-center gap-2 bg-white border border-[#d6e7df] text-[#33423f] rounded-full px-4 py-2 hover:border-[#0f766e] transition-colors"
                    >
                      <Upload size={16} />
                      <span style={{ fontSize: "13px", fontWeight: 500 }}>Upload</span>
                    </button>
                  </div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* AI Analysis Card */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#10201c]" style={{ fontWeight: 600, fontSize: "20px" }}>
                  AI Analysis
                </h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${analysisState === "analyzing" ? "bg-[#f59e0b] animate-pulse" : analysisState === "done" ? "bg-[#0f766e]" : "bg-gray-300"}`}
                  />
                  <span className="text-[#33423f]" style={{ fontSize: "12px", fontWeight: 600 }}>
                    {analysisState === "analyzing" ? "Analyzing..." : analysisState === "done" ? "Analysis complete" : "Real-time valuation"}
                  </span>
                </div>
              </div>

              <div className="bg-white border border-[#d6e7df] rounded-[20px] p-5 shadow-soft-xl transition-all duration-300 hover:shadow-3d hover:-translate-y-1">
                {/* Badges */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  <div className="flex items-center gap-1 bg-[#0f766e] rounded-full px-3 py-1">
                    <svg className="w-[14px] h-[10px]" fill="none" viewBox="0 0 14 9.91667">
                      <path d={svgPaths.p12cfce00} fill="white" />
                    </svg>
                    <span className="text-white" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.6px" }}>
                      Electronics
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#fef3c7] rounded-full px-3 py-1">
                    <span style={{ fontSize: "11px" }}>Recycle</span>
                    <span className="text-[#451a03]" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.6px" }}>
                      Refurb Candidate
                    </span>
                  </div>
                </div>

                {/* Value */}
                <div className="mb-4">
                  <p className="text-[#33423f]" style={{ fontSize: "14px" }}>EPR Credit Value</p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-[#0f766e]"
                      style={{ fontWeight: 700, fontSize: "32px", letterSpacing: "-0.64px" }}
                    >
                      Rs. {value}
                    </span>
                    <span className="text-[#33423f]" style={{ fontSize: "15px" }}>estimated</span>
                  </div>
                </div>

                {/* Scanning indicator */}
                <div className="bg-[#e5eee9] rounded-lg p-3 flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(251,249,248,0.5)] to-transparent animate-pulse" />
                  <svg className="w-[18px] h-[17px] relative z-10 shrink-0" fill="none" viewBox="0 0 18.3333 17.5">
                    <path d={svgPaths.p16151b00} fill="#134e4a" />
                  </svg>
                  <span className="text-[#134e4a] relative z-10" style={{ fontSize: "12px", fontWeight: 700 }}>
                    {analysisState === "idle"
                      ? "Upload an image to start analysis"
                      : analysisState === "analyzing"
                      ? "Scanning hardware integrity..."
                      : "Done: Analysis complete - All checks passed"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Bento grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-[16px] p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <svg className="w-[18px] h-4 mb-2" fill="none" viewBox="0 0 137 16">
                  <path d={svgPaths.p3ae8f600} fill="#b45309" />
                </svg>
                <p className="text-[#33423f]" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.6px" }}>
                  Carbon Saved
                </p>
                <p className="text-[#10201c]" style={{ fontWeight: 600, fontSize: "20px", marginTop: "4px" }}>
                  {carbon}
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-[16px] p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5 mb-2" fill="none" viewBox="0 0 25.6667 22.1667">
                  <path d={svgPaths.p15aec574} fill="#0f766e" />
                </svg>
                <p className="text-[#33423f]" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.6px" }}>
                  Data Wipe
                </p>
                <p className="text-[#10201c]" style={{ fontWeight: 600, fontSize: "20px", marginTop: "4px" }}>
                  Certified
                </p>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-white border border-emerald-100 rounded-[20px] p-5 shadow-soft-xl transition-all duration-300 hover:shadow-3d hover:-translate-y-1">
              <h4 className="text-[#10201c] mb-3" style={{ fontWeight: 600, fontSize: "15px" }}>
                What happens next?
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Zap, text: "AI analyzes your device condition" },
                  { icon: CheckCircle, text: "Instant EPR credit valuation" },
                  { icon: Shield, text: "Certified data wipe included" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[rgba(27,94,32,0.08)] rounded-full flex items-center justify-center shrink-0">
                      <item.icon size={14} className="text-[#0f766e]" />
                    </div>
                    <p className="text-[#33423f]" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:static lg:px-8 bg-white border-t border-[#e5eee9] p-4 lg:pt-0 lg:pb-8 lg:border-0 lg:bg-transparent lg:max-w-4xl lg:mx-auto lg:w-full">
        <button
          onClick={handleSchedule}
          className="w-full h-[52px] bg-gradient-to-r from-[#f59e0b] to-amber-500 rounded-full flex items-center justify-center gap-4 shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all lg:max-w-md lg:mx-auto"
        >
          <span className="text-white" style={{ fontWeight: 600, fontSize: "18px" }}>
            Confirm & Schedule Pickup
          </span>
          <ArrowRight size={16} color="white" />
        </button>
      </div>
      {showConfirm && (
        <div className="fixed inset-0 bg-black/30 z-[60] flex items-end justify-center">
          <div className="bg-white w-full max-w-[430px] rounded-t-[28px] p-5 shadow-[0_-18px_40px_rgba(0,0,0,0.18)]">
            <div className="w-12 h-1.5 bg-[#d6e7df] rounded-full mx-auto mb-5" />
            <h3 className="text-[#10201c] font-bold text-xl">Confirm item details?</h3>
            <p className="text-[#33423f] text-sm mt-2">
              {label} is estimated at Rs. {value}. We will carry this into your pickup summary.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <button onClick={() => setShowConfirm(false)} className="h-[52px] rounded-full border border-slate-300 text-[#33423f] font-semibold hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all">
                Review
              </button>
              <button onClick={() => navigate("/app/schedule")} className="h-[52px] rounded-full bg-gradient-to-r from-[#f59e0b] to-amber-500 text-white font-bold shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
