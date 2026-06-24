import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe Auth.js config: NO database/provider imports, so it can be bundled
 * into the Edge-runtime middleware. The middleware only needs to decode the JWT
 * (session strategy "jwt") to gate /admin — it never calls `authorize`. The
 * mongodb-backed Credentials provider lives only in `lib/auth.ts` (Node).
 */
export default {
  // trustHost: required for reverse-proxy deployment — verify AUTH_URL is set at deploy time
  trustHost: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
