"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";

export function CateringPreviewSection() {
  return (
    <section id="catering" className="relative section-padding bg-[#0c0c0e]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#d4af37]/10 lg:aspect-[5/4]">
          <Image
            src={menuImages.catering}
            alt="Sheesh catering"
            fill
            className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0c0e]/90 via-[#0c0c0e]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Catering"
            title="Luxury Beyond Our Doors"
            subtitle="Private events, corporate galas, and celebrations — we bring the full Sheesh experience to your venue with on-site chefs and hookah stations."
          />
          <MagneticButton href="/catering" variant="outline" className="mt-8">
            Inquire Now
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
