import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_TOKEN_COOKIE } from "@/lib/admin/api";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasAdminToken = Boolean(request.cookies.get(ADMIN_TOKEN_COOKIE)?.value);
  const isLoginRoute = pathname === "/admin/login";

  if (isLoginRoute && hasAdminToken) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  if (!isLoginRoute && !hasAdminToken) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
