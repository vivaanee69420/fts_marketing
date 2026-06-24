import { SITE_URL, SITE_NAME } from "./site";
import { CONFIG } from "./config";

const abs = (path: string) => `${SITE_URL}${path}`;

export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONFIG.phoneHref,
    email: CONFIG.email,
    medicalSpecialty: "Dentistry",
    description:
      "Full arch dental implant specialists across Kent & London — fixed teeth in a day.",
  };
}

export function dentistLocation({
  name,
  city,
  region,
  address,
  geo,
  path,
}: {
  name: string;
  city: string;
  region: string;
  address: string;
  geo?: { lat: number; lng: number };
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${SITE_NAME} — ${name}`,
    url: abs(path),
    telephone: CONFIG.phoneHref,
    email: CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressRegion: region,
      addressCountry: "GB",
    },
    ...(geo ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } } : {}),
    medicalSpecialty: "Dentistry",
  };
}

export function medicalProcedure({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: abs(path),
    procedureType: "https://schema.org/SurgicalProcedure",
    provider: { "@type": "Dentist", name: SITE_NAME, url: SITE_URL },
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function blogPosting(args: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    mainEntityOfPage: args.url,
    url: args.url,
    ...(args.image ? { image: args.image } : {}),
    datePublished: args.datePublished,
    dateModified: args.dateModified,
    author: { "@type": "Person", name: args.authorName ?? "Fixed Teeth Solutions" },
    publisher: { "@type": "Organization", name: "Fixed Teeth Solutions" },
  };
}
