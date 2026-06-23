import type { NextConfig } from "next";

// City slugs that have dedicated location pages under /full-arch-solutions-{slug}/.
const CITY_SLUGS = [
  "ashford-kent",
  "rochester-medway",
  "bexleyheath-se-london",
  "barnet-n-london",
];

const nextConfig: NextConfig = {
  // README mandates trailing-slash consistency; the canonical examples use trailing slashes.
  trailingSlash: true,

  images: {
    // All media is served by the GoHighLevel / filesafe CDN, which already serves WebP.
    // Pass images through untouched rather than paying Vercel to re-optimize / risk the
    // CDN blocking Vercel's fetcher. Flip `unoptimized` to false (keep remotePatterns) to
    // re-enable Next optimization later.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "assets.cdn.filesafe.space" },
    ],
  },

  async redirects() {
    // Protect existing rankings: old clinic URLs → new /full-arch-solutions-{city}/ pages.
    return CITY_SLUGS.flatMap((slug) => [
      {
        source: `/clinics/${slug}`,
        destination: `/full-arch-solutions-${slug}/`,
        permanent: true,
      },
      {
        source: `/nearbyclinics/${slug}`,
        destination: `/full-arch-solutions-${slug}/`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
