import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyCredentials } from "@/lib/blog/users";
import authConfig from "./auth.config";

// Full (Node-runtime) Auth.js instance: the Edge-safe base config plus the
// mongodb-backed Credentials provider. Imported only from Node contexts — the
// /api/auth route handler, server actions, and page-level `auth()` calls —
// never from the Edge middleware (which uses lib/auth.config directly).
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (creds) => {
        const email = String(creds?.email ?? "");
        const password = String(creds?.password ?? "");
        return await verifyCredentials(email, password); // null → rejected
      },
    }),
  ],
});
