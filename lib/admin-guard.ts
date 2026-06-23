import { auth } from "@/lib/auth";

export async function requireSession() {
  const session = await auth();
  if (!session?.user) throw new Error("UNAUTHENTICATED");
  return session.user as { id: string; role: string; name?: string | null };
}
