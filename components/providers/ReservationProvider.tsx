"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ReservationModal } from "@/components/reservations/ReservationModal";
import { mockReservations } from "@/lib/admin/mock-data";
import type { AdminReservation, ReservationStatus } from "@/lib/admin/types";

interface NewReservationPayload {
  guestName: string;
  email: string;
  phone: string;
  partySize: number;
  date: string;
  time: string;
  notes?: string;
}

interface ReservationContextValue {
  reservations: AdminReservation[];
  addReservation: (payload: NewReservationPayload) => void;
  updateReservationStatus: (id: string, status: ReservationStatus) => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ReservationContext = createContext<ReservationContextValue | null>(null);

const STORAGE_KEY = "sheesh-reservations";

function getInitialReservations(): AdminReservation[] {
  if (typeof window === "undefined") {
    return mockReservations;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as AdminReservation[];
    }
  } catch {
    // ignore invalid stored data
  }

  return mockReservations;
}

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [reservations, setReservations] = useState<AdminReservation[]>(() => getInitialReservations());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    } catch {
      // ignore storage errors
    }
  }, [reservations]);

  const addReservation = (payload: NewReservationPayload) => {
    const newReservation: AdminReservation = {
      id: typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `res-${Date.now()}`,
      guestName: payload.guestName,
      email: payload.email,
      phone: payload.phone,
      partySize: payload.partySize,
      date: payload.date,
      time: payload.time,
      notes: payload.notes,
      status: "Pending",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setReservations((prev) => [newReservation, ...prev]);
  };

  const updateReservationStatus = (id: string, status: ReservationStatus) => {
    setReservations((prev) => prev.map((reservation) =>
      reservation.id === id ? { ...reservation, status } : reservation
    ));
  };

  const value = useMemo(
    () => ({
      reservations,
      addReservation,
      updateReservationStatus,
      openModal: () => setIsModalOpen(true),
      closeModal: () => setIsModalOpen(false),
      isModalOpen,
    }),
    [reservations, isModalOpen]
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
      <ReservationModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={addReservation}
      />
    </ReservationContext.Provider>
  );
}

export function useReservations() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservations must be used within a ReservationProvider");
  }
  return context;
}
