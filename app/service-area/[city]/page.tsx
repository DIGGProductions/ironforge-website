import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { AREA_SLUGS, getArea } from "@/content/areas";
import { getService } from "@/content/services";
import { SITE } from "@/content/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREA_SLUGS.map((city) => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const a = getArea(params.city);
  if (!a) return {};
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDescription,
    alternates: { canonical: `/service-area/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url: `${SITE.url}/service-area/${a.slug}` },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const a = getArea(params.city);
  if (!a) notFound();

  const services = a.relevantServices.map(getService).filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Area", href: "/service-area" },
    { name: a.name, href: `/service-area/${a.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Service area · ${a.name}`}
        title={`Commercial truck repair and DOT inspections in ${a.name}`}
        sub={`Inspection and repair under one roof, a short drive from ${a.name}.`}
        crumbs={crumbs}
      />

      <section className="bg-forge-black py-[clamp(48px,7vw,88px)]">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow>Serving {a.name}</Eyebrow>
            <div className="mt-5 space-y-4 text-[1.07rem] leading-relaxed text-muted">
              {a.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-card border border-line bg-steel-800 p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-deep">Getting here</h2>
            <p className="mt-3 text-[1.0rem] leading-relaxed text-text/90">{a.drive}</p>
            <h2 className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-deep">Who runs here</h2>
            <p className="mt-3 text-[1.0rem] leading-relaxed text-muted">{a.fleetMix}</p>
            <p className="mt-6 border-t border-line pt-5 text-[1.0rem] leading-relaxed text-muted">{a.localNote}</p>
          </div>
        </div>
      </section>

      <Section bg="steel" eyebrow="Most asked for" title={`What ${a.name} trucks come in for`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/dot-inspection" className="group rounded-card border border-gold-deep/60 bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">Start here</div>
            <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">DOT Inspections</h3>
          </Link>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-card border border-line bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep">{s.kicker}</div>
              <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">{s.nav}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services" variant="ghost">See all services</Button>
        </div>
      </Section>

      <CtaBand
        heading={`Bring your ${a.name} truck in.`}
        sub="Book a DOT inspection or call the shop. We inspect and fix it in one stop."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: `Commercial Truck Repair and DOT Inspections in ${a.name}`,
            description: a.metaDescription,
            url: `${SITE.url}/service-area/${a.slug}`,
          }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
