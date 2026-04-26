import { useNavigate } from "react-router";
import { ArrowRight, Recycle, Leaf, TrendingUp } from "lucide-react";
import svgPaths from "../../imports/SplashScreen/svg-srzxc3vcv0";
import imgAbstractEWaste from "figma:asset/fd8227291bfb8e8adc0ff02f726d63758cea6c03.png";

function RecycleLogo() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-3xl border border-[rgba(255,255,255,0.2)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]" />
      <div className="relative z-10 w-[70px] h-[70px]">
        <svg className="w-full h-full" fill="none" viewBox="0 0 70.0909 70">
          <path d={svgPaths.p2f556b80} fill="white" />
        </svg>
      </div>
      {/* Circuit badge */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#99f6e4] rounded-full flex items-center justify-center border-4 border-[#0f766e] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
          <path d={svgPaths.p88b8800} fill="#134e4a" />
        </svg>
      </div>
    </div>
  );
}

export function SplashPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#0f766e] flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(19,78,74,0.4)] via-[#0f766e] to-[#0f766e]" />

      {/* Decorative circles */}
      <div className="absolute top-[-84px] right-[-39px] w-80 h-80 rounded-full border border-[#90d689] opacity-10" />
      <div className="absolute bottom-40 left-[-78px] w-96 h-96 rounded-full border border-[#90d689] opacity-10" />

      {/* Abstract e-waste image at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imgAbstractEWaste}
            alt=""
            className="absolute w-full h-[195%] top-[-47.5%] left-0 max-w-none object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white mix-blend-saturation" />
      </div>

      {/* Desktop Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left/Top: Branding */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 lg:py-0">
          {/* Logo */}
          <div className="mb-8">
            <RecycleLogo />
          </div>

          {/* Brand name */}
          <h1
            className="text-white text-center mb-3"
            style={{ fontWeight: 800, fontSize: "42px", letterSpacing: "0", lineHeight: 1.15 }}
          >
            Namma E-Waste
          </h1>
          <p
            className="text-[rgba(255,255,255,0.9)] text-center max-w-sm"
            style={{ fontWeight: 500, fontSize: "18px", lineHeight: 1.5 }}
          >
            Turn Your E-Waste Into Value
          </p>

          {/* Feature chips */}
          <div className="flex gap-2 mt-8 flex-wrap justify-center">
            <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2">
              <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 9.91401 9.91218">
                <path d={svgPaths.p2f459b80} fill="#ACF4A4" />
              </svg>
              <span className="text-white" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.6px" }}>
                SUSTAINABLE
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2">
              <TrendingUp size={12} className="text-[#ACF4A4]" />
              <span className="text-white" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.6px" }}>
                PROFITABLE
              </span>
            </div>
          </div>

          {/* Desktop feature cards */}
          <div className="hidden lg:grid grid-cols-3 gap-4 mt-12 max-w-2xl w-full">
            {[
              { icon: Recycle, title: "Easy Pickup", desc: "Schedule at your convenience" },
              { icon: Leaf, title: "Eco Certified", desc: "Verified green disposal process" },
              { icon: TrendingUp, title: "Earn Credits", desc: "Get EPR credits for recycling" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(255,255,255,0.12)] rounded-[20px] p-5 shadow-soft-xl transition-all duration-300 hover:shadow-3d hover:-translate-y-1"
              >
                <card.icon size={24} className="text-[#99f6e4] mb-3" />
                <p className="text-white" style={{ fontWeight: 600, fontSize: "14px" }}>{card.title}</p>
                <p className="text-[rgba(255,255,255,0.6)]" style={{ fontSize: "12px", marginTop: "4px" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right/Bottom: Actions */}
        <div className="lg:w-[420px] flex flex-col justify-end lg:justify-center px-6 pb-12 lg:pb-0 lg:py-16 gap-4">
          {/* CTA Button */}
          <button
            onClick={() => navigate("/app")}
            className="w-full h-[52px] bg-gradient-to-r from-[#f59e0b] to-amber-500 rounded-full flex items-center justify-center gap-2 shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            <span className="text-white" style={{ fontWeight: 600, fontSize: "16px" }}>
              Get Started
            </span>
            <ArrowRight size={16} color="white" />
          </button>

          {/* Sign in */}
          <button
            onClick={() => navigate("/app")}
            className="w-full py-3 flex items-center justify-center gap-1 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <span className="text-[rgba(255,255,255,0.7)]" style={{ fontSize: "16px" }}>
              Already have an account?
            </span>
            <span className="text-white" style={{ fontWeight: 600, fontSize: "16px" }}>
              {" "}Sign In
            </span>
          </button>

          {/* Skip */}
          <button
            onClick={() => navigate("/app")}
            className="w-full pt-2 flex items-center justify-center hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <span
              className="text-[rgba(255,255,255,0.5)]"
              style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2.4px" }}
            >
              SKIP ONBOARDING
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
