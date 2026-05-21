export const adminNavItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "layout-dashboard" },
  { href: "/admin/menu", label: "Menu Management", icon: "utensils" },
  { href: "/admin/events", label: "Event Management", icon: "calendar" },
  { href: "/admin/reservations", label: "Reservations", icon: "book-open" },
  { href: "/admin/catering", label: "Catering Inquiries", icon: "concierge-bell" },
  { href: "/admin/franchise", label: "Franchise Applications", icon: "building" },
  { href: "/admin/gallery", label: "Gallery", icon: "image" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
] as const;

export type AdminNavIcon = (typeof adminNavItems)[number]["icon"];
