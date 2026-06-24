import { test, expect } from "@playwright/test";

const EMAIL = process.env.E2E_ADMIN_EMAIL!;
const PASSWORD = process.env.E2E_ADMIN_PASSWORD!;

// The publish flow mutates shared state (login session, a category, a post),
// so the steps must run in order.
test.describe.configure({ mode: "serial" });

test("admin can publish a post that appears on the public blog", async ({ page }) => {
  // Gate: unauthenticated /admin redirects to the login page.
  await page.goto("/admin");
  await expect(page).toHaveURL(/\/admin\/login/);

  // Log in with the seeded admin credentials.
  await page.fill('input[name="email"]', EMAIL);
  await page.fill('input[name="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/\/admin\/?$/);

  // Ensure the "All on 4" category exists (tolerate a prior run having created it).
  await page.goto("/admin/categories");
  const catTag = page.getByText("/all-on-4").first();
  if (!(await catTag.isVisible().catch(() => false))) {
    await page.fill('input[name="name"]', "All on 4");
    await page.click('button:has-text("Add")');
  }
  await expect(catTag).toBeVisible();

  // Create + publish a post.
  const title = `E2E Post ${Date.now()}`;
  await page.goto("/admin/posts/new");
  await page.fill('input[name="title"]', title);
  await page.fill('textarea[name="excerpt"]', "An excerpt long enough for validation.");
  await page.locator(".ProseMirror").click();
  await page.keyboard.type("This is the body of the article.");
  await page.selectOption('select[name="categorySlug"]', "all-on-4");
  await page.selectOption('select[name="status"]', "published");
  await page.click('button:has-text("Save")');
  await expect(page).toHaveURL(/\/admin\/?$/);

  // The published post is now visible on the public blog index.
  await page.goto("/blog/");
  await expect(page.getByText(title)).toBeVisible();
});

test("unknown / unpublished slugs are not publicly visible", async ({ request }) => {
  const res = await request.get("/blog/this-slug-does-not-exist/");
  expect(res.status()).toBe(404);
});
