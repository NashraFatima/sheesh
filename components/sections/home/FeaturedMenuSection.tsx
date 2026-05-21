"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuTagBadge } from "@/components/ui/MenuTagBadge";
import { featuredMenuItems } from "@/lib/menu-data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FeaturedMenuSection() {
  const [hero, ...rest] = featuredMenuItems;

  return (
    <section
      id="menu"
      className="relative section-padding overflow-hidden bg-[#0c0c0e]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(212,175,55,0.06),transparent_50%)]" />
      <div className="film-grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Menu"
          title="Signature Selections"
          subtitle="Handpicked from our kitchen and lounge — each plate and blend crafted for unforgettable Dallas nights."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {hero && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/15 lg:col-span-7 lg:row-span-2"
            >
              <Link href="/menu" className="block">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={hero.image}
                    alt={hero.name}
                    fill
                    className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
                  <div className="absolute right-0 bottom-0 left-0 p-8">
                    {hero.tags?.[0] && (
                      <MenuTagBadge tag={hero.tags[0]} />
                    )}
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
                      {hero.name}
                    </h3>
                    <p className="mt-2 max-w-md font-[family-name:var(--font-body)] text-sm text-white/55">
                      {hero.description}
                    </p>
                    <p className="mt-4 font-[family-name:var(--font-display)] text-2xl text-[#d4af37]">
                      ${hero.price}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href="/menu"
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#141418]/80 p-3 transition-all duration-500 hover:border-[#d4af37]/25 hover:shadow-[0_0_32px_rgba(212,175,55,0.1)]"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 flex-1 py-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-white">
                        {item.name}
                      </h3>
                      <span className="shrink-0 text-[#d4af37]">${item.price}</span>
                    </div>
                    <p className="mt-1 line-clamp-2 font-[family-name:var(--font-body)] text-xs text-white/45">
                      {item.description}
                    </p>
                    {item.tags?.[0] && (
                      <div className="mt-2">
                        <MenuTagBadge tag={item.tags[0]} />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <MagneticButton href="/menu" variant="outline">
            Full Menu
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
