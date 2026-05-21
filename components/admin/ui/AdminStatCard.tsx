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
        "glass-luxury rounded-2xl p-5 transition-shadow duration-500 hover:shadow-[0_0_32px_rgba(212,175,55,0.08)]",
        accent && "border-[#d4af37]/25 glow-gold",
        className
      )}
    >
      <p className="font-[family-name:var(--font-accent)] text-[10px] tracking-[0.25em] text-white/45 uppercase">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl",
          accent ? "text-gold-gradient" : "text-white"
        )}
      >
        {value}
      </p>
      {change && (
        <p className="mt-2 font-[family-name:var(--font-body)] text-xs text-[#d4af37]/80">
          {change}
        </p>
      )}
    </motion.div>
  );
}
