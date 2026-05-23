"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#d4af37]/10 transition-all duration-700 ease-out hover:border-[#d4af37]/35 hover:shadow-[0_16px_50px_rgba(212,175,55,0.08)]"
          >
            {/* Technical overlay */}
            <div className="absolute top-6 left-6 z-10 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.25em] text-[#d4af37]/75 uppercase pointer-events-none">
              CAMERA • 04_GLOBAL_SCALE
            </div>
            <div className="absolute bottom-6 right-6 z-10 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.25em] text-white/35 uppercase pointer-events-none">
              BRAND GROWTH
            </div>

            <Image
              src={menuImages.lounge}
              alt="Sheesh franchise"
              fill
              className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_50%)]" />

            {/* Inner hairline */}
            <div className="absolute inset-4 z-10 border border-white/5 pointer-events-none rounded-2xl transition-colors duration-700 group-hover:border-[#d4af37]/15" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
