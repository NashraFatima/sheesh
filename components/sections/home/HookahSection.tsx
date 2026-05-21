"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuTagBadge } from "@/components/ui/MenuTagBadge";
import { menuImages } from "@/lib/menu-images";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SmokeOverlay } from "@/components/effects/SmokeOverlay";

const blends = [
  {
    name: "Sheesh Mix",
    note: "House Signature · Floral · Citrus",
    image: menuImages.hookahLounge,
    tag: "Staff Pick" as const,
  },
  {
    name: "Desert Mirage",
    note: "Oud · Amber · Saffron",
    image: menuImages.hookahPremium,
    tag: "Popular" as const,
  },
  {
    name: "Gully Boy",
    note: "Bold · Spiced · Smooth Finish",
    image: menuImages.hookah,
    tag: "Customer Fav" as const,
  },
];

export function HookahSection() {
  return (
    <section
      id="hookah"
      className="relative section-padding overflow-hidden bg-[#050505]"
    >
      <SmokeOverlay className="opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_65%)]" />
      <div className="film-grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Premium Hookah"
          title="Clouds of Opulence"
          subtitle="House mixes, premium hookahs, and expert heat management — hookah elevated to an art form at Sheesh."
        />
        <div className="mt-10 md:mt-12 grid gap-8 md:grid-cols-3">
          {blends.map((blend, i) => (
            <div
              key={blend.name}
              className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-[#0c0c0e]/40 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#d4af37]/35 hover:shadow-[0_16px_50px_rgba(212,175,55,0.08)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Technical overlay */}
                <div className="absolute top-5 right-5 z-10 font-[family-name:var(--font-accent)] text-[8px] tracking-[0.2em] text-white/30 uppercase pointer-events-none">
                  BLEND // 0{i + 1}
                </div>

                <Image
                  src={blend.image}
                  alt={blend.name}
                  fill
                  className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Immersive gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                
                {/* Inner double border hairline */}
                <div className="absolute inset-4 z-10 border border-white/5 pointer-events-none rounded-xl transition-colors duration-700 group-hover:border-[#d4af37]/15" />
                
                <div className="absolute top-5 left-5 z-10">
                  <MenuTagBadge tag={blend.tag} />
                </div>
                
                <div className="absolute right-0 bottom-0 left-0 z-10 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-white group-hover:text-gold-gradient transition-colors duration-500">
                    {blend.name}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-accent)] text-[10px] tracking-[0.25em] text-[#d4af37]/75 uppercase">
                    {blend.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <MagneticButton href="/menu" variant="outline">
            Hookah Menu
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
