import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { StepsHowItWorks, DEFAULT_STEPS } from "@/components/sections/StepsHowItWorks";
import { Faq } from "@/components/sections/Faq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How It Works — Full Arch Dental Implants",
  description:
    "How full arch dental implants work at Fixed Teeth Solutions — from free consultation and 3D scan to fixed teeth in a day and aftercare for life.",
  path: "/how-it-works/",
});

const STEP_DETAILS = [
  {
    tag: "Step 01",
    title: "Suitability & consultation",
    body: "Your journey starts with a free, no-obligation consultation and a 3D scan. We assess your jaw, bone and bite, listen to what you want, and tell you honestly — there and then — whether full arch implants are right for you. Even if you've been told 'no' elsewhere, this is the moment to find out for sure.",
  },
  {
    tag: "Step 02",
    title: "Your treatment plan",
    body: "Once we've reviewed your scan, you get a clear, fixed-price written plan with finance options laid out in full. No hidden costs and no pressure — take it away and think it over for as long as you need. Your coordinator is on hand to talk through bridge levels, timing and deposit choices.",
  },
  {
    tag: "Step 03",
    title: "Fixed teeth in a day",
    body: "On treatment day, your implants are placed — often as few as four per jaw — and a fixed set of teeth is fitted, so you leave with a smile rather than a gap. Local anaesthetic is used for surgery, with comfort and sedation options discussed beforehand so you know exactly what to expect.",
  },
  {
    tag: "Step 04",
    title: "Aftercare for life",
    body: "After healing, your final bridge is crafted and fitted, supported by our own laboratory. Ongoing reviews happen at your local clinic so your new smile is cared for close to home — for the long term, not just the first few weeks.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can I really get teeth in a single day?",
    a: "In many cases, yes. When your clinical plan allows it, implants are placed and a fixed set of teeth fitted on the same day, so you don't leave without teeth. Your exact pathway is confirmed after your 3D scan.",
  },
  {
    q: "Do I need a bone graft?",
    a: "Most patients don't. Advanced full-arch techniques and detailed 3D planning let us work around the bone you already have — which is often why people told 'no' elsewhere turn out to be suitable here.",
  },
  {
    q: "Is the treatment painful?",
    a: "Surgery is carried out under local anaesthetic, and comfort options including sedation are discussed during planning. Most patients are surprised by how manageable the experience is.",
  },
  {
    q: "How long do the implants last?",
    a: "With good aftercare and regular reviews at your local clinic, full arch implants are designed as a long-term, fixed solution — not a temporary fix like a denture.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="soft" className="border-b border-line">
        <Container className="text-center">
          <Kicker center>How it works</Kicker>
          <h1>
            A <span className="text-teal">fixed</span> set of teeth — often in a day.
          </h1>
          <p className="mx-auto max-w-[720px] text-[1.18rem] text-muted">
            Full arch dental implants, done properly. A full set of fixed teeth secured onto as few
            as four implants per jaw — no nightly removal, no bone graft in most cases, a smile that
            looks, feels and works like natural teeth.
          </p>
        </Container>
      </Section>

      {/* The journey — shared steps */}
      <Section>
        <Container>
          <div className="center text-center">
            <Kicker center>The journey</Kicker>
            <h2>Four simple steps to your new smile</h2>
            <p className="mx-auto mb-11 max-w-[640px] text-[1.18rem] text-muted">
              From first scan to lifelong aftercare — here&apos;s exactly what to expect.
            </p>
          </div>
          <StepsHowItWorks steps={DEFAULT_STEPS} />
        </Container>
      </Section>

      {/* Per-step detail sections */}
      <Section tone="soft">
        <Container>
          <div className="center text-center">
            <Kicker center>In detail</Kicker>
            <h2>Each step, explained</h2>
          </div>
          <div className="mx-auto mt-10 max-w-[820px] space-y-[18px]">
            {STEP_DETAILS.map((s) => (
              <div
                key={s.title}
                className="rounded-card border border-line bg-white p-7 shadow-sm"
              >
                <div className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.1em] text-teal">
                  {s.tag}
                </div>
                <h3 className="mb-2">{s.title}</h3>
                <p className="m-0 text-ink2">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Been told no elsewhere */}
      <Section tone="teal">
        <Container className="text-center">
          <Kicker center gold>
            Been told no elsewhere?
          </Kicker>
          <h2>&ldquo;You don&apos;t have enough bone.&rdquo; We hear it every week.</h2>
          <p className="mx-auto max-w-[680px] text-[1.12rem] text-[#ddf0eb]">
            Many patients are turned away or told they need months of bone grafting. With advanced
            full-arch techniques and a detailed 3D scan, a large number of those patients{" "}
            <b className="text-white">are suitable after all</b> — often without grafting, and often
            in a single day.
          </p>
          <ButtonLink href="/am-i-suitable/" variant="gold" size="lg" className="mt-2">
            Check if you qualify
          </ButtonLink>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="center text-center">
            <Kicker center>Questions</Kicker>
            <h2>Common questions about the process</h2>
            <p className="mx-auto mb-11 max-w-[640px] text-[1.18rem] text-muted">
              The things patients ask us most before they book.
            </p>
          </div>
          <Faq items={FAQ_ITEMS} />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
