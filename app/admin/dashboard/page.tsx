"use client";

import Link from "next/link";
import { AdminStatCard } from "@/components/admin/ui/AdminStatCard";
import { StatusChip } from "@/components/admin/ui/StatusChip";
import { activityFeed, dashboardStats } from "@/lib/admin/mock-data";
import { menuItems } from "@/lib/menu-data";
import { useReservations } from "@/components/providers/ReservationProvider";

export default function AdminDashboardPage() {
  const { reservations } = useReservations();
  const pendingBookings = reservations.filter((reservation) => reservation.status === "Pending").length;
  const stats = {
    ...dashboardStats,
    reservations: reservations.length,
    pendingBookings,
    menuItems: menuItems.length,
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        <AdminStatCard label="Reservations" value={stats.reservations} change="+12% this week" accent />
        <AdminStatCard label="Pending Bookings" value={stats.pendingBookings} change="Needs review" />
        <AdminStatCard label="Catering Inquiries" value={stats.cateringInquiries} />
        <AdminStatCard label="Franchise Apps" value={stats.franchiseApplications} />
        <AdminStatCard label="Menu Items" value={stats.menuItems} />
        <AdminStatCard label="Upcoming Events" value={stats.upcomingEvents} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-luxury rounded-2xl p-6 lg:col-span-2">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-white">
            Booking Overview
          </h2>
          <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-white/40">
            Weekly reservation trend (placeholder)
          </p>
          <div className="mt-6 flex h-48 items-end justify-between gap-2 px-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-[#8b6914] to-[#d4af37]/80 transition-all hover:opacity-90"
                  style={{ height: `${h}%` }}
                />
                <span className="font-[family-name:var(--font-body)] text-[10px] text-white/30">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-luxury rounded-2xl p-6">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-white">
            Activity Feed
          </h2>
          <ul className="mt-4 space-y-4">
            {activityFeed.map((item) => (
              <li
                key={item.id}
                className="border-b border-white/[0.04] pb-3 last:border-0"
              >
                <p className="font-[family-name:var(--font-body)] text-sm text-white/70">
                  {item.text}
                </p>
                <p className="mt-1 font-[family-name:var(--font-body)] text-[10px] text-white/35">
                  {item.time}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-luxury overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
            <h2 className="font-[family-name:var(--font-display)] text-lg text-white">
              Recent Reservations
            </h2>
            <Link
              href="/admin/reservations"
              className="font-[family-name:var(--font-body)] text-xs text-[#d4af37] hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {reservations.slice(0, 4).map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between gap-4 px-6 py-4"
              >
                <div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-white">
                    {r.guestName}
                  </p>
                  <p className="text-xs text-white/40">
                    {r.date} · {r.time} · {r.partySize} guests
                  </p>
                </div>
                <StatusChip status={r.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-luxury rounded-2xl p-6">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-white">
            Analytics Snapshot
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: "Avg Party Size", value: "4.2" },
              { label: "Peak Hour", value: "9 PM" },
              { label: "Approval Rate", value: "87%" },
              { label: "Hookah Orders", value: "34%" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                <p className="text-[10px] tracking-wide text-white/40 uppercase">
                  {m.label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[#d4af37]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
