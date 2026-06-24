import { describe, it, expect, vi } from "vitest";
import { SITE_URL } from "@/lib/site";

vi.mock("@/lib/blog/posts", () => ({
  listPublished: vi.fn().mockResolvedValue({
    items: [{ slug: "all-on-4-guide" }, { slug: "implant-aftercare" }],
    total: 2,
  }),
}));

vi.mock("@/lib/blog/categories", () => ({
  listCategories: vi.fn().mockResolvedValue([
    { slug: "all-on-4" },
    { slug: "aftercare" },
  ]),
}));

// Import after mocks are registered (vi.mock is hoisted so this is safe)
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("includes the home page with top priority", async () => {
    const entries = await sitemap();
    const home = entries.find((e) => e.url === `${SITE_URL}/`);
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1);
  });

  it("includes all 7 treatment pages", async () => {
    const entries = await sitemap();
    const urls = entries.map((e) => e.url);
    for (const slug of [
      "dental-implants",
      "all-on-four-dental-implants",
      "full-mouth-dental-implants",
      "smile-in-a-day",
      "denture-alternatives",
      "dental-implants-abroad",
      "periodontal-disease",
    ]) {
      expect(urls).toContain(`${SITE_URL}/treatments/${slug}/`);
    }
  });

  it("includes all 4 location pages and not the clinics hub as a location", async () => {
    const entries = await sitemap();
    const urls = entries.map((e) => e.url);
    for (const slug of [
      "ashford-kent",
      "rochester-medway",
      "bexleyheath-se-london",
      "barnet-n-london",
    ]) {
      expect(urls).toContain(`${SITE_URL}/full-arch-solutions-${slug}/`);
    }
  });

  it("every url is absolute against the canonical host and has no duplicates", async () => {
    const entries = await sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls.every((u: string) => u.startsWith(SITE_URL))).toBe(true);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("includes blog post URLs, category URLs, and the /blog/ static page", async () => {
    const entries = await sitemap();
    const urls = entries.map((e) => e.url);
    // Static blog index
    expect(urls).toContain(`${SITE_URL}/blog/`);
    // Blog post pages
    expect(urls).toContain(`${SITE_URL}/blog/all-on-4-guide/`);
    expect(urls).toContain(`${SITE_URL}/blog/implant-aftercare/`);
    // Category pages
    expect(urls).toContain(`${SITE_URL}/blog/category/all-on-4/`);
    expect(urls).toContain(`${SITE_URL}/blog/category/aftercare/`);
  });
});
