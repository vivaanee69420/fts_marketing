import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { Faq } from "@/components/sections/Faq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumb, faqPage, medicalProcedure } from "@/lib/jsonld";
import { TREATMENTS, TREATMENT_LIST } from "@/lib/treatments";

export async function generateStaticParams() {
  return TREATMENT_LIST.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];
  if (!treatment) return {};
  return pageMeta({
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    path: `/treatments/${slug}/`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];
  if (!treatment) notFound();

  const path = `/treatments/${slug}/`;

  return (
    <>
      <JsonLd
        data={[
          medicalProcedure({
            name: treatment.title,
            description: treatment.metaDescription,
            path,
          }),
          faqPage(treatment.faqs),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Treatments", path: "/treatments/" },
            { name: treatment.title, path },
          ]),
        ]}
      />

      {/* Hero */}
      <Section>
        <Container className="text-center">
          <Kicker center>{treatment.heroKicker}</Kicker>
          <h1>{treatment.title}</h1>
          <p className="mx-auto mb-[26px] max-w-[680px] text-[1.18rem] text-ink2">
            {treatment.heroSub}
          </p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <BookButton variant="gold" size="lg">
              Book free consultation
            </BookButton>
            <ButtonLink href="/am-i-suitable/" variant="ghost" size="lg">
              Am I suitable?
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Overview + What's included */}
      <Section tone="soft">
        <Container>
          <div className="grid grid-cols-1 items-center gap-[46px] md:grid-cols-2">
            <div>
              <Kicker>Overview</Kicker>
              {treatment.overview.map((para) => (
                <p key={para} className="text-muted">
                  {para}
                </p>
              ))}
            </div>
            <div className="rounded-card bg-soft p-7">
              <h3>What&rsquo;s included</h3>
              <ul className="mt-[14px] list-none p-0">
                {treatment.included.map((item) => (
                  <li
                    key={item}
                    className="relative border-b border-soft py-2 pl-7 before:absolute before:left-0 before:font-extrabold before:text-teal before:content-['✓']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <BookButton variant="gold" block className="mt-[18px]">
                Book a free consultation
              </BookButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who this helps */}
      <Section>
        <Container>
          <div className="text-center">
            <Kicker center>Is it right for you?</Kicker>
            <h2>Who this treatment helps</h2>
          </div>
          <div className="mt-[44px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {treatment.whoHelps.map((card) => (
              <div
                key={card.title}
                className="rounded-card border border-line bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-card"
              >
                <h4>{card.title}</h4>
                <p className="mb-0 text-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="soft">
        <Container>
          <div className="text-center">
            <Kicker center>Questions</Kicker>
            <h2>{treatment.title} — answered</h2>
          </div>
          <div className="mt-[44px]">
            <Faq items={treatment.faqs} />
          </div>
        </Container>
      </Section>

      {/* Pricing teaser */}
      <Section>
        <Container className="text-center">
          <Kicker center>Transparent pricing</Kicker>
          <h2>Clear prices. Three levels of smile.</h2>
          <p className="mx-auto mb-7 max-w-[680px] text-[1.18rem] text-muted">
            Unlike most, we publish our prices — from <strong>£7,997 per arch</strong>, with finance
            available. Your exact plan and finance options are confirmed at your free consultation.
          </p>
          <ButtonLink href="/pricing/" variant="gold" size="lg">
            See full pricing →
          </ButtonLink>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
