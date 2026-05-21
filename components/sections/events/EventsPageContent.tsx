"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CountdownTimer } from "@/components/sections/events/CountdownTimer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";
import { SmokeOverlay } from "@/components/effects/SmokeOverlay";

const events = [
  {
    title: "Live DJ Fridays",
    date: "Every Friday · 10PM",
    desc: "Resident DJs and guest selectors spinning deep house and global beats.",
    image: menuImages.events,
  },
  {
    title: "Desi Night",
    date: "First Saturday Monthly",
    desc: "Bollywood classics, live percussion, and specialty Desi menu features.",
    image: menuImages.desi,
  },
  {
    title: "VIP Bottle Service",
    date: "By Reservation",
    desc: "Private booths, premium spirits, and dedicated host for your circle.",
    image: menuImages.lounge,
  },
];

export function EventsPageContent() {
  return (
    <div className="relative min-h-screen">
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <Image
            src={menuImages.events}
            alt="Voice of Sheesh"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)]" />
        <SmokeOverlay />
        <div className="absolute inset-0 film-grain" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-accent)] text-xs tracking-[0.4em] text-[#d4af37] uppercase"
          >
            Featured Event
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-wide text-white uppercase md:text-6xl lg:text-7xl"
          >
            Voice of Sheesh
            <span className="mt-2 block text-gold-gradient">
              Season 1 Coming Soon
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-white/60"
          >
            A groundbreaking vocal competition set in our cinematic lounge.
            Dallas talent. Luxury production. Unforgettable nights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12"
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative bg-[#0c0c0e]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Calendar"
            title="Recurring Experiences"
            subtitle="Beyond the main stage — discover the rhythm of Sheesh throughout the week."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {events.map((event, i) => (
              <div key={event.title} className="group overflow-hidden rounded-2xl border border-[#d4af37]/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] to-transparent" />
                </div>
                <GlassCard delay={i * 0.1} hover={false} className="rounded-none border-0 border-t border-white/[0.06]">
                  <p className="font-[family-name:var(--font-accent)] text-[10px] tracking-[0.25em] text-[#d4af37] uppercase">
                    {event.date}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-white">
                    {event.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-body)] text-sm text-white/50">
                    {event.desc}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <MagneticButton href="/" variant="outline">
              Back to Home
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
