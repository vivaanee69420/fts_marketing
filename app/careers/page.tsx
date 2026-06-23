import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers — Fixed Teeth Solutions",
  description:
    "Join a specialist full arch dental implant team that changes lives every day. Clinical, laboratory and patient-support roles across our Kent and London clinics.",
  path: "/careers/",
});

const AREAS = [
  {
    icon: "🦷",
    title: "Clinical roles",
    body: "Implant surgeons, restorative dentists, hygienists and dental nurses.",
  },
  {
    icon: "🔬",
    title: "Laboratory",
    body: "Skilled dental technicians for our in-house lab.",
  },
  {
    icon: "💬",
    title: "Patient & support",
    body: "Treatment coordinators, reception and practice management.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>About</Kicker>
          <h1>Careers at Fixed Teeth Solutions</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            Join a specialist team that changes lives every day. We&apos;re always interested in
            talented, caring people across our clinics and laboratory.
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

      {/* Where we hire */}
      <Section>
        <Container>
          <div className="text-center">
            <Kicker center>Where we hire</Kicker>
            <h2>Roles across our clinics and lab</h2>
          </div>
          <div className="mt-11 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {AREAS.map((a) => (
              <div
                key={a.title}
                className="rounded-card border border-line bg-white p-7 shadow-sm transition hover:-translate-y-[3px] hover:shadow-card"
              >
                <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] bg-soft2 text-[24px] text-teal">
                  {a.icon}
                </div>
                <h4>{a.title}</h4>
                <p className="mb-0 text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Register your interest */}
      <Section tone="soft">
        <Container>
          <div className="text-center">
            <Kicker center>Get in touch</Kicker>
            <h2>Register your interest</h2>
            <p className="mx-auto max-w-[680px] text-[1.18rem] text-muted">
              Don&apos;t see your role listed? We&apos;d still love to hear from you. Tell us about
              yourself and the role you&apos;re interested in, and our team will be in touch.
            </p>
          </div>
          <div className="mt-11 grid grid-cols-1 gap-[22px] md:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-7 shadow-sm">
              <h4>Talented, caring people wanted</h4>
              <p className="mb-0 text-muted">
                We&apos;re always interested in clinical, laboratory and patient-support talent across
                our Kent and London full arch implant clinics. Send us your details and a note about
                yourself.
              </p>
              <BookButton variant="gold" className="mt-[18px]">
                Apply / enquire
              </BookButton>
            </div>
            <div className="rounded-card border border-line bg-white p-7 shadow-sm">
              <h4>What we look for</h4>
              <ul className="mt-[14px] list-none p-0">
                {[
                  "A genuine commitment to patient care",
                  "Specialist skill across clinical, lab and support roles",
                  "People who want to change lives every day",
                ].map((t) => (
                  <li
                    key={t}
                    className="relative border-b border-soft py-2 pl-7 before:absolute before:left-0 before:font-extrabold before:text-teal before:content-['✓']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <BookButton variant="gold" className="mt-[18px]">
                Apply / enquire
              </BookButton>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
