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
        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-2">
          <div
            data-reveal
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#d4af37]/10 lg:aspect-auto lg:min-h-[520px]"
          >
            <Image
              src={menuImages.lounge}
              alt="Sheesh lounge interior"
              fill
              className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_60%)]" />
          </div>
          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="group glass-luxury flex gap-5 overflow-hidden rounded-2xl p-4 transition-all duration-500 hover:border-[#d4af37]/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="112px"
                  />
                </div>
                <div className="py-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/55">
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
