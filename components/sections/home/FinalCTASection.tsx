"use client";

import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { menuImages } from "@/lib/menu-images";
import { useReservations } from "@/components/providers/ReservationProvider";

export function FinalCTASection() {
  const { openModal } = useReservations();

  return (
    <section id="reserve" className="relative overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0">
        <Image
          src={menuImages.lounge}
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14),#050505_65%)]" />
        <div className="absolute inset-0 film-grain" />
      </div>
      <FloatingParticles count={30} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-[family-name:var(--font-accent)] text-xs tracking-[0.4em] text-[#d4af37] uppercase">
          Reserve Your Night
        </p>
        <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white uppercase md:text-6xl">
          The Table Awaits
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] text-white/55">
          Dallas&apos;s premier hookah lounge & dining destination. Walk in or call
          <span className="text-[#d4af37]"> (214) 407-7941</span> — luxury awaits.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton onClick={openModal} variant="gold">
            Reserve Now
          </MagneticButton>
          <MagneticButton href="/menu" variant="outline">
            View Menu
          </MagneticButton>
          <MagneticButton href="/events" variant="ghost">
            Upcoming Events
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
