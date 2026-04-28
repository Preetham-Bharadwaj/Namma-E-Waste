import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import L from "leaflet";
import { CheckCircle2, Phone, Truck, User } from "lucide-react";
import { useUser } from "../context/UserContext";
import { subscribeToOrder, type OrderData } from "../../services/orderService";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function TrackingMap({ userLocation }: { userLocation: [number, number] | null }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !userLocation) return undefined;

    L.Marker.prototype.options.icon = defaultIcon;
    const map = L.map(containerRef.current, { zoomControl: false, attributionControl: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);
    L.marker(userLocation).addTo(map).bindPopup("Your location");
    map.setView(userLocation, 14);

    return () => map.remove();
  }, [userLocation]);

  return userLocation ? (
    <div ref={containerRef} className="h-full w-full" />
  ) : (
    <div className="grid h-full place-items-center bg-slate-50 p-6 text-center text-sm text-slate-500">
      Enable location access to show your pickup point on OpenStreetMap.
    </div>
  );
}

export function TrackPage() {
  const navigate = useNavigate();
  const { completePickup } = useUser();
  const [pickup, setPickup] = useState<{
    id: string;
    item: string;
    status: "pending" | "accepted" | "en_route" | "completed";
    address: { addressLine: string; locality: string };
    schedule: { date: string; slotLabel: string };
  } | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (position) => setUserLocation([position.coords.latitude, position.coords.longitude]),
      () => setUserLocation(null),
    );
  }, []);

  useEffect(() => {
    const orderId = localStorage.getItem("activeOrderId");
    if (!orderId) {
      setPickup(null);
      return;
    }

    const unsubscribe = subscribeToOrder(orderId, (order) => {
      if (!order) {
        setPickup(null);
        return;
      }

      const mapped = {
        id: order.id || orderId,
        item: order.category,
        status: order.status,
        address: {
          addressLine: order.address.street || order.address.houseNo || "",
          locality: order.address.locality || "",
        },
        schedule: {
          date: order.schedule.date,
          slotLabel: order.schedule.slotLabel,
        },
      };
      setPickup(mapped);
    });

    return () => unsubscribe();
  }, []);

  if (!pickup) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-400">
          <Truck size={25} />
        </div>
        <h1 className="mt-4 text-xl font-semibold text-slate-950">No active pickup</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Schedule a pickup to track its status here.</p>
        <button type="button" onClick={() => navigate("/app/schedule")} className="mt-6 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 text-sm font-bold text-white shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all">
          Schedule Pickup
        </button>
      </div>
    );
  }

  const statusCopy = {
    pending: "Searching for pickup partner...",
    accepted: "Pickup partner assigned",
    en_route: "Pickup partner is on the way",
    completed: "Pickup completed",
  }[pickup.status];

  const isCompleted = pickup.status === "completed";
  const isEnRoute = pickup.status === "en_route" || isCompleted;
  const isAssigned = pickup.status === "accepted" || isEnRoute;

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        
        {/* Left: Header + Map */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-black text-slate-950 uppercase tracking-wide">Live Tracking</h1>
              <p className="text-[13px] font-semibold text-slate-500 mt-1 uppercase tracking-widest">Order #{pickup.id.substring(0, 8)}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-800 border border-emerald-200">
              {pickup.status.replace("_", " ")}
            </span>
          </div>

          <div className="relative h-[400px] lg:h-[650px] w-full overflow-hidden rounded-[24px] border border-slate-200 shadow-sm bg-slate-50">
            <TrackingMap userLocation={userLocation} />
            <div className="absolute top-4 left-4 z-[1000] rounded-full bg-white/95 backdrop-blur px-4 py-2 text-[11px] font-black shadow-md border border-slate-200 uppercase tracking-widest text-slate-900">
              {statusCopy}
            </div>
          </div>
        </div>

        {/* Right: Stacked Timeline & Details */}
        <div className="flex flex-col gap-4">
          
          {/* Collector Card */}
          <section className="rounded-[16px] bg-white p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <User size={24} strokeWidth={2.5} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-bold text-slate-950">{isAssigned ? "Assigned Partner" : "Awaiting Partner"}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Pickup Partner</span>
                </div>
              </div>
              {isAssigned && (
                <button type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors" aria-label="Call partner">
                  <Phone size={18} strokeWidth={2.5} />
                </button>
              )}
            </div>
          </section>

          {/* Timeline */}
          <section className="rounded-[16px] bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-[12px] font-black text-slate-950 uppercase tracking-widest mb-6">Status Timeline</h2>
            <div className="space-y-0">
              
              {/* Step 1: Confirmed */}
              <div className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="h-4 w-4 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-50 z-10" />
                  <div className="absolute top-4 bottom-[-24px] w-[2px] bg-emerald-500" />
                </div>
                <div className="pb-8">
                  <p className="text-[14px] font-bold text-slate-900 leading-none">Pickup Confirmed</p>
                  <p className="text-[12px] font-medium text-slate-500 mt-1">10:00 AM</p>
                </div>
              </div>

              {/* Step 2: Assigned */}
              <div className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className={`h-4 w-4 shrink-0 rounded-full z-10 ${isAssigned ? 'bg-emerald-500 ring-4 ring-emerald-50' : 'bg-slate-200 ring-4 ring-slate-50'}`} />
                  <div className={`absolute top-4 bottom-[-24px] w-[2px] ${isAssigned ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                </div>
                <div className="pb-8">
                  <p className={`text-[14px] font-bold leading-none ${isAssigned ? 'text-slate-900' : 'text-slate-400'}`}>Collector Assigned</p>
                  {isAssigned && <p className="text-[12px] font-medium text-slate-500 mt-1">10:15 AM</p>}
                </div>
              </div>

              {/* Step 3: En Route */}
              <div className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className={`h-4 w-4 shrink-0 rounded-full z-10 ${isEnRoute ? (pickup.status === 'en_route' ? 'bg-emerald-600 ring-4 ring-emerald-100 animate-pulse' : 'bg-emerald-500 ring-4 ring-emerald-50') : 'bg-slate-200 ring-4 ring-slate-50'}`} />
                  <div className={`absolute top-4 bottom-[-24px] w-[2px] ${isCompleted ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                </div>
                <div className="pb-8">
                  <p className={`text-[14px] font-bold leading-none ${pickup.status === 'en_route' ? 'text-emerald-700' : (isEnRoute ? 'text-slate-900' : 'text-slate-400')}`}>En Route</p>
                  {pickup.status === 'en_route' && <p className="text-[12px] font-black text-emerald-600 mt-1.5 uppercase tracking-wider">ETA: 15 mins</p>}
                </div>
              </div>

              {/* Step 4: Completed */}
              <div className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className={`h-4 w-4 shrink-0 rounded-full z-10 ${isCompleted ? 'bg-emerald-500 ring-4 ring-emerald-50' : 'bg-slate-200 ring-4 ring-slate-50'}`} />
                </div>
                <div>
                  <p className={`text-[14px] font-bold leading-none ${isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>Completed</p>
                </div>
              </div>

            </div>
          </section>

          {/* Pickup Details */}
          <section className="rounded-[16px] bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-[12px] font-black text-slate-950 uppercase tracking-widest mb-4">Pickup Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Address</p>
                <p className="text-[14px] font-bold text-slate-900">{pickup.address.addressLine}, {pickup.address.locality}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Date & Time</p>
                  <p className="text-[14px] font-bold text-slate-900">{pickup.schedule.date}, {pickup.schedule.slotLabel}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Category</p>
                  <p className="text-[14px] font-bold text-slate-900 capitalize">{pickup.item}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button type="button" className="w-full rounded-[14px] bg-emerald-600 py-4 text-[13px] font-black uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:scale-95">
              Contact Collector
            </button>
            {isCompleted && (
              <button type="button" onClick={() => completePickup(pickup.id)} className="w-full mt-3 rounded-[14px] bg-white border border-slate-200 py-4 text-[13px] font-black uppercase tracking-widest text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95">
                Move to History
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
