import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BeforeAfterGallery, type BAItem } from "@/components/sections/BeforeAfterGallery";
import { VideoTile } from "@/components/sections/VideoTile";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Results — Before & After Full Arch Implants",
  description:
    "Real before-and-after results and patient stories from Fixed Teeth Solutions — smiles rebuilt with full arch dental implants across Kent & London.",
  path: "/results/",
});

const CDN = "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media";

const RESULTS_GALLERY: BAItem[] = [
  {
    img: `${CDN}/6a3a5fdb212eecbcaa6d0249.jpeg`,
    cap: "Upper & lower full arch · eating normally within weeks",
  },
  { img: `${CDN}/6a3a63b8212eecbcaa6d8c39.png`, cap: "From failing teeth to a fixed, natural smile" },
  { img: `${CDN}/6a3a63b8181eb301d4267349.png`, cap: "Denture-wearer · now fixed teeth, no removal" },
  {
    img: `${CDN}/6a3a63b872499097120336fb.png`,
    cap: "Single arch restoration · confident smile restored",
  },
  {
    img: `${CDN}/6a3a62c0212eecbcaa6d73cd.png`,
    cap: '"Told no elsewhere" · suitable with advanced planning',
  },
  {
    img: `${CDN}/6a3a62c0212eecbcaa6d73c7.png`,
    cap: "Full mouth rehabilitation · fixed teeth in a day",
  },
];

const POSTER = `${CDN}/6a3a98b0ae7d476839120e93.jpeg`;
const TESTIMONIALS = [
  { src: `${CDN}/6a3a52ff610e9ace507ba65f.mp4`, label: "A patient's full arch journey, in their own words" },
  { src: `${CDN}/6a3a51e4610e9ace507b8ab7.mp4`, label: "Life after fixed teeth — eating and smiling again" },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="soft" className="border-b border-line">
        <Container className="text-center">
          <Kicker center>Real results</Kicker>
          <h1>
            Smiles we&apos;ve <span className="text-teal">rebuilt</span>
          </h1>
          <p className="mx-auto max-w-[680px] text-[1.18rem] text-muted">
            Before-and-after of real full arch patients, plus their stories in their own words.
          </p>
        </Container>
      </Section>

      {/* Before & after gallery */}
      <Section>
        <Container>
          <div className="center text-center">
            <Kicker center>Before &amp; after</Kicker>
            <h2>From failing teeth to a fixed smile</h2>
            <p className="mx-auto mb-11 max-w-[640px] text-[1.18rem] text-muted">
              Every case is different — these show the kind of transformation full arch implants
              make possible.
            </p>
          </div>
          <BeforeAfterGallery items={RESULTS_GALLERY} />
        </Container>
      </Section>

      {/* Patient story videos */}
      <Section tone="soft">
        <Container>
          <div className="center text-center">
            <Kicker center>Patient stories</Kicker>
            <h2>Hear it from them</h2>
            <p className="mx-auto mb-11 max-w-[620px] text-[1.18rem] text-muted">
              Real patient films — tap play to watch.
            </p>
          </div>
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-[18px] sm:grid-cols-2">
            {TESTIMONIALS.map((v) => (
              <VideoTile key={v.src} src={v.src} poster={POSTER} label={v.label} />
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
