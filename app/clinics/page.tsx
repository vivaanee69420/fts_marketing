import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CentresGrid } from "@/components/sections/CentresGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Clinics — Fixed Teeth Solutions | Five clinics across Kent & London",
  description:
    "Find your nearest Fixed Teeth Solutions clinic. Five full arch dental implant clinics across Kent & London — Ashford, Rochester, Warwick Lodge, Bexleyheath and Barnet.",
  path: "/clinics/",
});

export default function ClinicsPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container className="text-center">
          <Kicker center>Find us</Kicker>
          <h1>Five clinics across Kent &amp; London</h1>
          <p className="mx-auto max-w-[620px] text-[1.18rem] text-muted">
            Specialist full arch care, close to home. Book at whichever clinic is nearest to you.
          </p>
        </Container>
      </Section>

      {/* Centres grid */}
      <Section tone="soft">
        <Container>
          <CentresGrid />
        </Container>
      </Section>

      <FinalCTA
        heading="Book at your nearest clinic"
        body="Free consultation and 3D scan at whichever clinic suits you best. We'll tell you honestly if full arch implants are right for you."
      />
    </>
  );
}
