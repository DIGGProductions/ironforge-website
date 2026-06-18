import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceCard, { type ServiceCardData } from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";
import { PHOTOS, SERVICE_PHOTOS } from "@/content/photos";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Commercial Truck & Trailer Services | Iron Forge, Sedalia CO" },
  description:
    "Full medium-duty truck and trailer repair plus in-shop DOT inspections in Sedalia, CO. Brakes, tires, lighting, suspension, emissions, engine, maintenance, and snow plows.",
  alternates: { canonical: "/services" },
};

const dotCard: ServiceCardData = {
  href: "/dot-inspection",
  kicker: "Hero service",
  title: "DOT Inspections",
  blurb:
    "State annual safety inspections for medium-duty trucks and trailers. If it fails, we fix it here and get you road-legal.",
  photoDescription: "Inspector with clipboard working under a truck",
  src: PHOTOS.dot,
  featured: true,
};

const cards: ServiceCardData[] = SERVICES.map((s) => ({
  href: `/services/${s.slug}`,
  kicker: s.kicker,
  title: s.nav,
  blurb: s.cardBlurb,
  photoDescription: s.photoDescription,
  src: SERVICE_PHOTOS[s.slug],
}));

export default function ServicesHub() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Everything under one roof"
        title="Commercial truck and trailer services"
        sub="We keep medium-duty trucks and trailers legal and working. Inspection and repair in one shop, so a flagged truck does not sit waiting on a second vendor."
        crumbs={crumbs}
      />

      <Section bg="black" eyebrow="What we keep running" title="Pick a service">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard data={dotCard} />
          {cards.map((c) => (
            <ServiceCard key={c.href} data={c} />
          ))}
        </div>
        <div className="mt-9 rounded-card border border-line bg-steel-800 p-6 md:p-7">
          <h3 className="font-display text-h3 font-bold uppercase tracking-tight text-text">
            Trailer parts and towing accessories
          </h3>
          <p className="mt-2 max-w-3xl text-[1.0rem] leading-relaxed text-muted">
            We also stock parts and accessories for trailers. Hitches, wiring, lights, and the small
            stuff that keeps a trailer legal and working. Ask when you come in, or call the shop.
          </p>
        </div>
      </Section>

      <CtaBand />

      <JsonLd
        data={breadcrumbSchema(
          crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))
        )}
      />
    </>
  );
}
