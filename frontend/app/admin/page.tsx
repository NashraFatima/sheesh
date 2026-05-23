import { redirect } from "next/navigation";

const ADMIN_SLUG = process.env.NEXT_PUBLIC_ADMIN_SLUG || "admin";

export default function AdminIndexPage() {
  redirect(`/${ADMIN_SLUG}/admin/login`);
}
