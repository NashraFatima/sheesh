"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User, ChevronDown, Calendar } from "lucide-react";
import { navLinks } from "@/lib/theme";
import { useScrollState } from "@/hooks/useScrollState";
import { useReservations } from "@/components/providers/ReservationProvider";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

/* ─── User avatar + dropdown ─────────────────────────────────────── */
function UserAvatar() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!user) return null;

  const name = user.displayName ?? user.email?.split("@")[0] ?? "Guest";
  const initials = name
    .split(" ")
    .map((w: string) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3",
          "border border-white/10 bg-white/[0.04]",
          "transition-all duration-300",
          "hover:border-[#d4af37]/40 hover:bg-[#d4af37]/[0.06]",
          open && "border-[#d4af37]/40 bg-[#d4af37]/[0.06]"
        )}
      >
        {/* Avatar ring */}
        <div className="relative flex-shrink-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4af37]/50 bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 overflow-hidden">
            {user.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="" className="h-7 w-7 rounded-full object-cover" />
            ) : (
              <span className="font-[family-name:var(--font-accent)] text-[9px] font-semibold text-[#d4af37]">
                {initials}
              </span>
            )}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#050505] bg-emerald-400" />
        </div>

        <span className="max-w-[88px] truncate font-[family-name:var(--font-body)] text-[11px] text-white/75">
          {name}
        </span>
        <ChevronDown
          size={11}
          className={cn(
            "flex-shrink-0 text-white/35 transition-transform duration-200",
            open && "rotate-180 text-[#d4af37]/70"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-[calc(100%+10px)] w-52 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0c]/95 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(212,175,55,0.06)] backdrop-blur-2xl"
          >
            {/* User info */}
            <div className="border-b border-white/[0.06] px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 overflow-hidden">
                  {user.photoURL ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={user.photoURL} alt="" className="h-9 w-9 rounded-full object-cover" />
                  ) : (
                    <span className="font-[family-name:var(--font-accent)] text-[10px] text-[#d4af37]">
                      {initials}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-[family-name:var(--font-body)] text-[12px] font-medium text-white">
                    {user.displayName ?? "Guest"}
                  </p>
                  <p className="truncate font-[family-name:var(--font-body)] text-[10px] text-white/35 mt-0.5">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-1.5">
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-[family-name:var(--font-body)] text-[12px] text-white/60 transition-all hover:bg-white/[0.05] hover:text-white"
              >
                <User size={13} className="text-white/35" />
                My Account
              </Link>
              <button
                onClick={async () => { setOpen(false); await signOut(); router.push("/"); }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-[family-name:var(--font-body)] text-[12px] text-white/60 transition-all hover:bg-rose-500/[0.08] hover:text-rose-300"
              >
                <LogOut size={13} className="text-white/35" />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navbar ─────────────────────────────────────────────────── */
export function Navbar() {
  const scrolled = useScrollState(40);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useReservations();
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-[#d4af37]/[0.08] bg-[#050505]/85 shadow-[0_1px_0_rgba(212,175,55,0.04)] backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center px-6 md:px-10 lg:px-16">

          {/* ── Logo (left, fixed width so nav stays centred) ── */}
          <div className="flex-shrink-0 w-[160px]">
            <Link href="/" onClick={closeMobile} className="group inline-flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-[22px] tracking-[0.22em] text-white uppercase transition-colors duration-300 group-hover:text-[#f5e6c8]">
                Sheesh
              </span>
              <span className="mt-[2px] font-[family-name:var(--font-accent)] text-[7.5px] tracking-[0.42em] text-[#d4af37]/65 uppercase transition-colors duration-300 group-hover:text-[#d4af37]">
                Eatery &amp; Lounge
              </span>
            </Link>
          </div>

          {/* ── Nav links (absolutely centred on desktop) ── */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:gap-9 lg:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative font-[family-name:var(--font-body)] text-[10.5px] tracking-[0.22em] uppercase transition-colors duration-300",
                      active ? "text-[#f5e6c8]" : "text-white/55 hover:text-white/90"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-400",
                        active
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right side ── */}
          <div className="ml-auto flex flex-shrink-0 items-center gap-3">
            {/* Desktop auth */}
            <div className="hidden items-center gap-3 lg:flex">
              {user ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      if (!user) { router.push("/login?next=/reservation"); return; }
                      openModal();
                    }}
                    className="flex items-center gap-2 rounded-full border border-[#d4af37]/35 px-4 py-2 font-[family-name:var(--font-accent)] text-[9.5px] tracking-[0.28em] text-[#d4af37] uppercase transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-[#d4af37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                  >
                    <Calendar size={11} />
                    Reserve
                  </button>
                  <UserAvatar />
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] text-white/50 uppercase transition-colors duration-300 hover:text-white/80"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="rounded-full border border-[#d4af37]/35 px-5 py-2 font-[family-name:var(--font-accent)] text-[9.5px] tracking-[0.28em] text-[#d4af37] uppercase transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-[#d4af37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                  >
                    Join
                  </Link>
                </>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[#d4af37]/40 hover:text-[#d4af37] lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile full-screen drawer ─────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#050505]/97 backdrop-blur-2xl lg:hidden"
            onClick={closeMobile}
          >
            {/* Gold accent blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#d4af37]/[0.06] blur-3xl" />
              <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-[#d4af37]/[0.04] blur-3xl" />
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ delay: 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full flex-col items-center justify-center gap-2 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile logo */}
              <div className="absolute top-6 left-6">
                <Link href="/" onClick={closeMobile} className="flex flex-col leading-none">
                  <span className="font-[family-name:var(--font-display)] text-lg tracking-[0.2em] text-white uppercase">
                    Sheesh
                  </span>
                  <span className="font-[family-name:var(--font-accent)] text-[7px] tracking-[0.4em] text-[#d4af37]/60 uppercase">
                    Eatery &amp; Lounge
                  </span>
                </Link>
              </div>

              {/* Nav links */}
              {navLinks.map((link, i) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "group flex items-center gap-3 py-3 font-[family-name:var(--font-display)] text-[28px] tracking-[0.12em] uppercase transition-colors duration-300",
                        active ? "text-[#d4af37]" : "text-white/70 hover:text-white"
                      )}
                    >
                      {active && (
                        <span className="h-px w-6 bg-gradient-to-r from-[#d4af37] to-transparent" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.045 + 0.05 }}
                className="mt-6 flex flex-col items-center gap-3 border-t border-white/[0.07] pt-6 w-full"
              >
                {user ? (
                  <>
                    {/* User pill */}
                    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 w-full">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 overflow-hidden">
                        {user.photoURL ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={user.photoURL} alt="" className="h-10 w-10 rounded-full object-cover" />
                        ) : (
                          <span className="font-[family-name:var(--font-accent)] text-xs text-[#d4af37]">
                            {(user.displayName ?? user.email ?? "U")
                              .split(" ").map((w: string) => w[0]).slice(0, 2).join("").toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-[family-name:var(--font-body)] text-sm text-white">
                          {user.displayName ?? user.email?.split("@")[0]}
                        </p>
                        <p className="truncate font-[family-name:var(--font-body)] text-[10px] text-white/35">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (!user) { closeMobile(); router.push("/login?next=/reservation"); return; }
                        openModal(); closeMobile();
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 py-3 font-[family-name:var(--font-accent)] text-[11px] tracking-[0.25em] text-[#d4af37] uppercase"
                    >
                      <Calendar size={13} />
                      Reserve a Table
                    </button>

                    <div className="flex w-full gap-2">
                      <Link
                        href="/account"
                        onClick={closeMobile}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 py-2.5 font-[family-name:var(--font-body)] text-xs text-white/50 transition-colors hover:text-white"
                      >
                        <User size={13} />
                        My Account
                      </Link>
                      <button
                        onClick={async () => { closeMobile(); await signOut(); router.push("/"); }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 py-2.5 font-[family-name:var(--font-body)] text-xs text-white/50 transition-colors hover:border-rose-500/30 hover:text-rose-300"
                      >
                        <LogOut size={13} />
                        Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={closeMobile}
                      className="flex w-full items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 py-3 font-[family-name:var(--font-accent)] text-[11px] tracking-[0.25em] text-[#d4af37] uppercase"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      onClick={closeMobile}
                      className="font-[family-name:var(--font-body)] text-sm text-white/35 transition-colors hover:text-white/60"
                    >
                      Create an Account
                    </Link>
                  </>
                )}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
