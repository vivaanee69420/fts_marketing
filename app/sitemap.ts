import type { MetadataRoute } from "next";
import { SITE_URL, TREATMENTS, ABOUT_LINKS, CLINIC_LINKS } from "@/lib/site";
import { listPublished } from "@/lib/blog/posts";
import { listCategories } from "@/lib/blog/categories";

export const revalidate = 3600;

/**
 * Dynamic sitemap built from the route model (native app/sitemap.ts, not the
 * build-time next-sitemap package — so Phase-2 blog posts can be added here and
 * appear without a redeploy via revalidation).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "/",
    "/how-it-works/",
    "/treatments/",
    "/pricing/",
    "/results/",
    "/am-i-suitable/",
    "/clinics/",
    "/blog/",
  ];

  const treatmentPaths = TREATMENTS.map((t) => t.href);
  const aboutPaths = ABOUT_LINKS.map((a) => a.href);
  // Only the dedicated location pages (skip the hub link that points at /clinics/).
  const locationPaths = CLINIC_LINKS.map((c) => c.href).filter((h) =>
    h.startsWith("/full-arch-solutions-"),
  );

  const [{ items: posts }, categories] = await Promise.all([
    listPublished({ perPage: 1000 }),
    listCategories(),
  ]);
  const blogPaths = posts.map((p) => `/blog/${p.slug}/`);
  const categoryPaths = categories.map((c) => `/blog/category/${c.slug}/`);

  const all = Array.from(new Set([
    ...staticPaths,
    ...treatmentPaths,
    ...aboutPaths,
    ...locationPaths,
    ...categoryPaths,
    ...blogPaths,
  ]));

  return all.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
