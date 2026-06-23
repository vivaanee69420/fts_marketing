import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
  description:
    "About Fixed Teeth Solutions: the UK's full arch dental implant specialists. Over 1,000 implants placed a year, five clinics, our own lab, GDC and CQC regulated.",
  path: "/about/",
});

const STATS = [
  { n: "1,000+", l: "implants placed every year" },
  { n: "5", l: "clinics across Kent & London" },
  { n: "60 min", l: "callback promise" },
  { n: "In-house", l: "dental laboratory" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>About</Kicker>
          <h1>About Fixed Teeth Solutions</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            We&apos;re the UK&apos;s full arch dental implant specialists — focused on one thing, and
            doing it exceptionally well.
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

      {/* Story */}
      <Section tone="soft">
        <Container>
          <p className="text-[1.18rem] text-ink2">
            Fixed Teeth Solutions exists to give people their smile — and their life — back. We focus
            exclusively on full arch dental implants: replacing a whole jaw of missing, loose or
            failing teeth with a fixed, natural-looking set of teeth, often in a single day.
          </p>

          <h2 className="mt-[1.4em]">Specialists, not generalists</h2>
          <p className="text-muted">
            Because full arch implants are all we do, our clinicians develop deep expertise. We place
            over 1,000 implants every year across our clinics, supported by advanced 3D planning and
            our own in-house dental laboratory.
          </p>

          <h2>Honest from the first visit</h2>
          <p className="text-muted">
            Your consultation and 3D scan are free, and we tell you the truth — there and then —
            about whether treatment is right for you. No pressure, no hidden costs. Our prices are
            published up front because we believe you deserve to know exactly where you stand.
          </p>

          <h2>Regulated and accountable</h2>
          <p className="text-muted">
            Our clinicians are registered with the General Dental Council (GDC) and our clinics are
            regulated by the Care Quality Commission (CQC). We back every case with aftercare and
            ongoing reviews at a clinic near you.
          </p>

          <div className="mt-11 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="rounded-card border border-line bg-white p-7 text-center shadow-sm"
              >
                <div className="mb-[0.2em] font-serif text-[2.2rem] text-teal">{s.n}</div>
                <p className="mb-0 text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
