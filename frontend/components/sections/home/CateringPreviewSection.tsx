"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";

export function CateringPreviewSection() {
  return (
    <section id="catering" className="relative section-padding bg-[#0c0c0e]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#d4af37]/10 lg:aspect-[5/4] transition-all duration-700 ease-out hover:border-[#d4af37]/35 hover:shadow-[0_16px_50px_rgba(212,175,55,0.08)]"
        >
          {/* Technical overlay */}
          <div className="absolute top-6 left-6 z-10 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.25em] text-[#d4af37]/75 uppercase pointer-events-none">
            CAMERA • 02_CATERING
          </div>
          <div className="absolute bottom-6 right-6 z-10 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.25em] text-white/35 uppercase pointer-events-none">
            PRIVATE CULINARY
          </div>

          <Image
            src={menuImages.catering}
            alt="Sheesh catering"
            fill
            className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0c0e]/95 via-[#0c0c0e]/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_50%)]" />
          
          {/* Inner hairline */}
          <div className="absolute inset-4 z-10 border border-white/5 pointer-events-none rounded-2xl transition-colors duration-700 group-hover:border-[#d4af37]/15" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            align="left"
            eyebrow="Catering"
            title="Luxury Beyond Our Doors"
            subtitle="Private events, corporate galas, and celebrations — we bring the full Sheesh experience to your venue with on-site chefs and hookah stations."
          />
          <MagneticButton href="/catering" variant="outline" className="mt-8">
            Inquire Now
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
