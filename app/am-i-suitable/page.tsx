import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SuitabilityQuiz } from "@/components/quiz/SuitabilityQuiz";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Am I Suitable? — 60-second suitability test",
  description:
    "Take the free 60-second suitability test from Fixed Teeth Solutions. Find out if full arch dental implants could be right for you, then book a free consultation.",
  path: "/am-i-suitable/",
});

export default function AmISuitablePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="soft" className="border-b border-line">
        <Container className="text-center">
          <Kicker center>Am I suitable?</Kicker>
          <h1>
            Find out in <span className="text-teal">60 seconds</span>
          </h1>
          <p className="mx-auto max-w-[680px] text-[1.18rem] text-muted">
            Answer a few quick questions. We&apos;ll tell you if full arch implants could be right
            for you — and you can book a free consultation if so.
          </p>
        </Container>
      </Section>

      {/* Quiz */}
      <Section className="pt-[30px]">
        <Container>
          <SuitabilityQuiz />
        </Container>
      </Section>

      <FinalCTA
        heading="Prefer to skip the test?"
        body="Book straight in. We'll tell you honestly if full arch implants are right for you at your free consultation and 3D scan."
      />
    </>
  );
}
