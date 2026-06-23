import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { CdnImage } from "@/components/ui/CdnImage";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Meet the Team — Fixed Teeth Solutions",
  description:
    "Meet the specialist team behind Fixed Teeth Solutions — surgeons, restorative dentists, coordinators and lab technicians, all focused on your new fixed smile.",
  path: "/about/team/",
});

// PLACEHOLDER: roles/bios ported from the original meet-the-team.html, which itself
// used placeholder cards (no real names/photos yet). Swap in real team members + CdnImage photos.
type TeamMember = { name: string; role: string; bio: string; photo?: string };

const TEAM: TeamMember[] = [
  {
    name: "Gaurav Mehta",
    // PLACEHOLDER role/bio — replace with Gaurav's real title and bio.
    role: "Lead Implant Specialist",
    bio: "Leads complex full arch cases with advanced 3D-guided surgery and years of dedicated implant experience.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1b181eb301d443d726.png",
  },
  {
    name: "Rami Daoui",
    // PLACEHOLDER role/bio — replace with Rami's real title and bio.
    role: "Restorative & Cosmetic Lead",
    bio: "Designs and fits your bridge for the perfect bite, fit and natural-looking finish.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1a109a1ab49dcf8fea.png",
  },
  {
    name: "Pedro Laranjeira",
    // PLACEHOLDER role/bio — replace with Pedro's real title and bio.
    role: "Patient Coordinator",
    bio: "Your point of contact from first enquiry to aftercare — answering questions and arranging your visits.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1aae7d47683914f56c.png",
  },
  {
    name: "Nicolas Montagnat-Rentier",
    // PLACEHOLDER role/bio — replace with Nicolas's real title and bio.
    role: "In-house Laboratory",
    bio: "Crafts your fixed teeth in our own lab for precise fit, function and aesthetics.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1a72499097121f5a03.png",
  },
  {
    name: "Marta Ribeiro",
    // PLACEHOLDER role/bio — replace with Marta's real title and bio.
    role: "Clinical Care",
    bio: "Supports your treatment and recovery, keeping you comfortable at every step.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aae7f659bec99fcaf1006.png",
  },
  {
    name: "Shreyas Mhatre",
    // PLACEHOLDER role/bio — replace with Shreyas's real title and bio.
    role: "Operations",
    bio: "Makes sure every clinic runs smoothly so your care is seamless.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3ab0512ed3b9e323b6fbdd.png",
  },
];

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
