import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";
import { TREATMENT_LIST } from "@/lib/treatments";

export const metadata: Metadata = pageMeta({
  title: "Treatments — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
  description:
    "Explore our full range of dental implant treatments — from single implants to full arch, fixed teeth in a day, denture alternatives and more.",
  path: "/treatments/",
});

export default function TreatmentsPage() {
  return (
    <>
      <Section>
        <Container className="text-center">
          <Kicker center>Treatments</Kicker>
          <h1>Dental implant treatments</h1>
          <p className="mx-auto mb-0 max-w-[680px] text-[1.18rem] text-muted">
            From a single tooth to a full arch of fixed teeth in a day, explore the treatments we
            offer. Every option is planned with advanced 3D imaging, specialist-led care and our own
            dental laboratory.
          </p>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
            {TREATMENT_LIST.map((t) => (
              <article
                key={t.slug}
                className="flex flex-col rounded-card border border-line bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-card"
              >
                <h3>{t.title}</h3>
                <p className="mb-6 grow text-muted">{t.heroSub}</p>
                <ButtonLink href={`/treatments/${t.slug}/`} variant="ghost" block>
                  Learn more →
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
