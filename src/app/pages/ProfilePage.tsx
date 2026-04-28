import { useState } from "react";
import type React from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Download, Edit2, Headphones, MapPin, Plus, Trash2, User, Settings, Bell, Globe, Shield, HelpCircle, LogOut, Crown } from "lucide-react";
import { useUser } from "../context/UserContext";

export function ProfilePage() {
  const navigate = useNavigate();
  const { state, addAddress, updateAddress, deleteAddress, selectAddress } = useUser();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
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

  const handleLogout = () => {
    localStorage.removeItem("nammaEWasteProfile");
    localStorage.removeItem("nammaEWasteAddresses");
    localStorage.removeItem("nammaEWasteSelectedAddressId");
    localStorage.removeItem("activeOrderId");
    localStorage.removeItem("dummyOrders");
    window.location.href = "/app/auth";
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
      <section className="flex items-center justify-between rounded-[16px] bg-white border border-slate-200 p-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 shadow-sm border border-emerald-200">
            <User size={26} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-950 leading-tight">{state.profile.name}</h1>
            <p className="text-[13px] font-medium text-slate-500 mt-0.5">{state.profile.phone}</p>
          </div>
        </div>
        <button type="button" className="p-2 text-slate-400 hover:text-emerald-600 transition-colors bg-slate-50 rounded-full hover:bg-emerald-50" title="Edit Profile">
          <Edit2 size={18} strokeWidth={2.5} />
        </button>
      </section>

      {/* 2. Saved Addresses */}
      <section className="space-y-3">
        <h2 className="text-[13px] font-black text-slate-950 tracking-wider uppercase px-1">Saved addresses</h2>
        <div className="grid gap-2">
          {state.addresses.map((address) => (
            <button
              key={address.id}
              type="button"
              onClick={() => selectAddress(address.id)}
              className={`rounded-[12px] bg-white p-4 text-left shadow-sm transition-all duration-200 border-2 ${
                state.selectedAddressId === address.id
                  ? "border-emerald-600 shadow-md bg-emerald-50/10"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <MapPin size={16} className="text-slate-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[15px] font-bold text-slate-950">{address.label}</p>
                      {state.selectedAddressId === address.id && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-800">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[13px] font-medium text-slate-500 leading-relaxed">
                      {address.addressLine}, {address.locality}, {address.city}
                    </p>
                    {state.selectedAddressId !== address.id && (
                      <button
                        type="button"
                        onClick={(event) => { event.stopPropagation(); selectAddress(address.id); }}
                        className="mt-2 text-[11px] font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        Set as Default
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); beginEdit(address.id); }}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    <Edit2 size={14} strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); deleteAddress(address.id); }}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={14} strokeWidth={2.5} />
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
      <section className="space-y-3 pt-2">
        <h2 className="text-[13px] font-black text-slate-950 tracking-wider uppercase px-1">Impact Summary</h2>
        {impactExists ? (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[12px] bg-emerald-50/50 p-4 border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pickups</p>
              <p className="mt-1 text-2xl font-black text-emerald-950">{state.history.length}</p>
            </div>
            <div className="rounded-[12px] bg-emerald-50/50 p-4 border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Credits</p>
              <p className="mt-1 text-2xl font-black text-emerald-700">{state.history.reduce((sum, item) => sum + item.pricing.estimated, 0)}</p>
            </div>
            <div className="rounded-[12px] bg-emerald-50/50 p-4 border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">CO2 Saved</p>
              <p className="mt-1 text-2xl font-black text-emerald-600">{state.history.length * 2}kg</p>
            </div>
          </div>
        ) : (
          <div className="rounded-[12px] bg-slate-50 p-4 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-[14px] font-bold text-slate-900">No impact yet</h3>
              <p className="text-[12px] font-medium text-slate-500">Schedule your first pickup to start tracking</p>
            </div>
            <button type="button" onClick={() => navigate("/app/schedule")} className="rounded-full bg-emerald-600 px-4 py-2 text-[12px] font-bold text-white shadow-sm transition-all hover:bg-emerald-700 active:scale-95">
              Schedule Pickup
            </button>
          </div>
        )}
      </section>

      {/* 5. Settings Options */}
      <section className="space-y-3 pt-2">
        <h2 className="text-[13px] font-black text-slate-950 tracking-wider uppercase px-1">Settings & Support</h2>
        <div className="rounded-[12px] border border-slate-200 bg-white shadow-sm overflow-hidden">
          <button type="button" className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors border-b border-slate-100">
            <span className="flex items-center gap-3 text-[14px] font-semibold text-slate-900">
              <Bell size={18} className="text-slate-400" />
              Notifications
            </span>
            <ChevronRight size={16} className="text-slate-400" />
          </button>
          <button type="button" className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors border-b border-slate-100">
            <span className="flex items-center gap-3 text-[14px] font-semibold text-slate-900">
              <Globe size={18} className="text-slate-400" />
              Language
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-slate-500">English</span>
              <ChevronRight size={16} className="text-slate-400" />
            </div>
          </button>
          <button type="button" className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors border-b border-slate-100">
            <span className="flex items-center gap-3 text-[14px] font-semibold text-slate-900">
              <Shield size={18} className="text-slate-400" />
              Privacy & Data
            </span>
            <ChevronRight size={16} className="text-slate-400" />
          </button>
          <button type="button" className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors border-b border-slate-100">
            <span className="flex items-center gap-3 text-[14px] font-semibold text-slate-900">
              <Download size={18} className="text-slate-400" />
              Certificates & Invoices
            </span>
            <ChevronRight size={16} className="text-slate-400" />
          </button>
          <button type="button" className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
            <span className="flex items-center gap-3 text-[14px] font-semibold text-slate-900">
              <HelpCircle size={18} className="text-slate-400" />
              Help & Support
            </span>
            <ChevronRight size={16} className="text-slate-400" />
          </button>
        </div>
      </section>

      {/* 6. Logout */}
      <section className="pt-4">
        <button
          type="button"
          onClick={() => setShowLogoutConfirm(true)}
          className="w-full rounded-[12px] bg-white border border-red-200 p-4 text-center transition-all hover:bg-red-50"
        >
          <span className="flex items-center justify-center gap-2 text-[14px] font-semibold text-red-600">
            <LogOut size={18} />
            Logout
          </span>
        </button>
      </section>

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-[16px] bg-white p-6 shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                <LogOut size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Logout?</h3>
              <p className="mt-2 text-[14px] text-slate-500">Are you sure you want to logout from your account?</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 rounded-xl border border-slate-200 py-3 text-[14px] font-semibold text-slate-600 transition-all hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 rounded-xl bg-red-600 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
