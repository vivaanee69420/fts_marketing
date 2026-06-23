import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Patient Reviews — Fixed Teeth Solutions",
  description:
    "Real patients, real smiles. Read what people say about full arch dental implants at Fixed Teeth Solutions and watch their stories.",
  path: "/reviews/",
});

// PLACEHOLDER: ported from reviews.html, which repeated three text testimonials twice.
const REVIEWS = [
  {
    quote:
      "I can eat an apple again. After years of soft food and embarrassment, I left with a fixed smile in a day. Life-changing.",
    clinic: "Ashford",
  },
  {
    quote:
      "I'd hidden my smile for years. The team were honest, gentle and never pushy. I only wish I'd done it sooner.",
    clinic: "Rochester",
  },
  {
    quote:
      "Two other dentists told me I didn't have enough bone. FTS scanned me and treated me without grafting.",
    clinic: "Barnet",
  },
];

const VIDEOS = [
  "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a52ff610e9ace507ba65f.mp4",
  "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a51e4610e9ace507b8ab7.mp4",
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>About</Kicker>
          <h1>Real patients. Real smiles. Real confidence.</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            With thousands of implants placed, the reviews speak for themselves. Here&apos;s what our
            patients say.
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

      {/* Rating + text reviews */}
      <Section tone="soft">
        <Container>
          <div className="text-center">
            <h2 className="mb-[6px] text-gold">★★★★★</h2>
            <p className="text-[1.18rem] text-ink2">Rated excellent by patients across our clinics</p>
          </div>
          <div className="mt-11 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-card border border-line bg-white p-7 shadow-sm">
                <div className="mb-[10px] text-[1.1rem] text-gold">★★★★★</div>
                <p className="text-muted">&ldquo;{r.quote}&rdquo;</p>
                <h4 className="mb-0">Patient</h4>
                <p className="mb-0 text-muted">{r.clinic}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Video patient stories */}
      <Section>
        <Container>
          <div className="text-center">
            <Kicker center>Patient stories</Kicker>
            <h2>Hear it from them</h2>
            <p className="text-[1.18rem] text-ink2">
              Real patients, real results. Hear their stories in their own words.
            </p>
          </div>
          <div className="mx-auto mt-11 grid max-w-[900px] grid-cols-1 gap-[22px] sm:grid-cols-2">
            {VIDEOS.map((src) => (
              <div
                key={src}
                className="relative aspect-video overflow-hidden rounded-[14px] bg-black shadow-card"
              >
                <video
                  src={src}
                  controls
                  muted
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
