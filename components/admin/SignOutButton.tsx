import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/Button";

export function SignOutButton() {
  return (
    <form action={async () => { "use server"; await signOut({ redirectTo: "/admin/login" }); }}>
      <Button variant="ghost" type="submit">Sign out</Button>
    </form>
  );
}
