"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AdminStatCardProps {
  label: string;
  value: string | number;
  change?: string;
  accent?: boolean;
  className?: string;
}

export function AdminStatCard({
  label,
  value,
  change,
  accent,
  className,
}: AdminStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group glass-luxury relative overflow-hidden rounded-2xl p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#d4af37]/35 hover:shadow-[0_12px_48px_rgba(212,175,55,0.08)] bg-[#141418]/60",
        accent && "border-[#d4af37]/25 glow-gold bg-[#1a160d]/40",
        className
      )}
    >
      {/* Inner hairline */}
      <div className="absolute inset-3 border border-white/5 pointer-events-none rounded-xl transition-colors duration-700 group-hover:border-[#d4af37]/15" />
      
      <p className="font-[family-name:var(--font-accent)] text-[10px] tracking-[0.25em] text-white/45 uppercase relative z-10">
        {label}
      </p>
      <p
        className={cn(
          "mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl relative z-10",
          accent ? "text-gold-gradient font-semibold" : "text-white"
        )}
      >
        {value}
      </p>
      {change && (
        <p className="mt-2 font-[family-name:var(--font-body)] text-xs text-[#d4af37]/80 relative z-10 flex items-center gap-1.5">
          <span className="inline-block size-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          {change}
        </p>
      )}
    </motion.div>
  );
}
