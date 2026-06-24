/* =========================================================
   Site-wide constants: canonical URL (env-driven), GHL form,
   and the navigation model used by Header + Footer.
   ========================================================= */

// Canonical host comes from one env var so the domain (.com vs .co.uk)
// can be set at hosting time without code changes. Default is a placeholder.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fixedteethsolutions.co.uk"
).replace(/\/$/, "");

export const SITE_NAME = "Fixed Teeth Solutions";
export const SITE_TAGLINE = "Full Arch Implant Specialists";

// The single GoHighLevel lead form reused everywhere (booking, contact, dentists).
// Swap or add per-purpose forms here later.
export const GHL_FORM_ID = "FzglX9f0IyuOyrlhgdfW";
export const GHL_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export type NavLink = { label: string; href: string; sub?: string };
export type NavItem = { label: string; href?: string; children?: NavLink[] };

export const TREATMENTS: NavLink[] = [
  { label: "Dental Implants", href: "/treatments/dental-implants/" },
  { label: "All-on-4 Implants", href: "/treatments/all-on-four-dental-implants/" },
  { label: "Full Mouth Implants", href: "/treatments/full-mouth-dental-implants/" },
  { label: "Smile in a Day", href: "/treatments/smile-in-a-day/" },
  { label: "Denture Alternatives", href: "/treatments/denture-alternatives/" },
  { label: "Implants Abroad", href: "/treatments/dental-implants-abroad/" },
  { label: "Periodontal Disease", href: "/treatments/periodontal-disease/" },
];

export const ABOUT_LINKS: NavLink[] = [
  { label: "About Us", href: "/about/" },
  { label: "Meet the Team", href: "/about/team/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Careers", href: "/careers/" },
  { label: "For Dentists", href: "/for-dentists/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

export const CLINIC_LINKS: NavLink[] = [
  { label: "Ashford", sub: "Kent", href: "/full-arch-solutions-ashford-kent/" },
  { label: "Rochester", sub: "Medway", href: "/full-arch-solutions-rochester-medway/" },
  { label: "Warwick Lodge", sub: "Herne Bay", href: "/clinics/" },
  { label: "Bexleyheath", sub: "SE London", href: "/full-arch-solutions-bexleyheath-se-london/" },
  { label: "Barnet", sub: "N London", href: "/full-arch-solutions-barnet-n-london/" },
];

export const NAV: NavItem[] = [
  { label: "How it works", href: "/how-it-works/" },
  { label: "Treatments", children: TREATMENTS },
  { label: "Pricing", href: "/pricing/" },
  { label: "Results", href: "/results/" },
  { label: "Am I suitable?", href: "/am-i-suitable/" },
  { label: "About", children: ABOUT_LINKS },
  { label: "Nearby Clinics", children: CLINIC_LINKS },
];
