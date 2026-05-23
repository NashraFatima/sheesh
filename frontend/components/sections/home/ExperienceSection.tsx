"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuImages } from "@/lib/menu-images";
import { fadeUpReveal } from "@/animations/scroll";

const highlights = [
  {
    title: "Immersive Atmosphere",
    desc: "Layered amber lighting, ambient soundscapes, and velvet shadows — an otherworldly lounge after dark.",
    image: menuImages.lounge,
  },
  {
    title: "Nightlife Energy",
    desc: "Live performances, curated playlists, and VIP corners for unforgettable Dallas evenings.",
    image: menuImages.events,
  },
  {
    title: "Hospitality First",
    desc: "White-glove service meets warm Texas hospitality — every guest treated like royalty.",
    image: menuImages.experience,
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    fadeUpReveal(sectionRef.current.querySelectorAll("[data-reveal]"));
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative section-padding bg-[#050505]"
    >
      <div className="bg-luxury-radial absolute inset-0" />
      <div className="film-grain absolute inset-0 opacity-80" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Experience"
          title="A World Beyond Dining"
          subtitle="Step into a cinematic realm where every detail — from the first bite to the last cloud — is orchestrated for luxury."
        />
        <div className="mt-10 md:mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <div
            data-reveal
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#d4af37]/10 transition-all duration-700 hover:border-[#d4af37]/30 hover:shadow-[0_12px_60px_rgba(212,175,55,0.1)] lg:aspect-auto lg:min-h-[520px]"
          >
            {/* Technical camera overlays for luxury storytelling */}
            <div className="absolute top-6 left-6 z-10 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.25em] text-[#d4af37]/75 uppercase pointer-events-none">
              CAMERA • 01_AMBIENT
            </div>
            <div className="absolute bottom-6 right-6 z-10 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.25em] text-white/45 uppercase pointer-events-none">
              SHEESH ARCHIVES
            </div>
            
            <Image
              src={menuImages.lounge}
              alt="Sheesh lounge interior"
              fill
              className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.08]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_60%)]" />
            
            {/* Inner premium border hairline */}
            <div className="absolute inset-4 z-10 border border-white/5 pointer-events-none rounded-2xl" />
          </div>
          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="group glass-luxury flex gap-5 overflow-hidden rounded-2xl p-4 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#d4af37]/35 hover:shadow-[0_12px_48px_rgba(212,175,55,0.08)]"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    sizes="112px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="py-1 flex flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-white group-hover:text-gold-gradient transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-xs md:text-sm leading-relaxed text-white/60 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
