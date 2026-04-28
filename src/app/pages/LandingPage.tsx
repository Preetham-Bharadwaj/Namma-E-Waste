import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  CheckCircle,
  FileCheck,
  Leaf,
  MapPin,
  Recycle,
  Route,
  ShieldCheck,
  Truck,
  WalletCards,
  Zap,
} from "lucide-react";
import imgWasteManagement from "figma:asset/48ed888e1c0283497a8826e19bca83cbe29ac571.png";
import imgAbstractEWaste from "figma:asset/fd8227291bfb8e8adc0ff02f726d63758cea6c03.png";
import { Logo } from "../components/Logo";

// Fix Leaflet marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const features = [
  {
    icon: Zap,
    title: "Instant EPR value",
    text: "Upload a device photo and see an estimated recycling credit before pickup.",
  },
  {
    icon: Truck,
    title: "Bengaluru pickup slots",
    text: "Schedule home pickups across supported Bengaluru pincodes with live collector tracking.",
  },
  {
    icon: FileCheck,
    title: "Digital certificate",
    text: "Download proof of responsible disposal after pickup completion.",
  },
];

const steps = ["Login and accept terms", "Choose your e-waste item", "Upload photo for analysis", "Schedule a Bengaluru pickup", "Track collector and get certificate"];

const comparison = [
  {
    basic: "A user only requests an e-waste pickup.",
    upgraded: "The user gets a complete Bengaluru-only journey: estimate, schedule, track, and certify.",
  },
  {
    basic: "Device value is unclear until someone manually checks it.",
    upgraded: "AI photo analysis shows an estimated EPR credit value before confirming pickup.",
  },
  {
    basic: "Pickup status depends on phone calls or WhatsApp updates.",
    upgraded: "Live tracking, collector details, and notification updates are available inside the app.",
  },
  {
    basic: "There is no strong proof that the item was responsibly recycled.",
    upgraded: "A downloadable digital certificate records device, weight, credits, and data wipe status.",
  },
];

const newFeatures = [
  {
    icon: BrainCircuit,
    title: "AI device analysis",
    text: "Photo upload estimates category, refurbishability, and credit value.",
  },
  {
    icon: WalletCards,
    title: "EPR credit wallet",
    text: "Residents can see earned value instead of treating e-waste as zero-value scrap.",
  },
  {
    icon: Route,
    title: "Collector tracking",
    text: "Bengaluru pickup movement, collector identity, rating, and call action in one screen.",
  },
  {
    icon: ShieldCheck,
    title: "Trust layer",
    text: "Terms consent, certificate download, and certified data wipe messaging make it safer.",
  },
];

// Bangalore Map Component
function BangaloreMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Bangalore coordinates
    const bangaloreCoords: [number, number] = [12.9716, 77.5946];

    mapInstance.current = L.map(mapRef.current, {
      center: bangaloreCoords,
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapInstance.current);

    // Add marker for Bangalore
    L.marker(bangaloreCoords).addTo(mapInstance.current)
      .bindPopup("<b>Bengaluru</b><br>E-waste pickup available here")
      .openPopup();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[300px] rounded-[20px] sm:rounded-[28px] border border-[#d6e7df] shadow-[0_18px_50px_rgba(27,94,32,0.12)]"
      style={{ zIndex: 1 }}
    />
  );
}

