import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { CdnImage } from "@/components/ui/CdnImage";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = pageMeta({
  title: "Meet the Team — Fixed Teeth Solutions",
  description:
    "Meet the specialist team behind Fixed Teeth Solutions — surgeons, restorative dentists, coordinators and lab technicians, all focused on your new fixed smile.",
  path: "/about/team/",
});

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>About</Kicker>
          <h1>Meet your specialist team</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            Full arch implants are a team effort. Surgeon, restorative dentist, coordinator and lab
            technician — all focused on your new smile.
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

      {/* Team grid */}
      <Section tone="soft">
        <Container>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="rounded-card border border-line bg-white p-7 shadow-sm"
              >
                {/* Real photo via CdnImage when set, else the gradient placeholder. */}
                <div className="ph -mx-7 -mt-7 mb-[18px] min-h-[220px]">
                  {m.photo && (
                    <CdnImage
                      src={m.photo}
                      alt={m.name}
                      sizes="(max-width:940px) 100vw, 33vw"
                    />
                  )}
                </div>
                <h4>{m.name}</h4>
                <Kicker>{m.role}</Kicker>
                <p className="mb-0 text-muted">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
