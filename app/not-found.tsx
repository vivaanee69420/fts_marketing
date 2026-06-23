import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section className="text-center">
      <Container>
        <Kicker center>404</Kicker>
        <h1>We couldn&apos;t find that page</h1>
        <p className="mx-auto mb-8 max-w-[560px] text-[1.18rem] text-muted">
          The page you were looking for may have moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <ButtonLink href="/" variant="gold" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/treatments/" variant="ghost" size="lg">
            Browse treatments
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
