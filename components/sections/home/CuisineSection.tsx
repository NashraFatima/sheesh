"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";
import { fadeUpReveal } from "@/animations/scroll";

const plates = [
  { src: menuImages.desi, alt: "Desi cuisine", span: "col-span-2 row-span-2 min-h-[280px] md:min-h-[360px]" },
  { src: menuImages.bbq, alt: "BBQ platter" },
  { src: menuImages.biryani, alt: "Biryani" },
  { src: menuImages.burger, alt: "Sheesh burger" },
  { src: menuImages.karahi, alt: "Chicken karahi" },
];

export function CuisineSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    fadeUpReveal(ref.current.querySelectorAll("[data-reveal]"));
  }, []);

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden bg-[#0c0c0e]"
    >
      <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#d4af37]/[0.04] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Elevated Cuisine"
              title="Flavors Worthy of the Night"
              subtitle="From slow-braised nihari to charcoal-kissed BBQ platters — our kitchen fuses Desi heritage with modern luxury plating."
            />
            <MagneticButton href="/menu" variant="gold" className="mt-10">
              Explore Menu
            </MagneticButton>
          </div>
          <div
            data-reveal
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {plates.map((plate, i) => (
              <div
                key={plate.alt}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${plate.span ?? "aspect-square"}`}
              >
                <Image
                  src={plate.src}
                  alt={plate.alt}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
