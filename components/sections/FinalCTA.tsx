import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";

export function FinalCTA({
  kicker = "Ready when you are",
  heading = "Get your smile — and your life — back",
  body = "Book your free consultation and 3D scan. We'll tell you honestly if full arch implants are right for you.",
}: {
  kicker?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <Section tone="teal" className="text-center">
      <Container>
        <Kicker center gold>
          {kicker}
        </Kicker>
        <h2>{heading}</h2>
        <p className="mx-auto max-w-[620px] text-[1.18rem] text-[#dff0eb]">{body}</p>
        <div className="mt-[26px] flex flex-wrap justify-center gap-[14px]">
          <BookButton variant="gold" size="lg">
            Book free consultation
          </BookButton>
          <ButtonLink href="/am-i-suitable/" variant="ghost-w" size="lg">
            Take the suitability test
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
