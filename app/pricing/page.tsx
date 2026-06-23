import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { PricingToggle } from "@/components/pricing/PricingToggle";
import { Faq } from "@/components/sections/Faq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CONFIG, gbp } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing & Finance — From £7,997 per arch",
  description:
    "Full-jaw implant prices, 1-jaw and 2-jaw options and 60-month finance examples — see the cost before the consultation.",
  path: "/pricing/",
});

const FAQ_ITEMS = [
  {
    q: "What does treatment-day fixed bridge mean?",
    a: "It means a fixed temporary bridge may be fitted on treatment day when your clinical plan allows it. The exact options are confirmed at your consultation.",
  },
  {
    q: "Can you assess me if I have bone loss?",
    a: "Yes. The 3D scan lets the team review bone volume, implant angles and bite forces before recommending whether a full-jaw route is sensible.",
  },
  {
    q: "How are prices shown?",
    a: `Prices are split into 1 jaw (upper or lower) and 2 jaws (upper + lower) so you can compare. Finance examples are shown over 60 months from ${gbp(CONFIG.financeFrom)}/month at representative 12.9% APR, subject to status.`,
  },
  {
    q: "What keeps me comfortable during treatment?",
    a: "Local anaesthetic is used for surgery, and comfort options are discussed during planning. Sedation support is available on our Elite plan if needed.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="soft" className="border-b border-line">
        <Container className="text-center">
          <Kicker center>Pricing</Kicker>
          <h1>
            Pricing &amp; <span className="text-teal">finance</span>
          </h1>
          <p className="mx-auto mb-7 max-w-[680px] text-[1.18rem] text-muted">
            Compare 1-jaw and 2-jaw treatment, bridge levels and 60-month finance examples before
            you commit — no consultation pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <BookButton variant="gold" size="lg">
              Book consultation
            </BookButton>
            <ButtonLink href="/am-i-suitable/" variant="ghost" size="lg">
              Check suitability
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Pricing toggle + tiers */}
      <Section id="pricing">
        <Container>
          <div className="center text-center">
            <Kicker center>Jaw pricing</Kicker>
            <h2>See the cost before the consultation pressure starts</h2>
            <p className="mx-auto mb-[26px] max-w-[720px] text-[1.18rem] text-muted">
              Compare 1 jaw and 2 jaws in the open, then choose the bridge level that makes sense
              for your plan.
            </p>
          </div>
          <PricingToggle />
          <p className="mx-auto mt-6 max-w-[760px] text-center text-[0.85rem] text-muted">
            1 jaw means upper or lower. 2 jaws means upper + lower. Finance is shown over 60 months
            at representative 12.9% APR. Finance subject to status.
          </p>
        </Container>
      </Section>

      {/* Finance clarity */}
      <Section tone="ink">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Kicker gold>Finance clarity</Kicker>
              <h2>
                Monthly examples from {gbp(CONFIG.financeFrom)}
              </h2>
              <p className="text-[1.1rem] text-[#cdded9]">
                The pricing cards show one 60-month finance guide for each option at representative
                12.9% APR. Your coordinator can walk through eligibility, deposit choices and timing
                before you book treatment.
              </p>
              <BookButton variant="gold" size="lg">
                Talk through finance
              </BookButton>
            </div>
            <div className="rounded-card border border-white/20 bg-white/10 p-[26px]">
              <p className="mb-[6px] text-[#cdded9]">Representative example</p>
              <div className="font-serif text-[1.6rem] leading-tight text-white">
                {CONFIG.financeExample}
              </div>
              <p className="mt-[10px] text-[0.86rem] text-[#9fb4ae]">
                Finance is illustrative until your application is assessed. First payment is taken
                upfront, and eligibility is subject to status and credit checks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="soft">
        <Container>
          <div className="center text-center">
            <Kicker center>Questions</Kicker>
            <h2>Answers before the scan</h2>
            <p className="mx-auto mb-11 max-w-[640px] text-[1.18rem] text-muted">
              Plain-English answers for the questions that usually come up first.
            </p>
          </div>
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <FinalCTA
        kicker="Next step"
        heading="Start with the scan, not the sales pressure"
        body="Book a scan-led consultation and leave with a clearer view of your jaw options, price range and what treatment would involve."
      />
    </>
  );
}
