"use client";

import { Menu, PanelLeftClose, PanelLeft } from "lucide-react";

interface AdminTopbarProps {
  onMenuClick: () => void;
  onToggleCollapse: () => void;
  collapsed: boolean;
  title: string;
}

export function AdminTopbar({
  onMenuClick,
  onToggleCollapse,
  collapsed,
  title,
}: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#d4af37]/10 bg-[#050505]/80 px-4 backdrop-blur-xl md:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white/60 lg:hidden"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <Menu className="size-5" />
        </button>
        <button
          type="button"
          className="hidden rounded-lg border border-white/10 p-2 text-white/60 lg:inline-flex"
          onClick={onToggleCollapse}
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <PanelLeft className="size-5" />
          ) : (
            <PanelLeftClose className="size-5" />
          )}
        </button>
        <div>
          <p className="font-[family-name:var(--font-accent)] text-[9px] tracking-[0.3em] text-[#d4af37]/60 uppercase">
            Sheesh Admin
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-lg text-white md:text-xl">
            {title}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="font-[family-name:var(--font-body)] text-xs text-white/80">
            Admin User
          </p>
          <p className="font-[family-name:var(--font-body)] text-[10px] text-white/40">
            Dallas Operations
          </p>
        </div>
        <div className="flex size-9 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 font-[family-name:var(--font-accent)] text-xs text-[#d4af37]">
          SA
        </div>
      </div>
    </header>
  );
}
