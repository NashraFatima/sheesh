"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
        <div className="mt-10 md:mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-luxury relative overflow-hidden rounded-2xl p-8 transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-[#d4af37]/35 hover:shadow-[0_16px_50px_rgba(212,175,55,0.08)] bg-[#141418]/60"
            >
              {/* Technical overlay */}
              <div className="absolute top-5 right-5 z-10 font-[family-name:var(--font-accent)] text-[8px] tracking-[0.2em] text-white/20 uppercase pointer-events-none">
                GUEST // 0{i + 1}
              </div>

              {/* Inner luxury hairline */}
              <div className="absolute inset-4 z-10 border border-white/5 pointer-events-none rounded-xl transition-colors duration-700 group-hover:border-[#d4af37]/10" />

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
