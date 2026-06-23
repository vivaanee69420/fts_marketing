import { test, expect } from "@playwright/test";

async function jsonLdTypes(page: import("@playwright/test").Page): Promise<string[]> {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  return blocks.map((b) => {
    try {
      return (JSON.parse(b)["@type"] as string) ?? "";
    } catch {
      return "";
    }
  });
}

test("home has a title, a self-canonical and organization JSON-LD", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/Fixed Teeth Solutions/i);
  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", /\/$/);
  expect(await jsonLdTypes(page)).toContain("Dentist");
});

test("treatment page emits MedicalProcedure + canonical with the right path", async ({ page }) => {
  await page.goto("/treatments/all-on-four-dental-implants/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/treatments\/all-on-four-dental-implants\/$/,
  );
  expect(await jsonLdTypes(page)).toContain("MedicalProcedure");
});

test("location page exists (not a 404) and emits Dentist location JSON-LD", async ({ page }) => {
  const res = await page.goto("/full-arch-solutions-ashford-kent/", {
    waitUntil: "domcontentloaded",
  });
  expect(res?.status()).toBe(200);
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/full-arch-solutions-ashford-kent\/$/,
  );
  expect(await jsonLdTypes(page)).toContain("Dentist");
});
