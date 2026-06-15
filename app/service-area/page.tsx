import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { AREAS } from "@/content/areas";
import { SITE } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Service Area, Castle Rock to Colorado Springs | Iron Forge" },
  description:
    "Iron Forge serves the I-25 corridor from Sedalia, including Castle Rock, Highlands Ranch, Parker, Monument, Larkspur, Franktown, and Lone Tree. DOT inspections and repair.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaHub() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Area", href: "/service-area" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Service area · I-25 corridor"
        title="Castle Rock to the Springs, one shop"
        sub="From our bay in Sedalia, we keep medium-duty trucks and trailers legal and moving up and down the corridor and the towns around it."
        crumbs={crumbs}
      />

      <Section
        bg="black"
        eyebrow="Towns we cover"
        title="Pick your town"
        intro="We are easy on and off the corridor, so a truck from any of these towns can get inspected and repaired without a run into the city."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="group rounded-card border border-line bg-steel-800 p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
            >
              <h2 className="font-display text-h3 font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">
                {a.name}
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{a.fleetMix}</p>
              <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-gold">
                Truck repair &amp; DOT &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />

      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` })))}
      />
    </>
  );
}
