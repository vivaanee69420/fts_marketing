import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { CdnImage } from "@/components/ui/CdnImage";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PainCards } from "@/components/sections/PainCards";
import { StepsHowItWorks } from "@/components/sections/StepsHowItWorks";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { CentresGrid } from "@/components/sections/CentresGrid";
import { BeforeAfterGallery, HOME_BEFORE_AFTER } from "@/components/sections/BeforeAfterGallery";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CONFIG } from "@/lib/config";

const NO_BONE_IMG =
  "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a735c181eb301d4285e12.png";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />

      {/* Is this you? */}
      <Section>
        <Container>
          <div className="center text-center">
            <Kicker center>Is this you?</Kicker>
            <h2>If any of this sounds familiar, we can help</h2>
            <p className="mx-auto mb-11 max-w-[680px] text-[1.18rem] text-muted">
              Full arch implants are for people who are done with the daily compromise of failing
              teeth or dentures.
            </p>
          </div>
          <PainCards />
        </Container>
      </Section>

      {/* The solution / how it works */}
      <Section tone="soft">
        <Container>
          <div className="center text-center">
            <Kicker center>The solution</Kicker>
            <h2>Full arch dental implants, done properly</h2>
            <p className="mx-auto mb-[50px] max-w-[720px] text-[1.18rem] text-muted">
              A full set of fixed teeth secured onto as few as four implants per jaw. No nightly
              removal. No bone graft in most cases. A fixed smile that looks, feels and works like
              natural teeth.
            </p>
          </div>
          <StepsHowItWorks />
          <div className="mt-[42px] text-center">
            <ButtonLink href="/how-it-works/" variant="gold" size="lg">
              See the full process →
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Been told no elsewhere? */}
      <Section tone="teal">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <Kicker gold>Been told no elsewhere?</Kicker>
              <h2>&ldquo;You don&apos;t have enough bone.&rdquo; We hear it every week.</h2>
              <p className="text-[1.12rem] text-[#ddf0eb]">
                Many patients are turned away by other dentists or told they need months of bone
                grafting. With advanced full-arch techniques and a detailed 3D scan, a large number
                of those patients <b className="text-white">are suitable after all</b> — often
                without grafting, and often in a single day.
              </p>
              <p className="text-[#cfe7e1]">
                If you&apos;ve been told you&apos;re not a candidate, it&apos;s worth a second opinion
                with a specialist who does this every day.
              </p>
              <ButtonLink href="/am-i-suitable/" variant="gold" size="lg" className="mt-2">
                Check if you qualify
              </ButtonLink>
            </div>
            <div className="ph min-h-[320px]">
              <CdnImage
                src={NO_BONE_IMG}
                alt="Advanced 3D dental scan used to plan full arch implants"
                sizes="(max-width:940px) 100vw, 45vw"
              />
              <div className="relative z-[2] bg-gradient-to-t from-[rgba(8,40,36,0.6)] to-transparent px-5 py-[18px] font-serif text-[1.05rem] font-medium">
                Advanced 3D imaging lets us plan around the bone you have.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing teaser */}
      <Section>
        <Container>
          <div className="center text-center">
            <Kicker center>Treatment options</Kicker>
            <h2>Three levels of fixed-teeth smile.</h2>
            <p className="mx-auto mb-[26px] max-w-[700px] text-[1.18rem] text-muted">
              <b>Classic</b>, <b>Signature</b> and <b>Elite</b> — three levels of full-arch
              treatment, each available for a single jaw or full mouth, in PMMA, Zirconia or EMAX
              ceramic. Your exact plan and finance options are confirmed at your free consultation.
            </p>
          </div>
          <PricingTiers showPrice={false} />
          <div className="mt-[10px] flex flex-wrap justify-center gap-[14px] pt-6">
            <ButtonLink href="/pricing/" variant="gold" size="lg">
              See full pricing &amp; finance →
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Finance band */}
      <Section tone="ink">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Kicker gold>Spread the cost</Kicker>
              <h2>Your new smile, from £{CONFIG.financeFrom} a month</h2>
              <p className="text-[1.1rem] text-[#cdded9]">
                Most patients spread the cost with finance. We offer 0% options over shorter terms
                and low-rate plans over longer terms, subject to status — worked out for you at your
                consultation.
              </p>
              <BookButton variant="gold" size="lg">
                Discuss finance at consultation
              </BookButton>
            </div>
            <div className="rounded-card border border-white/20 bg-white/10 p-[26px]">
              <p className="mb-[6px] text-[#cdded9]">Representative example</p>
              <div className="font-serif text-[2.4rem] text-white">
                From £{CONFIG.financeFrom} / month
              </div>
              <p className="mt-[10px] text-[0.86rem] text-[#9fb4ae]">
                Representative finance shown for illustration. Actual terms, APR and monthly amount
                are confirmed at consultation and subject to status. FTS works with regulated finance
                providers.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section>
        <Container>
          <div className="center text-center">
            <Kicker center>Real results</Kicker>
            <h2>Smiles we&apos;ve rebuilt</h2>
            <p className="mx-auto mb-11 max-w-[640px] text-[1.18rem] text-muted">
              A preview of real full arch patients — before and after. See the full gallery and
              patient stories on our results page.
            </p>
          </div>
          <BeforeAfterGallery items={HOME_BEFORE_AFTER} />
          <div className="mt-[34px] text-center">
            <ButtonLink href="/results/" variant="gold" size="lg">
              See more results &amp; patient stories →
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Suitability CTA */}
      <Section tone="soft">
        <Container className="text-center">
          <Kicker center>Am I suitable?</Kicker>
          <h2>Find out in 60 seconds</h2>
          <p className="mx-auto mb-[30px] max-w-[620px] text-[1.18rem] text-muted">
            Answer a few quick questions and we&apos;ll tell you if full arch implants could be right
            for you — even if you&apos;ve been told &ldquo;no&rdquo; or &ldquo;not enough bone&rdquo;
            elsewhere. No cost, no obligation, results in under a minute.
          </p>
          <ButtonLink href="/am-i-suitable/" variant="gold" size="lg">
            Take the free suitability test →
          </ButtonLink>
        </Container>
      </Section>

      {/* Centres */}
      <Section tone="soft">
        <Container>
          <div className="center text-center">
            <Kicker center>Find us</Kicker>
            <h2>Five clinics across Kent &amp; London</h2>
            <p className="mx-auto mb-11 max-w-[620px] text-[1.18rem] text-muted">
              Specialist full arch care, close to home. Book at whichever is nearest.
            </p>
          </div>
          <CentresGrid />
          <div className="mt-[34px] text-center">
            <ButtonLink href="/clinics/" variant="ghost" size="lg">
              View all clinics →
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
