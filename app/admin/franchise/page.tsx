"use client";

import { useState } from "react";
import { mockFranchiseApps } from "@/lib/admin/mock-data";
import type { AdminFranchiseApp } from "@/lib/admin/types";
import { StatusChip } from "@/components/admin/ui/StatusChip";
import { AdminModal } from "@/components/admin/ui/AdminModal";

export default function AdminFranchisePage() {
  const [selected, setSelected] = useState<AdminFranchiseApp | null>(null);

  return (
    <div className="space-y-6">
      <div className="glass-luxury overflow-x-auto rounded-2xl">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-[10px] tracking-[0.2em] text-white/40 uppercase">
              <th className="px-4 py-4">Applicant</th>
              <th className="px-4 py-4">Market</th>
              <th className="px-4 py-4">Investment</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4 text-right">View</th>
            </tr>
          </thead>
          <tbody>
            {mockFranchiseApps.map((app) => (
              <tr key={app.id} className="border-b border-white/[0.04]">
                <td className="px-4 py-3 text-white">{app.name}</td>
                <td className="px-4 py-3 text-white/50">{app.market}</td>
                <td className="px-4 py-3 text-white/50">{app.investment}</td>
                <td className="px-4 py-3">
                  <StatusChip status={app.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    className="text-xs text-[#d4af37]"
                    onClick={() => setSelected(app)}
                  >
                    Application
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title="Franchise Application"
        wide
      >
        {selected && (
          <div className="space-y-3 text-sm">
            <p className="text-lg text-white">{selected.name}</p>
            <p className="text-white/50">{selected.email}</p>
            <p>
              <span className="text-white/40">Market: </span>
              {selected.market}
            </p>
            <p>
              <span className="text-white/40">Investment: </span>
              {selected.investment}
            </p>
            <p className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-white/60">
              {selected.background}
            </p>
            <StatusChip status={selected.status} />
          </div>
        )}
      </AdminModal>
    </div>
  );
}
