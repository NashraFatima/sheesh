"use client";

import { SmoothScrollProvider } from "@/contexts/SmoothScrollContext";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { PageTransition } from "@/components/effects/PageTransition";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { ReservationProvider } from "@/components/providers/ReservationProvider";
import { AuthProvider } from "@/contexts/AuthContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SmoothScrollProvider>
        <ReservationProvider>
          <CustomCursor />
          <LoadingScreen />
          <AmbientGlow />
          <PageTransition>{children}</PageTransition>
        </ReservationProvider>
      </SmoothScrollProvider>
    </AuthProvider>
  );
}
