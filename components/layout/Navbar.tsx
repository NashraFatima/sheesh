"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/theme";
import { useScrollState } from "@/hooks/useScrollState";
import { useReservations } from "@/components/providers/ReservationProvider";
import { cn } from "@/lib/utils";

const reserveLinkClass =
  "hidden rounded-full border border-[#d4af37]/30 px-5 py-2 font-[family-name:var(--font-accent)] text-[10px] tracking-[0.25em] text-[#d4af37] uppercase transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 lg:inline-flex";

export function Navbar() {
  const scrolled = useScrollState(40);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useReservations();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
          scrolled
            ? "border-b border-[#d4af37]/10 bg-[#050505]/80 py-4 backdrop-blur-xl"
            : "bg-transparent py-6"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <Link
            href="/"
            className="group relative z-50"
            onClick={closeMobile}
          >
            <span className="font-[family-name:var(--font-display)] text-xl tracking-[0.2em] text-white uppercase md:text-2xl">
              Sheesh
            </span>
            <span className="mt-0.5 block font-[family-name:var(--font-accent)] text-[9px] tracking-[0.35em] text-[#d4af37]/70 uppercase">
              Eatery & Lounge
            </span>
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={true}
                    className="group relative font-[family-name:var(--font-body)] text-xs tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-[#f5e6c8]"
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-500",
                        active
                          ? "w-full opacity-100 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={openModal}
            className={reserveLinkClass}
          >
            Reserve
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-50 text-[#d4af37] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl lg:hidden"
            onClick={closeMobile}
          >
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.05 }}
              className="flex h-full flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    scroll={true}
                    onClick={closeMobile}
                    className="font-[family-name:var(--font-display)] text-3xl tracking-[0.15em] text-white uppercase transition-colors hover:text-[#d4af37]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    openModal();
                    closeMobile();
                  }}
                  className="inline-flex rounded-full border border-[#d4af37] bg-[#d4af37]/10 px-8 py-3 font-[family-name:var(--font-accent)] text-sm tracking-[0.2em] text-[#d4af37] uppercase"
                >
                  Reserve
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
