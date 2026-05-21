"use client";

import { SmoothScrollProvider } from "@/contexts/SmoothScrollContext";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { PageTransition } from "@/components/effects/PageTransition";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { ReservationProvider } from "@/components/providers/ReservationProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ReservationProvider>
        <LoadingScreen />
        <AmbientGlow />
        <PageTransition>{children}</PageTransition>
      </ReservationProvider>
    </SmoothScrollProvider>
  );
}
