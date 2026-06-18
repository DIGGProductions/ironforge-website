import Link from "next/link";
import PageHero from "./PageHero";
import Section from "./Section";
import Eyebrow from "./Eyebrow";
import CtaBand from "./CtaBand";
import JsonLd from "./JsonLd";
import { getService } from "@/content/services";
import { SITE } from "@/content/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import type { Audience } from "@/content/audiences";

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function AudienceLanding({ data }: { data: Audience }) {
  const services = data.relevantServices
    .map(getService)
    .filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];
  const url = `${SITE.url}/${data.slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: data.name, href: `/${data.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        sub={data.heroSub}
        crumbs={crumbs}
        ctaHref="/contact#book"
        ctaLabel="Request a quote"
        bgImage={data.heroImage}
        bgAlt={`Iron Forge serving ${data.name.toLowerCase()} in Sedalia, Colorado`}
      />

      <section className="zone-light border-t border-line py-[clamp(48px,7vw,88px)]">
        <div className="container max-w-3xl">
          <Eyebrow>For {data.name.toLowerCase()}</Eyebrow>
          <div className="mt-5 space-y-4 text-[1.07rem] leading-relaxed text-muted">
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <Section bg="steel" eyebrow="What we keep running" title={data.needsTitle}>
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
          {data.needs.map((n) => (
            <div key={n.label} className="flex gap-3 border-t border-line pt-5">
              <Tick />
              <div>
                <h3 className="font-display text-[1.08rem] font-semibold uppercase tracking-tight text-text">
                  {n.label}
                </h3>
                <p className="mt-1.5 text-[0.97rem] leading-relaxed text-muted">{n.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="black" eyebrow="Where to start" title="Services these trucks need most">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/dot-inspection" className="group rounded-card border border-gold-deep/60 bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">Start here</div>
            <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">DOT Inspections</h3>
          </Link>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-card border border-line bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep">{s.kicker}</div>
              <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">{s.nav}</h3>
            </Link>
          ))}
          <Link href="/fleet" className="group rounded-card border border-line bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep">For fleets</div>
            <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">Fleet Services</h3>
          </Link>
        </div>
        <p className="mt-8 max-w-3xl text-[1.05rem] leading-relaxed text-muted">{data.closing}</p>
      </Section>

      {data.testimonial && (
        <section className="zone-light pb-[clamp(40px,6vw,72px)]">
          <div className="container">
            <figure className="mx-auto max-w-3xl rounded-card border border-line bg-steel-800 p-7 md:p-9">
              <div aria-hidden className="font-display text-4xl leading-none text-gold-deep">&ldquo;</div>
              <blockquote className="mt-1 text-[1.1rem] leading-relaxed text-text/90">{data.testimonial.quote}</blockquote>
              <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                {data.testimonial.name}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <CtaBand
        heading={`Keep your ${data.name.toLowerCase()} trucks working.`}
        sub="Request a quote or call the shop. Inspection and repair under one roof."
        bookHref="/contact#book"
        bookLabel="Request a quote"
      />

      <JsonLd
        data={[
          serviceSchema({ name: data.title, description: data.metaDescription, url }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
