import { test, expect } from "@playwright/test";

test("can navigate to a treatment page", async ({ page }, testInfo) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const header = page.getByRole("banner");
  const link = header.getByRole("link", { name: "All-on-4 Implants" });
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: /toggle menu/i }).click();
    await link.click();
  } else {
    await header.getByRole("button", { name: /^Treatments/ }).hover();
    await link.click();
  }
  await expect(page).toHaveURL(/\/treatments\/all-on-four-dental-implants\/$/);
  await expect(page.locator("h1")).toBeVisible();
});

test("home has no horizontal overflow", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(overflow).toBe(false);
});

test("suitability quiz reaches a result without capturing data", async ({ page }) => {
  await page.goto("/am-i-suitable/", { waitUntil: "domcontentloaded" });
  // answer all 7 steps by picking the first option each time
  for (let i = 0; i < 7; i++) {
    await page.locator("button[aria-pressed]").first().click();
    await page.getByRole("button", { name: /Continue|See my result/i }).click();
  }
  await expect(page.getByText(/Nothing was submitted/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /Book my free consultation/i })).toBeVisible();
});
