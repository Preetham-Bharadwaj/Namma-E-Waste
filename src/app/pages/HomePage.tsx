import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import type React from "react";
import { ArrowRight, Clock, MapPin, Plus, Award } from "lucide-react";
import { useUser } from "../context/UserContext";
import { fetchActiveOrders, type OrderData } from "../../services/orderService";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[24px] font-black text-[#0b2e26] tracking-tight">{children}</h2>;
}

export function HomePage() {
  const navigate = useNavigate();
  const { state, selectedAddress } = useUser();
  const [activeOrder, setActiveOrder] = useState<OrderData | null>(null);
  const recentHistory = state.history.slice(0, 3);

  useEffect(() => {
    const profile = localStorage.getItem("nammaEWasteProfile");
    let userId = "demo-user";
    if (profile) {
      try {
        userId = JSON.parse(profile).email || "demo-user";
      } catch {
        userId = "demo-user";
      }
    }

    fetchActiveOrders(userId)
      .then((orders) => {
        setActiveOrder(orders[0] || null);
      })
      .catch((error) => {
        console.error("Failed to fetch active orders:", error);
        setActiveOrder(null);
      });
  }, []);

  const activePickup = useMemo(() => {
    if (!activeOrder?.id) return null;
    return {
      id: activeOrder.id,
      item: activeOrder.category,
      schedule: {
        date: activeOrder.schedule.date,
        slotLabel: activeOrder.schedule.slotLabel,
      },
      status: activeOrder.status,
    };
  }, [activeOrder]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        <section className="relative overflow-hidden rounded-[32px] bg-[#11332A] p-6 text-white shadow-soft-xl transition-transform hover:-translate-y-1 hover:shadow-3d duration-300 sm:p-10">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 mix-blend-screen pointer-events-none">
             {/* A placeholder for the recycling bin graphic from the design */}
             <div className="w-full h-full bg-gradient-to-l from-emerald-400/30 to-transparent"></div>
          </div>
          <div className="relative max-w-xl z-10">
            <h1 className="text-[40px] font-black leading-[1.05] tracking-tight sm:text-[54px] text-white">
              Smart E-Waste Pickup at Your<br/>
              <span className="text-[#00d984]">Doorstep</span>
            </h1>
            <p className="mt-6 max-w-sm text-[11px] font-semibold tracking-[1px] leading-relaxed text-white/80 uppercase">
              Fast, reliable, and rewarding recycling at your doorstep.
            </p>
            <button
              type="button"
              onClick={() => navigate("/app/schedule")}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#00c875] px-8 text-[13px] font-bold tracking-wide text-white shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-[#00e083] active:scale-95 transition-all duration-200"
            >
              SCHEDULE PICKUP
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </section>

        {/* Address Selector */}
        {selectedAddress ? (
          <section className="rounded-[16px] bg-white border border-slate-200 p-4 shadow-sm flex items-center justify-between transition-all hover:border-emerald-300">
            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600">
                <MapPin size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-bold text-slate-950 truncate max-w-[200px]">{selectedAddress.label} - {selectedAddress.locality}</p>
                <p className="text-[12px] font-medium text-slate-500 mt-0.5">{selectedAddress.phone}</p>
              </div>
            </div>
            <button onClick={() => navigate("/app/profile")} className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest hover:text-emerald-700">Change</button>
          </section>
        ) : (
          <section className="rounded-[16px] bg-amber-50 border border-amber-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-amber-600" />
              <p className="text-[14px] font-bold text-amber-900">No address saved</p>
            </div>
            <button onClick={() => navigate("/app/profile")} className="text-[11px] font-bold text-amber-700 uppercase tracking-widest hover:text-amber-800">Add Address</button>
          </section>
        )}

        {activePickup && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-4 px-1">
              <SectionTitle>Active Pickup</SectionTitle>
              <span className="rounded-full bg-[#faefdb] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#b36a16]">
                In Progress
              </span>
            </div>
            <section className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white p-6 shadow-soft-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3d">
              <div className="absolute -right-8 -top-8 opacity-5 text-emerald-600">
                <MapPin size={200} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Item Scheduled</p>
                <p className="mt-1 text-[26px] font-black text-[#0b2e26] lowercase">{activePickup.item}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2">Time Slot</p>
                    <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0b2e26]">
                      <Clock size={16} className="text-emerald-600" />
                      {activePickup.schedule.date} • {activePickup.schedule.slotLabel}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2">Collector</p>
                    <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0b2e26]">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full border-[1.5px] border-[#0b2e26]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0b2e26]" />
                      </div>
                      Assigned Partner
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/app/track")}
                  className="mt-8 w-full rounded-[12px] bg-[#0b2e26] py-3.5 text-[13px] font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#11332A] hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  Track Live
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Schedule New Pickup Card */}
        <button onClick={() => navigate("/app/schedule")} className="w-full flex items-center justify-between rounded-[20px] bg-white border border-slate-200 p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 place-items-center group-hover:bg-emerald-100 transition-colors">
              <Plus size={24} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[16px] font-black text-slate-900">Schedule New Pickup</p>
              <p className="text-[13px] font-medium text-slate-500 mt-0.5">Clear out old devices instantly</p>
            </div>
          </div>
          <ArrowRight size={20} className="text-emerald-600" strokeWidth={2.5} />
        </button>
      </div>

      <aside className="space-y-4">
        {/* Impact Section */}
        <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <SectionTitle>Your Impact</SectionTitle>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-[16px] bg-emerald-50/50 border border-emerald-100 p-4 text-center">
              <p className="text-[22px] font-black text-emerald-800 leading-none">{state.history.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">Items</p>
            </div>
            <div className="rounded-[16px] bg-emerald-50/50 border border-emerald-100 p-4 text-center">
              <p className="text-[22px] font-black text-emerald-800 leading-none">{state.history.reduce((sum, item) => sum + item.pricing.estimated, 0)}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">Credits</p>
            </div>
            <div className="rounded-[16px] bg-emerald-50/50 border border-emerald-100 p-4 text-center">
              <p className="text-[22px] font-black text-emerald-800 leading-none">{state.history.length * 2}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">kg CO2</p>
            </div>
          </div>
          <button className="mt-5 w-full rounded-[12px] border border-emerald-200 bg-white py-3.5 text-[12px] font-bold uppercase tracking-widest text-emerald-700 hover:bg-emerald-50 shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2">
            <Award size={16} />
            Redeem Now
          </button>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300">
          <SectionTitle>Recent Activity</SectionTitle>
          {recentHistory.length > 0 ? (
            <div className="mt-6 space-y-4">
              {recentHistory.map((pickup) => (
                <div key={pickup.id} className="flex items-center gap-4 rounded-[20px] bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100/50">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold text-[#0b2e26] capitalize">{pickup.item} pickup completed</h3>
                    <p className="text-[10px] font-medium tracking-wider text-slate-400 uppercase mt-0.5">{pickup.schedule.date}</p>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wide text-emerald-600 text-right">
                    Rs {pickup.pricing.estimated}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-[20px] border border-slate-200 bg-slate-50 p-5 text-[13px] font-semibold text-slate-500">
              No pickup activity yet.
            </div>
          )}
        </section>
      </aside>
    </div>
  );
}
