"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuImages } from "@/lib/menu-images";

const reviews = [
  {
    quote:
      "Sheesh is Dallas's premier hookah lounge — the food, the clouds, the vibe. Nothing else comes close.",
    author: "Amir K.",
    role: "Regular Guest",
  },
  {
    quote:
      "Voice of Sheesh had production quality you'd expect at a major venue. Season 1 can't come soon enough.",
    author: "Sarah M.",
    role: "Event Attendee",
  },
  {
    quote:
      "The BBQ platter and Sheesh Mix are why we keep coming back. True luxury hospitality.",
    author: "James T.",
    role: "Dallas Foodie",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative section-padding bg-[#0c0c0e]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Guest Reviews" title="Whispers of Excellence" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="group glass-luxury relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-[#d4af37]/25"
            >
              <div className="relative mb-5 flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full border border-[#d4af37]/30">
                  <Image
                    src={menuImages.lounge}
                    alt=""
                    fill
                    className="object-cover opacity-80"
                    sizes="48px"
                  />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-[#d4af37] text-xs">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/70 italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-[family-name:var(--font-display)] text-sm text-[#d4af37]">
                  {review.author}
                </p>
                <p className="font-[family-name:var(--font-accent)] text-[9px] tracking-[0.2em] text-white/40 uppercase">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
