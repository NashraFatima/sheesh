"use client";

import { motion } from "framer-motion";

export function SmokeOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute -bottom-1/4 left-0 h-[70%] w-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(180,180,190,0.15), transparent 70%)",
        }}
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full opacity-20 blur-[80px]"
        style={{ background: "rgba(255,255,255,0.06)" }}
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 h-[50%] w-[50%] rounded-full opacity-15 blur-[70px]"
        style={{ background: "rgba(212,175,55,0.08)" }}
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
