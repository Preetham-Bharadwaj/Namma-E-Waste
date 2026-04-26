import { useState } from "react";
import type React from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Download, Edit2, Headphones, MapPin, Plus, Trash2, User, Settings } from "lucide-react";
import { useUser } from "../context/UserContext";

export function ProfilePage() {
  const navigate = useNavigate();
  const { state, addAddress, updateAddress, deleteAddress, selectAddress } = useUser();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ label: "Home", addressLine: "", locality: "", city: "Bengaluru", pincode: "", phone: state.profile.phone });

  const editingAddress = editingId ? state.addresses.find((address) => address.id === editingId) : null;
  const impactExists = state.history.length > 0;

  const beginEdit = (id: string) => {
    const address = state.addresses.find((item) => item.id === id);
    if (!address) return;
    setEditingId(id);
    setIsAdding(false);
    setForm({
      label: address.label,
      addressLine: address.addressLine,
      locality: address.locality,
      city: address.city,
      pincode: address.pincode,
      phone: address.phone,
    });
  };

  const closeForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setForm({ label: "Home", addressLine: "", locality: "", city: "Bengaluru", pincode: "", phone: state.profile.phone });
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingId) {
      updateAddress(editingId, form);
    } else {
      addAddress(form);
    }
    closeForm();
  };

  return (
    <div className="mx-auto w-full max-w-[900px] space-y-6 pb-10">
      {/* 1. Profile Header */}
      <section className="flex items-center justify-between rounded-[16px] bg-white border border-slate-200 p-5 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 shadow-sm border border-emerald-200">
            <User size={28} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-950 leading-tight">{state.profile.name}</h1>
            <p className="text-[15px] font-semibold text-slate-500 mt-1">{state.profile.phone}</p>
          </div>
        </div>
        <button type="button" className="p-2 text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 rounded-full hover:bg-slate-100">
          <Settings size={22} />
        </button>
      </section>

      {/* 2. Saved Addresses */}
      <section className="space-y-4">
        <h2 className="text-[13px] font-black text-slate-950 tracking-wider uppercase px-1">Saved addresses</h2>
        <div className="grid gap-3">
          {state.addresses.map((address) => (
            <button
              key={address.id}
              type="button"
              onClick={() => selectAddress(address.id)}
              className={`rounded-[12px] bg-white p-5 text-left shadow-sm transition-all duration-200 border-2 ${
                state.selectedAddressId === address.id
                  ? "border-emerald-600 shadow-md bg-emerald-50/10"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <MapPin size={18} className="text-slate-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[16px] font-bold text-slate-950">{address.label}</p>
                      {state.selectedAddressId === address.id && (
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-800">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[14px] font-medium text-slate-500 leading-relaxed">
                      {address.addressLine}, {address.locality}, {address.city}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); beginEdit(address.id); }}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    <Edit2 size={16} strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); deleteAddress(address.id); }}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* 3. Add Address Button */}
        {!isAdding && !editingAddress && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsAdding(true);
                setEditingId(null);
              }}
              className="w-full rounded-[12px] bg-white border border-slate-300 py-4 text-[14px] font-bold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:shadow-md active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <Plus size={18} strokeWidth={2.5} />
              ADD NEW ADDRESS
            </button>
          </div>
        )}
      </section>

      {(isAdding || editingAddress) && (
        <section className="rounded-[12px] border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold">{editingId ? "Edit address" : "Add new address"}</h2>
          <form onSubmit={submit} className="mt-3 grid gap-3 sm:grid-cols-2">
            {(["label", "addressLine", "locality", "city", "pincode", "phone"] as const).map((field) => (
              <input
                key={field}
                value={form[field]}
                onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))}
                placeholder={field === "addressLine" ? "Short address" : field}
                className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-emerald-700"
              />
            ))}
            <div className="flex gap-2 sm:col-span-2">
              <button type="button" onClick={closeForm} className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600">Cancel</button>
              <button type="submit" className="h-10 rounded-xl bg-emerald-700 px-4 text-sm font-semibold text-white">Save</button>
            </div>
          </form>
        </section>
      )}

      {/* 4. Impact Summary */}
      <section className="space-y-4 pt-2">
        <h2 className="text-[13px] font-black text-slate-950 tracking-wider uppercase px-1">Impact Summary</h2>
        {impactExists ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[16px] bg-emerald-50/50 p-5 border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center transition-all hover:shadow-md">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Total Pickups</p>
              <p className="mt-1 text-3xl font-black text-emerald-950">{state.history.length}</p>
            </div>
            <div className="rounded-[16px] bg-emerald-50/50 p-5 border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center transition-all hover:shadow-md">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Credits Earned</p>
              <p className="mt-1 text-3xl font-black text-emerald-700">Rs. {state.history.reduce((sum, item) => sum + item.pricing.estimated, 0)}</p>
            </div>
          </div>
        ) : (
          <div className="rounded-[16px] bg-slate-50 p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-[20px] font-black text-slate-900 tracking-tight">NO IMPACT YET</h3>
            <p className="mt-2 text-[14px] font-medium text-slate-500 max-w-sm">
              Complete your first verified pickup to start tracking your environmental contribution and rewards.
            </p>
            <button type="button" onClick={() => navigate("/app/schedule")} className="mt-6 rounded-full bg-emerald-600 px-6 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:scale-95">
              Schedule Pickup
            </button>
          </div>
        )}
      </section>

      {/* 5. Settings Options */}
      <section className="space-y-4 pt-2">
        <h2 className="text-[13px] font-black text-slate-950 tracking-wider uppercase px-1">Settings & Support</h2>
        <div className="rounded-[12px] border border-slate-200 bg-white shadow-sm overflow-hidden">
          <button type="button" className="flex w-full items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors border-b border-slate-100">
            <span className="flex items-center gap-3 text-[15px] font-bold text-slate-900">
              <Download size={22} className="text-slate-400" />
              Certificates & Invoices
            </span>
            <ChevronRight size={18} className="text-slate-400 stroke-[3px]" />
          </button>
          <button type="button" className="flex w-full items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
            <span className="flex items-center gap-3 text-[15px] font-bold text-slate-900">
              <Headphones size={22} className="text-slate-400" />
              Contact Support
            </span>
            <ChevronRight size={18} className="text-slate-400 stroke-[3px]" />
          </button>
        </div>
      </section>
    </div>
  );
}
