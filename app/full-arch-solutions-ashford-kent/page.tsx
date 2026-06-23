import type { Metadata } from "next";
import { LocationTemplate } from "@/components/sections/LocationTemplate";
import { getLocation } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";

const SLUG = "ashford-kent";
const loc = getLocation(SLUG)!;

export const metadata: Metadata = pageMeta({
  title: loc.metaTitle,
  description: loc.metaDescription,
  path: `/full-arch-solutions-${SLUG}/`,
});

export default function Page() {
  return <LocationTemplate slug={SLUG} />;
}
