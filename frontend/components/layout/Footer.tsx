"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerNav = [
  { href: "/menu", label: "Our Menu" },
  { href: "/events", label: "Events" },
  { href: "/catering", label: "Catering" },
  { href: "/franchise", label: "Franchise" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d4af37]/15 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className="absolute inset-0 film-grain opacity-60" />
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-[0.12em] text-white uppercase">
              Sheesh Eatery & Lounge
            </h3>
            <p className="mt-4 max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/50">
              Dallas&apos;s premier hookah lounge & dining destination. Where
              luxury meets flavor.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/Sheeshtx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @Sheeshtx"
                className="group flex size-10 items-center justify-center rounded-full border border-[#d4af37]/25 transition-all duration-500 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              >
                <svg
                  className="size-4 text-[#d4af37]/80 transition-colors group-hover:text-[#d4af37]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
            <p className="mt-4 font-[family-name:var(--font-accent)] text-[10px] tracking-[0.2em] text-white/35 uppercase">
              @Sheeshtx
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <p className="font-[family-name:var(--font-accent)] mb-5 text-xs tracking-[0.35em] text-[#d4af37]/80 uppercase">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={true}
                    className="group relative inline-block font-[family-name:var(--font-body)] text-sm text-white/50 transition-colors hover:text-[#f5e6c8]"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            <p className="font-[family-name:var(--font-accent)] mb-5 text-xs tracking-[0.35em] text-[#d4af37]/80 uppercase">
              Visit Us
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-white/55">
              Dallas, TX
            </p>
            <p className="font-[family-name:var(--font-accent)] mt-6 mb-3 text-xs tracking-[0.35em] text-[#d4af37]/80 uppercase">
              Contact
            </p>
            <p className="font-[family-name:var(--font-display)] text-lg text-[#d4af37]">
              +1 (214) 407-7941
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <p className="font-[family-name:var(--font-accent)] mb-5 text-xs tracking-[0.35em] text-[#d4af37]/80 uppercase">
              Hours
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-white/55">
              Sun – Thu: 11 AM – 2 AM
            </p>
            <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-white/55">
              Fri – Sat: 11 AM – 3 AM
            </p>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-10 md:flex-row">
          <p className="font-[family-name:var(--font-body)] text-xs text-white/35">
            © 2026 Sheesh Eatery & Lounge. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-accent)] text-[10px] tracking-[0.28em] text-white/30 uppercase">
            Designed with passion in Dallas, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
