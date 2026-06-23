import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { GHLEmbed } from "@/components/booking/GHLEmbed";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = pageMeta({
  title: "Contact Us — Fixed Teeth Solutions",
  description:
    "Get in touch with Fixed Teeth Solutions. Book a free consultation and 3D scan or ask us anything — our patient coordinators reply fast, 8am–8pm.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <Container>
          <Kicker center>Get in touch</Kicker>
          <h1>Get in touch — we&apos;ll call you back within 60 minutes</h1>
          <p className="mx-auto mt-[18px] max-w-[680px] text-[1.18rem] text-ink2">
            Book a free consultation and 3D scan, or ask us anything. Our patient coordinators reply
            fast, 8am–8pm.
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

      {/* Office info + contact form */}
      <Section tone="soft">
        <Container>
          <div className="grid grid-cols-1 gap-[46px] md:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-7 shadow-sm">
              <Kicker>Speak to our team</Kicker>
              <h2>Speak to our team</h2>
              <p className="text-muted">
                Call us, request a callback or send a message — whichever suits you. There&apos;s
                never any pressure.
              </p>
              <p className="text-[1.3rem]">
                <strong>
                  📞{" "}
                  <a className="text-teal" href={`tel:${CONFIG.phoneHref}`}>
                    {CONFIG.phone}
                  </a>
                </strong>
              </p>
              <p>
                <a className="text-teal" href={`mailto:${CONFIG.email}`}>
                  {CONFIG.email}
                </a>
              </p>
              <h3 className="mt-6">Opening hours</h3>
              <p className="mb-0 text-muted">
                Monday–Friday: 8am–8pm
                <br />
                Saturday: 9am–5pm
                <br />
                Sunday: enquiries answered next working day
              </p>
              <div className="mt-[22px] flex flex-wrap gap-[14px]">
                <BookButton variant="gold">Book free consultation</BookButton>
                <ButtonLink href="/clinics/" variant="ghost">
                  Find a clinic
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-card border border-line bg-white p-7 shadow-sm">
              <h3>Request a free assessment</h3>
              <GHLEmbed title="Contact us" height={600} />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
