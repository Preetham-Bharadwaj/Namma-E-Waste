import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type PickupStatus = "pending" | "assigned" | "en_route" | "completed";

export interface Address {
  id: string;
  label: string;
  locality: string;
  city: string;
  addressLine: string;
  pincode: string;
  phone: string;
}

export interface UserPickup {
  id: string;
  userId: string;
  item: string;
  images: string[];
  address: Address;
  schedule: {
    date: string;
    slot: "morning" | "afternoon" | "evening";
    slotLabel: string;
  };
  pricing: {
    estimated: number;
  };
  status: PickupStatus;
  createdAt: number;
}

interface UserState {
  activePickups: UserPickup[];
  history: UserPickup[];
  addresses: Address[];
  selectedAddressId: string | null;
  detectedLocation: string;
  profile: {
    name: string;
    phone: string;
  };
}

interface SchedulePickupInput {
  item: string;
  images: string[];
  address: Address;
  schedule: UserPickup["schedule"];
  pricing: UserPickup["pricing"];
}

interface UserContextType {
  state: UserState;
  selectedAddress?: Address;
  schedulePickup: (pickup: SchedulePickupInput) => Promise<void>;
  completePickup: (id: string) => void;
  addAddress: (address: Omit<Address, "id">) => void;
  updateAddress: (id: string, address: Partial<Omit<Address, "id">>) => void;
  deleteAddress: (id: string) => void;
  selectAddress: (id: string) => void;
}

const STORAGE_KEY = "nammaEWasteState";

const DEFAULT_ADDRESSES: Address[] = [];
const LEGACY_DUMMY_ADDRESS_IDS = new Set(["addr-home", "addr-office"]);

function getProfile() {
  const profile = localStorage.getItem("nammaEWasteProfile");
  if (!profile) {
    return {
      name: "User",
      phone: "",
      city: "",
    };
  }

  try {
    const parsed = JSON.parse(profile) as { name?: string; phone?: string; city?: string };
    return {
      name: parsed.name || "User",
      phone: parsed.phone || "",
      city: parsed.city || "",
    };
  } catch {
    return {
      name: "User",
      phone: "",
      city: "",
    };
  }
}

const initialState: UserState = {
  activePickups: [],
  history: [],
  addresses: DEFAULT_ADDRESSES,
  selectedAddressId: null,
  detectedLocation: "",
  profile: {
    name: "User",
    phone: "",
  },
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function getUserId() {
  const profile = localStorage.getItem("nammaEWasteProfile");
  if (!profile) return "demo-user";

  try {
    return JSON.parse(profile).email || "demo-user";
  } catch {
    return "demo-user";
  }
}

function loadState() {
  const profile = getProfile();
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {
      ...initialState,
      detectedLocation: profile.city || initialState.detectedLocation,
      profile: {
        name: profile.name,
        phone: profile.phone,
      },
    } as UserState;
  }

  try {
    const parsed = JSON.parse(stored) as UserState;
    const merged = { ...initialState, ...parsed } as UserState;
    const filteredAddresses = merged.addresses.filter((address) => !LEGACY_DUMMY_ADDRESS_IDS.has(address.id));
    const selectedAddressId = filteredAddresses.some((address) => address.id === merged.selectedAddressId)
      ? merged.selectedAddressId
      : filteredAddresses[0]?.id || null;
    return {
      ...merged,
      addresses: filteredAddresses,
      selectedAddressId,
      profile: {
        name: profile.name || merged.profile.name,
        phone: profile.phone || merged.profile.phone,
      },
      detectedLocation:
        merged.detectedLocation ||
        (selectedAddressId ? filteredAddresses.find((address) => address.id === selectedAddressId)?.locality || "" : "") ||
        profile.city ||
        "",
    };
  } catch {
    return {
      ...initialState,
      detectedLocation: profile.city || initialState.detectedLocation,
      profile: {
        name: profile.name,
        phone: profile.phone,
      },
    } as UserState;
  }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const selectedAddress = useMemo(
    () => state.addresses.find((address) => address.id === state.selectedAddressId) || state.addresses[0],
    [state.addresses, state.selectedAddressId],
  );

  const schedulePickup = async (pickup: SchedulePickupInput) => {
    const payload = {
      userId: getUserId(),
      item: pickup.item,
      images: pickup.images,
      address: pickup.address,
      schedule: pickup.schedule,
      pricing: pickup.pricing,
      status: "pending" as PickupStatus,
      createdAt: Date.now(),
    };

    try {
      const response = await fetch("/api/pickups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      const createdPickup: UserPickup = {
        ...payload,
        id: result.id || `pickup-${Date.now()}`,
      };

      setState((current) => ({
        ...current,
        activePickups: [createdPickup, ...current.activePickups],
      }));
    } catch {
      setState((current) => ({
        ...current,
        activePickups: [{ ...payload, id: `pickup-${Date.now()}` }, ...current.activePickups],
      }));
    }
  };

  const completePickup = (id: string) => {
    setState((current) => {
      const pickup = current.activePickups.find((item) => item.id === id);
      if (!pickup) return current;

      return {
        ...current,
        activePickups: current.activePickups.filter((item) => item.id !== id),
        history: [{ ...pickup, status: "completed" }, ...current.history],
      };
    });
  };

  const addAddress = (address: Omit<Address, "id">) => {
    const newAddress = { ...address, id: `addr-${Date.now()}` };
    setState((current) => ({
      ...current,
      addresses: [...current.addresses, newAddress],
      selectedAddressId: newAddress.id,
      detectedLocation: `${newAddress.locality}, ${newAddress.city}`,
    }));
  };

  const updateAddress = (id: string, address: Partial<Omit<Address, "id">>) => {
    setState((current) => ({
      ...current,
      addresses: current.addresses.map((item) => (item.id === id ? { ...item, ...address } : item)),
    }));
  };

  const deleteAddress = (id: string) => {
    setState((current) => {
      const addresses = current.addresses.filter((item) => item.id !== id);
      return {
        ...current,
        addresses,
        selectedAddressId: current.selectedAddressId === id ? addresses[0]?.id || null : current.selectedAddressId,
      };
    });
  };

  const selectAddress = (id: string) => {
    const address = state.addresses.find((item) => item.id === id);
    setState((current) => ({
      ...current,
      selectedAddressId: id,
      detectedLocation: address ? `${address.locality}, ${address.city}` : current.detectedLocation,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        state,
        selectedAddress,
        schedulePickup,
        completePickup,
        addAddress,
        updateAddress,
        deleteAddress,
        selectAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
