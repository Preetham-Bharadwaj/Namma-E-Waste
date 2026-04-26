import { Outlet, useLocation, useNavigate } from "react-router";
import { CalendarDays, ChevronDown, Home, MapPin, Recycle, Route, User } from "lucide-react";
import { NotificationBell } from "./NotificationBell";
import { useUser } from "../context/UserContext";
import { Logo } from "./Logo";

const navItems = [
  { icon: Home, label: "Home", path: "/app" },
  { icon: CalendarDays, label: "Schedule", path: "/app/schedule" },
  { icon: Route, label: "Track", path: "/app/track" },
  { icon: User, label: "Profile", path: "/app/profile" },
];



export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useUser();
  const notificationCount = state.activePickups.length;

  const isActive = (path: string) => (path === "/app" ? location.pathname === "/app" : location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* Full-width Modern Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="mx-auto flex h-[64px] md:h-[84px] w-full max-w-[1600px] items-center justify-between gap-2 md:gap-4 px-4 sm:px-6 lg:px-12">
          
          {/* Left: Logo & Location (Inline) */}
          <div className="flex items-center gap-3 sm:gap-8 shrink-0 ml-1 min-w-0">
            <button type="button" onClick={() => navigate("/app")} className="shrink-0 hover:-translate-y-0.5 transition-transform duration-200 active:scale-95" aria-label="Go home">
              <Logo className="h-[32px] sm:h-[38px] md:h-[46px]" />
            </button>
            
            <button
              type="button"
              onClick={() => navigate("/app/profile")}
              className="flex items-center gap-1 sm:gap-2 text-[13px] sm:text-[15px] font-bold text-slate-800 hover:text-emerald-700 transition-colors overflow-hidden"
            >
              <MapPin className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] text-emerald-600 shrink-0" strokeWidth={2.5} />
              <span className="truncate max-w-[80px] sm:max-w-[250px]">{state.detectedLocation || "Bengaluru"}</span>
              <ChevronDown className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-slate-400 stroke-[2.5px] shrink-0" />
            </button>
          </div>

          {/* Right: Gold Pill Navigation & Bell (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            
            {/* Nav Pill */}
            <div className="flex h-[52px] items-center bg-gradient-to-r from-[#dfad62] via-[#fbf2d8] to-[#e8c894] rounded-full px-10 shadow-sm border border-slate-200/50 relative overflow-hidden">
              {/* Inner highlight for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-10 relative z-10">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className={`text-[14px] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                      isActive(item.path) ? "text-slate-950 font-black tracking-tight" : "text-slate-800 font-bold hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Bell Icon (Outside) */}
            <NotificationBell
              iconSize={24}
              wrapperClassName="h-14 w-14"
              buttonClassName="relative hover:opacity-80 transition-all duration-200 flex items-center justify-center h-14 w-14 rounded-full hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-200 text-slate-800"
              panelClassName="absolute right-0 top-16 z-[70] w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
              badge={notificationCount > 0 ? String(notificationCount) : undefined}
              badgeClassName="absolute top-3 right-3 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white border-2 border-white"
            />
          </div>

          {/* Mobile Bell */}
          <NotificationBell
            iconSize={24}
            wrapperClassName="md:hidden mr-2 shrink-0"
            buttonClassName="relative cursor-pointer text-slate-800"
            panelClassName="fixed right-3 top-[70px] z-[70] w-[min(320px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            badge={notificationCount > 0 ? String(notificationCount) : undefined}
            badgeClassName="absolute -top-1 -right-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#f59e0b] text-[9px] font-bold text-white border-2 border-white"
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1600px] px-6 py-6 pb-24 lg:px-12 md:py-10 md:pb-12">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_28px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={`flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold transition-all duration-200 hover:-translate-y-1 active:scale-95 ${
                isActive(item.path) ? "bg-gradient-to-t from-emerald-50 to-transparent text-emerald-800 shadow-sm border border-emerald-100/50" : "text-slate-500 hover:text-emerald-700"
              }`}
            >
              <item.icon size={19} />
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
