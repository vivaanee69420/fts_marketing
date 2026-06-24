"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function LoginForm({ action }: { action: (fd: FormData) => Promise<{ error?: string } | void> }) {
  const [error, setError] = useState<string | null>(null);
  return (
    <form
      action={async (fd) => {
        setError(null);
        const res = await action(fd);
        if (res?.error) setError(res.error);
      }}
      className="mx-auto mt-16 max-w-[380px] rounded-card border border-line bg-white p-7 shadow-sm"
    >
      <h1 className="mb-5 text-[1.4rem]">Sign in</h1>
      <label className="mb-1 block text-sm font-semibold">Email</label>
      <input name="email" type="email" required className="mb-4 w-full rounded-[10px] border border-line px-3 py-2" />
      <label className="mb-1 block text-sm font-semibold">Password</label>
      <input name="password" type="password" required className="mb-5 w-full rounded-[10px] border border-line px-3 py-2" />
      {error && <p className="mb-3 text-sm font-semibold text-[#b4452f]">{error}</p>}
      <Button variant="teal" type="submit" className="w-full">Sign in</Button>
    </form>
  );
}
