import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { GHLEmbed } from "@/components/booking/GHLEmbed";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "For Dentists — Refer a Patient | Fixed Teeth Solutions",
  description:
    "Refer a patient for full arch implants. Partner with the UK's full arch specialists — we look after your referred patients and return them to you for general care.",
  path: "/for-dentists/",
});

const REASONS = [
  "Specialist full arch expertise — over 1,000 implants a year",
  "Advanced 3D-guided planning and our own laboratory",
  "Clear communication throughout your patient's journey",
  "We return patients to you for ongoing general care",
];

export default function ForDentistsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>About</Kicker>
          <h1>Refer a patient for full arch implants</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            Partner with the UK&apos;s full arch specialists. We look after your referred patients and
            return them to you for their general care.
          </p>
          <div className="mt-[26px] flex flex-wrap justify-center gap-[14px]">
            <BookButton variant="gold" size="lg">
              Book free consultation
            </BookButton>
            <ButtonLink href="/am-i-suitable/" variant="ghost" size="lg">
              Am I suitable?
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Overview + referral form */}
      <Section tone="soft">
        <Container>
          <div className="grid grid-cols-1 items-start gap-[46px] md:grid-cols-2">
            <div>
              <p className="text-muted">
                If you have patients who need full arch implant treatment beyond the scope of your
                practice, we&apos;re here to help. We focus exclusively on full arch cases and welcome
                referrals from dentists across Kent and London.
              </p>
              <h3>Why refer to FTS</h3>
              <ul className="mt-[14px] list-none p-0">
                {REASONS.map((r) => (
                  <li
                    key={r}
                    className="relative border-b border-soft py-2 pl-7 before:absolute before:left-0 before:font-extrabold before:text-teal before:content-['✓']"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-line bg-white p-7 shadow-sm">
              <h3>Refer a patient</h3>
              <GHLEmbed title="Refer a patient" />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
