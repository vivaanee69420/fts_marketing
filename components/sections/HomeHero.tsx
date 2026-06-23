import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { CdnImage } from "@/components/ui/CdnImage";

const HERO_IMG =
  "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a605d5ff04dbbc3b1d8c3.png";

const STATS = [
  { n: "1,000+", l: "implants placed every year" },
  { n: "5", l: "clinics across Kent & London" },
  { n: "60 min", l: "callback promise" },
];

export function HomeHero() {
  return (
    <section className="hero-wash relative overflow-hidden py-[70px] pb-[60px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-[54px] md:grid-cols-[1.05fr_0.95fr] md:gap-[32px]">
          <div>
            <div className="mb-[10px] font-serif text-[1.25rem] italic text-gold-d">
              Eat. Smile. Live. Again.
            </div>
            <h1>
              A <span className="text-teal">fixed</span> set of teeth — often in a day.
            </h1>
            <p className="my-[18px] mb-[26px] max-w-[540px] text-[1.22rem] text-ink2">
              We&apos;re the UK&apos;s full arch dental implant specialists. One procedure replaces a
              full jaw of missing, loose or failing teeth with a fixed, natural-looking smile — from{" "}
              <b>£7,997 per arch</b>, with finance available.
            </p>
            <div className="flex flex-wrap gap-[14px]">
              <ButtonLink href="/am-i-suitable/" variant="gold" size="lg">
                Take the 60-second suitability test
              </ButtonLink>
              <BookButton variant="ghost" size="lg">
                Book a free consultation
              </BookButton>
            </div>
            <div className="mt-[30px] flex flex-wrap gap-[22px] border-t border-line pt-6">
              {STATS.map((s) => (
                <div key={s.l} className="text-[0.86rem] font-semibold text-muted">
                  <b className="block font-serif text-[1.45rem] font-semibold text-teal">{s.n}</b>
                  {s.l}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="ph min-h-[430px]">
              <CdnImage
                src={HERO_IMG}
                alt="Real fixed-teeth patient with a confident, natural smile"
                priority
                sizes="(max-width: 940px) 100vw, 45vw"
              />
              <div className="relative z-[2] bg-gradient-to-t from-[rgba(8,40,36,0.6)] to-transparent px-5 py-[18px] font-serif text-[1.05rem] font-medium">
                Real fixed-teeth patients — happy, confident, eating normally again.
              </div>
            </div>
            <div className="absolute -bottom-[18px] -left-[18px] z-[5] hidden items-center gap-3 rounded-[14px] bg-white px-[18px] py-[14px] shadow-lg sm:flex">
              <div className="font-serif text-[1.7rem] leading-none text-teal">★★★★★</div>
              <div className="text-[0.78rem] font-semibold leading-[1.2] text-muted">
                Rated excellent by
                <br />
                patients across our clinics
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