export function LandingPage() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("nammaEWasteUser") === "authenticated";
  const startPath = isAuthenticated ? "/app" : "/auth";

  return (
    <main className="min-h-screen bg-[#f8faf7] text-[#10201c]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#d6e7df]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="shrink-0 hover:-translate-y-0.5 transition-transform duration-200 active:scale-95" aria-label="Go home">
            <Logo className="h-[42px] sm:h-[52px] lg:h-[56px]" />
          </button>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-[#33423f] font-semibold hover:text-[#0f766e] transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="text-[#33423f] font-semibold hover:text-[#0f766e] transition-colors duration-200">How It Works</a>
            <a href="#impact" className="text-[#33423f] font-semibold hover:text-[#0f766e] transition-colors duration-200">Impact</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <button onClick={() => navigate("/auth")} className="h-10 sm:h-11 lg:h-12 px-4 sm:px-6 lg:px-7 rounded-xl border-2 border-[#0f766e]/20 text-[#0f766e] font-bold text-sm sm:text-base hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Login
            </button>
            <button onClick={() => navigate(startPath)} className="h-10 sm:h-11 lg:h-12 px-4 sm:px-6 lg:px-7 rounded-xl bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-600 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
              <ArrowRight size={16} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#022c22] text-white">
        <img src={imgAbstractEWaste} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/90 via-transparent to-[#022c22]/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-[1fr_460px] gap-8 lg:gap-10 items-center">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
              <MapPin size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Built strictly for Bengaluru residents</span>
              <span className="sm:hidden">Bengaluru-only</span>
            </div>
            <h1 className="text-[32px] sm:text-[42px] lg:text-[68px] font-bold leading-[1.1] sm:leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-50 to-emerald-200 drop-shadow-sm">
              Bengaluru's smarter way to clear e-waste
            </h1>
            <p className="mt-4 sm:mt-6 text-emerald-50/90 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Namma E-Waste helps residents schedule verified electronic waste pickups, estimate EPR credit value, track collectors, and receive disposal certificates from one simple web app.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={() => navigate(startPath)} className="h-[48px] sm:h-[56px] px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#f59e0b] to-amber-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 transition-all duration-200">
                Start Recycling
                <ArrowRight size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
              <button onClick={() => navigate("/auth")} className="h-[48px] sm:h-[56px] px-6 sm:px-8 rounded-full bg-white/5 backdrop-blur-sm border border-emerald-400/30 text-white font-bold text-sm sm:text-base hover:bg-white/10 hover:-translate-y-1 active:scale-95 transition-all duration-200">
                Login
              </button>
            </div>
          </div>

          <div className="relative rounded-[20px] sm:rounded-[28px] bg-white/95 backdrop-blur-xl border border-white/20 text-[#10201c] p-3 sm:p-4 shadow-soft-xl transition-all hover:-translate-y-2 hover:shadow-3d duration-300 order-1 lg:order-2">
            <img src={imgWasteManagement} alt="Responsible e-waste recycling preview" className="w-full h-44 sm:h-56 object-cover rounded-xl sm:rounded-2xl" />
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
              {[
                ["Rs. 630", "Credits"],
                ["12.4kg", "CO2 saved"],
                ["4.8", "Collector"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl sm:rounded-2xl bg-[#ecfdf5] p-2 sm:p-3 text-center">
                  <p className="text-[#0f766e] font-bold text-lg sm:text-xl">{value}</p>
                  <p className="text-[#33423f] text-[10px] sm:text-xs font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-center">
          <div>
            <p className="text-[#0f766e] font-bold tracking-normal text-xs sm:text-sm">WHY WE BUILT THIS</p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-2 sm:mt-3">E-waste disposal in Bengaluru is still confusing.</h2>
            <p className="text-[#33423f] mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8">
              Old mobiles, laptops, batteries, and appliances often sit at home or enter informal scrap channels. Namma E-Waste solves this by giving Bengaluru residents a clear, traceable, reward-backed pickup flow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
              {["Responsible recycling", "Pickup visibility", "Estimated value", "Certificate proof"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl sm:rounded-2xl bg-white border border-[#d6e7df] px-3 sm:px-4 py-2.5 sm:py-3">
                  <CheckCircle size={18} className="text-[#0f766e] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-semibold text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <BangaloreMap />
        </div>
      </section>

      <section className="bg-[#ecfdf5] border-y border-[#d6e7df]">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-10 sm:py-14 lg:py-20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 sm:gap-8 lg:gap-10">
            <div>
              <p className="text-[#0f766e] font-bold tracking-normal text-xs sm:text-sm">IDEA UPGRADE</p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-2 sm:mt-3">
                From a pickup app to a smarter civic recycling platform.
              </h2>
              <p className="text-[#33423f] mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8">
                Your original idea solves the pickup problem. Namma E-Waste uplifts it by adding value discovery, trust, live visibility, and proof of responsible disposal for Bengaluru residents.
              </p>
            </div>

            <div className="bg-white border border-[#d6e7df] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(27,94,32,0.10)]">
              <div className="grid grid-cols-2 bg-[#0f766e] text-white">
                <div className="p-2.5 sm:p-4 font-bold text-xs sm:text-sm text-center sm:text-left">Basic e-waste pickup idea</div>
                <div className="p-2.5 sm:p-4 font-bold bg-[#115e59] text-xs sm:text-sm text-center sm:text-left">Namma E-Waste upgrade</div>
              </div>
              {comparison.map((row) => (
                <div key={row.basic} className="grid md:grid-cols-2 border-t border-[#d6e7df]">
                  <div className="p-3 sm:p-4 text-[#33423f] text-xs sm:text-sm leading-5 sm:leading-7 bg-white">{row.basic}</div>
                  <div className="p-3 sm:p-4 text-[#10201c] text-xs sm:text-sm leading-5 sm:leading-7 bg-[#f8faf7] flex gap-2 sm:gap-3">
                    <CheckCircle size={18} className="text-[#0f766e] shrink-0 mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" />
                    <span className="font-semibold">{row.upgraded}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <p className="text-[#0f766e] font-bold tracking-normal text-xs sm:text-sm">NEW FEATURES THAT LIFT THE PROJECT</p>
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mt-2 sm:mt-2">More than collection. It adds intelligence, value, and proof.</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {newFeatures.map((feature) => (
                <article key={feature.title} className="rounded-[16px] sm:rounded-[20px] bg-white border border-emerald-100 p-4 sm:p-6 shadow-soft-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3d">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#f59e0b] text-white flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon size={22} className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg">{feature.title}</h4>
                  <p className="text-[#33423f] text-xs sm:text-sm mt-2 leading-5 sm:leading-6">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[#d6e7df]">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-10 sm:py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-[#0f766e] font-bold tracking-normal text-xs sm:text-sm">WHAT THE APP DOES</p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 sm:mt-3">One flow from pickup request to certificate.</h2>
            </div>
            <p className="text-[#33423f] max-w-xl text-sm sm:text-base leading-6 sm:leading-7">
              Designed as a practical SaaS-style civic product for Bengaluru households, apartments, and student communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-[16px] sm:rounded-[20px] border border-emerald-100 bg-white p-5 sm:p-7 shadow-soft-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3d">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0f766e] text-white flex items-center justify-center mb-4 sm:mb-5">
                  <feature.icon size={23} className="w-5 h-5 sm:w-[23px] sm:h-[23px]" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl">{feature.title}</h3>
                <p className="text-[#33423f] mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-10 sm:py-14 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-10">
        <div>
          <p className="text-[#0f766e] font-bold tracking-normal text-xs sm:text-sm">HOW IT WORKS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 sm:mt-3">Simple enough for every Bengaluru home.</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-3 sm:gap-4 rounded-[16px] sm:rounded-[20px] bg-white border border-emerald-100 p-4 sm:p-5 shadow-soft-xl transition-all duration-300 hover:-translate-x-1 hover:shadow-3d">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f59e0b] text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0">{index + 1}</span>
              <p className="font-semibold text-sm sm:text-base">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f766e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {[
            { icon: Leaf, label: "Cleaner Bengaluru", text: "Keeps electronics out of mixed waste streams." },
            { icon: ShieldCheck, label: "Trusted process", text: "Pickup, tracking, and certificate records in one place." },
            { icon: Award, label: "Value for residents", text: "EPR credit estimates make responsible disposal rewarding." },
          ].map((item) => (
            <div key={item.label} className="rounded-[16px] sm:rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-6 shadow-soft-xl transition-all hover:-translate-y-1 hover:shadow-3d hover:bg-white/10">
              <item.icon size={26} className="text-[#f59e0b] w-5.5 h-5.5 sm:w-[26px] sm:h-[26px]" />
              <h3 className="font-bold text-lg sm:text-xl mt-3 sm:mt-4">{item.label}</h3>
              <p className="text-white/75 mt-2 text-sm sm:text-base leading-6 sm:leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#042f2e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row gap-4 justify-between">
          <div>
            <p className="font-bold text-base sm:text-lg">Namma E-Waste</p>
            <p className="text-white/60 text-xs sm:text-sm mt-1">A Bengaluru-only e-waste pickup and EPR credit prototype.</p>
          </div>
          <div className="text-white/60 text-xs sm:text-sm lg:text-right">
            <p>Copyright 2026 Namma E-Waste. All rights reserved.</p>
            <p>Built for responsible e-waste awareness, pickup scheduling, and digital recycling certificates in Bengaluru.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
