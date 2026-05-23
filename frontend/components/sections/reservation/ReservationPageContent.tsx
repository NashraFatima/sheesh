"use client";

import { CalendarCheck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useReservations } from "@/components/providers/ReservationProvider";

const highlights = [
  { icon: CalendarCheck, title: "Priority Seating", text: "Request your preferred date and our team will confirm availability." },
  { icon: Users, title: "Groups Welcome", text: "Plan intimate tables, celebrations, and late-night lounge gatherings." },
  { icon: Clock, title: "Fast Follow-Up", text: "Reservation requests are stored directly in the admin dashboard." },
];

export function ReservationPageContent() {
  const { openModal } = useReservations();

  return (
    <div className="relative min-h-screen pt-28 pb-24">
      <section className="section-padding mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Reservations"
          title="Reserve the Night"
          subtitle="Tell us when you are coming, how many guests are joining, and any details that help us make the evening feel effortless."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.08} className="text-center">
              <item.icon className="mx-auto size-7 text-[#d4af37]" />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/50">{item.text}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-14 max-w-xl rounded-3xl border border-[#d4af37]/15 bg-[#0c0c0e]/80 p-8 text-center shadow-[0_0_40px_rgba(212,175,55,0.08)]"
        >
          <p className="font-[family-name:var(--font-display)] text-3xl text-white">
            Ready when you are.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Open the reservation form and your request will flow straight into MongoDB through the reservations API.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-8 rounded-full bg-[#d4af37] px-8 py-3 font-[family-name:var(--font-accent)] text-xs tracking-[0.2em] text-[#050505] uppercase transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
          >
            Request Reservation
          </button>
        </motion.div>
      </section>
    </div>
  );
}
