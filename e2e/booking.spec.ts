import { test, expect } from "@playwright/test";

test("booking modal opens from the header and mounts the GHL form", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Book consultation" }).first().click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();

  // The GoHighLevel form iframe mounts only when the modal opens (facade load).
  const iframe = dialog.locator('iframe[src*="leadconnectorhq.com"]');
  await expect(iframe).toBeVisible();

  // Escape closes it.
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
