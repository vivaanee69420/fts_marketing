import Link from "next/link";
import Image from "next/image";
import { CONFIG } from "@/lib/config";
import { ABOUT_LINKS, CLINIC_LINKS, SITE_NAME, TREATMENTS } from "@/lib/site";
import { BookButton } from "@/components/booking/BookButton";

const colHead = "mb-[14px] font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white";
const colLink = "mb-[9px] block text-[#bcd0ca] hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a221e] px-0 py-[60px] pb-[30px] text-[0.9rem] text-[#9fb4ae]">
      <div className="mx-auto max-w-[1180px] px-[26px]">
        <div className="mb-[38px] grid grid-cols-1 gap-[34px] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">
          <div>
            {/* White-wordmark variant of the brand lockup for the dark footer. */}
            <Image
              src="/logo-white.webp"
              alt={SITE_NAME}
              width={573}
              height={480}
              className="mb-[14px] h-[80px] w-auto"
            />
            <p className="text-[#bcd0ca]">
              Fixed Teeth Solutions — the UK&apos;s full arch dental implant specialists. Eat. Smile.
              Live. Again.
            </p>
          </div>
          <div>
            <h5 className={colHead}>Treatments</h5>
            {TREATMENTS.map((t) => (
              <Link key={t.href} href={t.href} className={colLink}>
                {t.label}
              </Link>
            ))}
          </div>
          <div>
            <h5 className={colHead}>About</h5>
            {ABOUT_LINKS.map((a) => (
              <Link key={a.href} href={a.href} className={colLink}>
                {a.label}
              </Link>
            ))}
          </div>
          <div>
            <h5 className={colHead}>Clinics</h5>
            {CLINIC_LINKS.map((c) => (
              <Link key={c.href + c.label} href={c.href} className={colLink}>
                {c.label} · {c.sub}
              </Link>
            ))}
          </div>
          <div>
            <h5 className={colHead}>Get in touch</h5>
            <a href={`tel:${CONFIG.phoneHref}`} className={colLink}>
              {CONFIG.phone}
            </a>
            <a href={`mailto:${CONFIG.email}`} className={colLink}>
              {CONFIG.email}
            </a>
            <div className="mt-2">
              <BookButton variant="gold">Book consultation</BookButton>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-[22px] text-[0.78rem] leading-[1.7] text-[#7d938d]">
          © {year} Fixed Teeth Solutions. All rights reserved. Clinicians are registered with the
          General Dental Council (GDC). Clinics are regulated by the Care Quality Commission (CQC).
          Finance is subject to status and provided by regulated third-party lenders; representative
          figures are illustrative and confirmed at consultation. Suitability results provided on
          this site are for general information only and do not constitute a diagnosis.
        </div>
      </div>
    </footer>
  );
}
