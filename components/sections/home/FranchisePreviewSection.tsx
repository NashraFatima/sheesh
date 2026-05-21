"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";

const stats = [
  { value: "12+", label: "Years Vision" },
  { value: "50K+", label: "Guests Served" },
  { value: "4", label: "Revenue Streams" },
];

export function FranchisePreviewSection() {
  return (
    <section
      id="franchise"
      className="relative section-padding overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Franchise"
              title="Own the Night"
              subtitle="Partner with Dallas's premier hookah lounge & dining brand. Scale the Sheesh experience across markets."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <GlassCard key={stat.label} delay={i * 0.08} className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-4xl text-gold-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.22em] text-white/45 uppercase">
                    {stat.label}
                  </p>
                </GlassCard>
              ))}
            </div>
            <MagneticButton href="/franchise" variant="gold" className="mt-10">
              Franchise Opportunities
            </MagneticButton>
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#d4af37]/10">
            <Image
              src={menuImages.lounge}
              alt="Sheesh franchise"
              fill
              className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
