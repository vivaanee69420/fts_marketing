import { notFound } from "next/navigation";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { CdnImage } from "@/components/ui/CdnImage";
import { Faq } from "@/components/sections/Faq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumb, dentistLocation, faqPage } from "@/lib/jsonld";
import { getLocation } from "@/lib/locations";

/** Shared location-page template. Each /full-arch-solutions-{city}/ route is a
 *  thin page that renders this with its slug (real static folders — Next can't
 *  bind a dynamic param embedded in a folder name). Ported faithfully from the
 *  original static nearby-clinic pages. */
export function LocationTemplate({ slug }: { slug: string }) {
  const loc = getLocation(slug);
  if (!loc) notFound();
  const path = `/full-arch-solutions-${slug}/`;

  return (
    <>
      <JsonLd
        data={[
          dentistLocation({
            name: loc.city,
            city: loc.city,
            region: loc.region,
            address: loc.address,
            geo: loc.geo,
            path,
          }),
          faqPage(loc.faqs),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Clinics", path: "/clinics/" },
            { name: loc.city, path },
          ]),
        ]}
      />

      {/* Hero (phero) */}
      <Section>
        <Container className="text-center">
          <Kicker center>Nearby clinic · {loc.region}</Kicker>
          <p className="mb-2 font-serif text-[1.2rem] italic text-gold-d">{loc.tagline}</p>
          <h1>
            Full arch dental implants in <span className="text-teal">{loc.city}</span>
          </h1>
          <p className="mx-auto mb-[26px] max-w-[680px] text-[1.18rem] text-ink2">{loc.heroSub}</p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <BookButton variant="gold" size="lg">
              Book free consultation
            </BookButton>
            <ButtonLink href="/am-i-suitable/" variant="ghost" size="lg">
              Am I suitable?
            </ButtonLink>
          </div>
          <div className="mx-auto mt-9 grid max-w-[860px] grid-cols-1 gap-[14px] sm:grid-cols-3">
            {loc.heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[13px] border border-line bg-white p-[14px_16px] text-left shadow-sm"
              >
                <b className="block font-serif text-[1.02rem] text-ink">{fact.label}</b>
                <span className="text-[0.84rem] text-muted">{fact.sub}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Clinic photo */}
      <Section className="py-0 pt-[28px]">
        <Container>
          <div className="ph relative h-[320px] overflow-hidden rounded-card shadow-card md:h-[440px]">
            <CdnImage src={loc.photo} alt={loc.photoAlt} sizes="100vw" priority />
          </div>
        </Container>
      </Section>

      {/* Overview + address + map */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center">
              <Kicker>Our {loc.city} location</Kicker>
              <h2>Specialist implant care in {loc.city}</h2>
              {loc.intro.map((para) => (
                <p key={para.slice(0, 32)} className="text-[1.08rem] text-muted">
                  {para}
                </p>
              ))}
              <ul className="m-0 list-none p-0">
                {loc.highlights.map((item) => (
                  <li key={item} className="relative mb-3 pl-[30px] text-ink2">
                    <span
                      aria-hidden
                      className="absolute left-0 top-[3px] flex h-5 w-5 items-center justify-center rounded-full bg-[#eaf2ef] text-[0.72rem] font-bold text-teal"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-[22px] grid gap-[6px] rounded-card border border-line bg-white p-[26px] shadow-sm">
                <h4 className="m-0 font-serif text-[1.12rem] font-bold">
                  {loc.clinicName} — {loc.city}
                </h4>
                <p className="m-0 text-muted">{loc.address}</p>
                <p className="m-0 mt-1">
                  <a href={loc.phoneHref} className="font-bold text-teal">
                    {loc.phone}
                  </a>{" "}
                  &middot;{" "}
                  <a href={loc.whatsappHref} className="text-teal">
                    WhatsApp {loc.whatsappDisplay}
                  </a>
                </p>
                {loc.email ? (
                  <p className="m-0">
                    <a href={`mailto:${loc.email}`} className="text-teal">
                      {loc.email}
                    </a>
                  </p>
                ) : null}
                {loc.hours ? (
                  <p className="m-0 mt-[6px] text-[0.94rem]">
                    <b>Opening hours</b>
                    <br />
                    {loc.hours.map((line, i) => (
                      <span key={line}>
                        {i > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="overflow-hidden rounded-card border border-line shadow-sm">
              <iframe
                title={loc.mapTitle}
                src={loc.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-full min-h-[360px] w-full border-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Getting here (Easy to reach) */}
      <Section tone="soft">
        <Container>
          <div className="center mx-auto mb-9 max-w-[680px] text-center">
            <Kicker center>Getting here</Kicker>
            <h2>Easy to reach in {loc.city}</h2>
            <p className="text-muted">{loc.transportIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {loc.transport.map((item) => (
              <div
                key={item.heading}
                className="rounded-card border border-line bg-white p-[26px] shadow-sm"
              >
                <h4 className="mb-2 font-serif text-[1.12rem] font-bold">{item.heading}</h4>
                <p className="m-0 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Areas served */}
      <Section>
        <Container>
          <Kicker>Areas we serve</Kicker>
          <h2>{loc.areasHeading}</h2>
          <p className="max-w-[720px] text-muted">{loc.areasIntro}</p>
          <div className="mt-[6px] flex flex-wrap gap-[10px]">
            {loc.areasServed.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-white px-4 py-2 text-[0.9rem] font-semibold text-ink2"
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="soft">
        <Container>
          <div className="center text-center">
            <Kicker center>Common questions</Kicker>
            <h2>{loc.city} clinic — your questions answered</h2>
          </div>
          <Faq items={loc.faqs} />
        </Container>
      </Section>

      <FinalCTA
        heading={`Book at our ${loc.city} clinic`}
        body={`Free consultation and 3D scan in ${loc.city}. We'll tell you honestly whether full arch implants are right for you — no pressure, no obligation.`}
      />
    </>
  );
}
