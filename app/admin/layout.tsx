import { AdminShell } from "@/components/admin/layout/AdminShell";
import { ReservationProvider } from "@/components/providers/ReservationProvider";

export const metadata = {
  title: "Admin | Sheesh Eatery & Lounge",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReservationProvider>
      <AdminShell>{children}</AdminShell>
    </ReservationProvider>
  );
}
