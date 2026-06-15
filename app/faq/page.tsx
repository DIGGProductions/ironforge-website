import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { SITE_FAQS } from "@/content/faqs";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Frequently Asked Questions | Iron Forge Commercial Repair" },
  description:
    "Answers on DOT inspections, what we service, the one-stop advantage, fleet maintenance, booking, and the certified vehicle scale at Iron Forge in Sedalia, CO.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ];
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered straight"
        sub="The things truck owners and fleet managers ask us most. If yours is not here, call the shop and we will answer it."
        crumbs={crumbs}
        showCtas={false}
      />

      <Section bg="black">
        <div className="max-w-3xl">
          <Faq items={SITE_FAQS} />
        </div>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          faqSchema(SITE_FAQS),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
