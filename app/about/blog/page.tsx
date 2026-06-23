import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog — Fixed Teeth Solutions",
  description:
    "Guides, patient stories and honest advice on full arch dental implants from the Fixed Teeth Solutions team.",
  path: "/about/blog/",
});

// PLACEHOLDER: Phase 1 blog index. The real blog (article list / CMS) is Phase 2.
export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>About</Kicker>
          <h1>The FTS blog</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            Guides, patient stories and honest advice on full arch dental implants.
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

      {/* Coming soon */}
      <Section tone="soft" className="text-center">
        <Container>
          <Kicker center>Coming soon</Kicker>
          <h2>Articles coming soon</h2>
          <p className="mx-auto max-w-[620px] text-[1.18rem] text-muted">
            We&apos;re writing honest, practical guides to full arch dental implants — what to expect,
            how treatment works, and real patient stories. Check back soon, or book a free
            consultation in the meantime.
          </p>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
