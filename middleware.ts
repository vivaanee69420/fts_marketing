import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";

// Build the auth instance from the Edge-safe config ONLY (no mongodb/provider
// imports) so the middleware bundle stays within the Edge runtime. Using
// `@/lib/auth` here would pull the mongodb driver into the Edge bundle and
// crash at runtime ("a Node.js API is used … not supported in the Edge Runtime").
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLogin = pathname.startsWith("/admin/login");
  if (pathname.startsWith("/admin") && !isLogin && !req.auth) {
    const url = new URL("/admin/login", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", pathname);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
