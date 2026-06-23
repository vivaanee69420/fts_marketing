import { redirect } from "next/navigation";
import { signIn, auth } from "@/lib/auth";
import { LoginForm } from "@/components/admin/LoginForm";

export default async function LoginPage({
  searchParams,
}: { searchParams: Promise<{ callbackUrl?: string }> }) {
  const session = await auth();
  const { callbackUrl } = await searchParams;
  if (session?.user) redirect(callbackUrl || "/admin");

  async function login(fd: FormData) {
    "use server";
    try {
      await signIn("credentials", {
        email: fd.get("email"),
        password: fd.get("password"),
        redirectTo: callbackUrl || "/admin",
      });
    } catch (e) {
      // Auth.js throws a redirect error on success; rethrow those.
      if (e && typeof e === "object" && "digest" in e &&
          String((e as { digest: string }).digest).startsWith("NEXT_REDIRECT")) throw e;
      return { error: "Invalid email or password" };
    }
  }

  return <LoginForm action={login} />;
}
