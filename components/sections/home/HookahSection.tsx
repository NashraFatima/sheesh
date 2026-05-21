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
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {blends.map((blend, i) => (
            <div
              key={blend.name}
              className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/10 transition-all duration-700 hover:border-[#d4af37]/30 hover:shadow-[0_0_48px_rgba(212,175,55,0.12)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={blend.image}
                  alt={blend.name}
                  fill
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <MenuTagBadge tag={blend.tag} />
                </div>
                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-white">
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
