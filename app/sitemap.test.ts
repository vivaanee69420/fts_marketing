import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/site";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("includes the home page with top priority", () => {
    const home = entries.find((e) => e.url === `${SITE_URL}/`);
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1);
  });

  it("includes all 7 treatment pages", () => {
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

  it("includes all 4 location pages and not the clinics hub as a location", () => {
    for (const slug of [
      "ashford-kent",
      "rochester-medway",
      "bexleyheath-se-london",
      "barnet-n-london",
    ]) {
      expect(urls).toContain(`${SITE_URL}/full-arch-solutions-${slug}/`);
    }
  });

  it("every url is absolute against the canonical host and has no duplicates", () => {
    expect(urls.every((u) => u.startsWith(SITE_URL))).toBe(true);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
