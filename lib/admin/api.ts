export const ADMIN_TOKEN_COOKIE = "sheesh_admin_token";

export const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:5000";

export const API_BASE_URL = `${API_ORIGIN}/api`;

export function resolveApiAssetUrl(url: string) {
  if (!url || url.startsWith("http://") || url.startsWith("https://") || url.startsWith("blob:")) {
    return url;
  }

  return `${API_ORIGIN}${url.startsWith("/") ? url : `/${url}`}`;
}

export interface AdminProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "super-admin";
  isActive: boolean;
  lastLoginAt?: string | null;
}

export async function parseApiError(response: Response) {
  try {
    const data = (await response.json()) as { message?: string };
    return data.message || "Something went wrong. Please try again.";
  } catch {
    return "Something went wrong. Please try again.";
  }
}
