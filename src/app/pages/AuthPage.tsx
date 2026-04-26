import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle2, Leaf, Lock, Mail, Phone, Recycle, ShieldCheck, Truck, User, X } from "lucide-react";

const DEMO_EMAIL = "demo@nammaewaste.in";
const DEMO_PASSWORD = "namma123";

export function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("Ananya Rao");
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [phone, setPhone] = useState("+91 98765 43210");
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (mode === "login" && (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD)) {
      setError("Use demo@nammaewaste.in and namma123 to enter the app.");
      return;
    }

    if (!acceptedTerms) {
      setError("Please accept the terms and conditions to continue.");
      return;
    }

    const displayName = name.trim() || email.split("@")[0] || "Namma E-Waste User";
    localStorage.setItem("nammaEWasteUser", "authenticated");
    localStorage.setItem(
      "nammaEWasteProfile",
      JSON.stringify({
        name: displayName,
        email,
        phone,
        city: "Bengaluru",
        credits: 630,
        pickups: 8,
      }),
    );
    navigate("/app");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#f8faf7] to-[#ecfdf5] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-[1fr_1fr] lg:min-h-[700px]">
        {/* Left Section - Branding */}
        <div className="relative bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f766e] p-6 sm:p-8 lg:p-12 text-white flex flex-col justify-between overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
          </div>

          {/* Close Button - Mobile Only */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 lg:hidden z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="relative">
                  <Leaf size={28} sm:size={32} className="text-white" fill="white" strokeWidth={1.5} />
                  <Recycle size={14} sm:size={16} className="absolute -right-2 -bottom-1 text-[#f59e0b]" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Namma E-Waste</h1>
                <p className="text-white/70 text-xs sm:text-sm font-medium">Bengaluru's E-Waste Solution</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
              Responsible recycling,<br/>made simple.
            </h2>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-md leading-relaxed">
              Schedule verified e-waste pickups, earn EPR credits, and help keep Bengaluru clean.
            </p>
          </div>

          {/* Feature Cards - Desktop */}
          <div className="relative z-10 hidden lg:grid grid-cols-1 gap-4 mt-8">
            {[
              { icon: ShieldCheck, title: "Certified", desc: "Data wipe included" },
              { icon: Truck, title: "Fast Pickup", desc: "Slots across Bengaluru" },
              { icon: CheckCircle2, title: "EPR Value", desc: "Instant credit estimate" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center shrink-0">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">{feature.title}</p>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white">
          {/* Back Button - Desktop */}
          <button
            onClick={() => navigate("/")}
            className="hidden lg:flex absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>

          <div className="mb-6 sm:mb-8">
            <p className="text-[#0f766e] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Secure Access</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10201c] leading-tight">
              {mode === "login" ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              {mode === "login"
                ? "Login to manage pickups, credits, and certificates."
                : "Join thousands of Bengaluru residents recycling responsibly."}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="grid grid-cols-2 bg-gray-100 rounded-2xl p-1.5 mb-6">
            {(["login", "signup"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setMode(item);
                  setError("");
                }}
                className={`h-12 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                  mode === item
                    ? "bg-white text-[#0f766e] shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item === "login" ? "Login" : "Sign up"}
              </button>
            ))}
          </div>

          {/* Demo Credentials Box */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-emerald-800 text-sm mb-1">Demo Credentials</p>
                <p className="text-emerald-700 text-xs sm:text-sm">
                  <span className="font-medium">Email:</span> {DEMO_EMAIL}
                </p>
                <p className="text-emerald-700 text-xs sm:text-sm">
                  <span className="font-medium">Password:</span> {DEMO_PASSWORD}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "signup" && (
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-[#0f766e] focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all text-sm sm:text-base"
                  placeholder="Full name"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-[#0f766e] focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all text-sm sm:text-base"
                placeholder="Email address"
                required
              />
            </div>

            {mode === "signup" && (
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-[#0f766e] focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all text-sm sm:text-base"
                  placeholder="Mobile number"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-[#0f766e] focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all text-sm sm:text-base"
                placeholder="Password"
                required
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                  className="peer h-5 w-5 rounded border-2 border-gray-300 text-[#0f766e] focus:ring-[#0f766e] focus:ring-offset-0 transition-all"
                />
                <CheckCircle2
                  size={20}
                  className="absolute left-0 top-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                />
              </div>
              <span className="text-gray-600 text-xs sm:text-sm leading-5 group-hover:text-gray-800 transition-colors">
                I accept the{" "}
                <a href="#" className="text-[#0f766e] font-medium hover:underline">
                  terms
                </a>
                ,{" "}
                <a href="#" className="text-[#0f766e] font-medium hover:underline">
                  data wipe consent
                </a>
                , and{" "}
                <a href="#" className="text-[#0f766e] font-medium hover:underline">
                  pickup rules
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="w-full h-12 sm:h-14 rounded-xl bg-gradient-to-r from-[#f59e0b] via-amber-500 to-amber-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              {mode === "login" ? "Login & Continue" : "Create Account"}
              <ArrowRight size={18} />
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2">
              <X size={16} className="text-red-500 shrink-0" />
              <p className="text-sm font-semibold text-red-700">{error}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
