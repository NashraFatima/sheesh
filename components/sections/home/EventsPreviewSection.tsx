"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";

export function EventsPreviewSection() {
  return (
    <section
      id="events"
      className="relative section-padding overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Nights You Won't Forget"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="group relative mt-16 overflow-hidden rounded-3xl border border-[#d4af37]/15"
        >
          <div className="relative aspect-[21/9] min-h-[280px] md:min-h-[360px]">
            <Image
              src={menuImages.events}
              alt="Voice of Sheesh event"
              fill
              className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-[#050505]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.12),transparent_55%)]" />
            <div className="absolute inset-0 film-grain" />
          </div>
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-2xl">
              <p className="font-[family-name:var(--font-accent)] text-xs tracking-[0.4em] text-[#d4af37] uppercase">
                Featured Event
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-wide text-white uppercase md:text-5xl">
                Voice of Sheesh Season 1 — Coming Soon
              </h3>
              <p className="mt-4 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/60 md:text-base">
                A cinematic showcase of Dallas talent. Live vocals, luxury
                production, and the signature Sheesh atmosphere.
              </p>
              <MagneticButton href="/events" variant="gold" className="mt-8">
                Event Details
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
