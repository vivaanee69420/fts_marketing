import { expect, it, vi } from "vitest";

it("throws when no session", async () => {
  vi.doMock("@/lib/auth", () => ({ auth: async () => null }));
  const { requireSession } = await import("./admin-guard");
  await expect(requireSession()).rejects.toThrow("UNAUTHENTICATED");
  vi.resetModules();
});

it("returns the user when session present", async () => {
  vi.doMock("@/lib/auth", () => ({ auth: async () => ({ user: { id: "1", role: "admin" } }) }));
  const { requireSession } = await import("./admin-guard");
  expect(await requireSession()).toMatchObject({ id: "1", role: "admin" });
  vi.resetModules();
});
