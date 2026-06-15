import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Button from "@/components/Button";
import FlagNote from "@/components/FlagNote";
import JsonLd from "@/components/JsonLd";
import { SERVICE_SLUGS, getService } from "@/content/services";
import { SITE } from "@/content/site";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const url = `${SITE.url}/services/${s.slug}`;
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url },
  };
}

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = s.related.map(getService).filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];
  const url = `${SITE.url}/services/${s.slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: s.nav, href: `/services/${s.slug}` },
  ];

  return (
    <>
      <PageHero eyebrow="Service" title={s.title} sub={s.heroSub} crumbs={crumbs} />

      {/* The problem + photo */}
      <section className="bg-forge-black py-[clamp(48px,7vw,88px)]">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>What you are dealing with</Eyebrow>
            <div className="mt-5 space-y-4 text-[1.07rem] leading-relaxed text-muted">
              {s.problem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {s.confirm && s.confirm.length > 0 && (
              <p className="mt-6 flex flex-wrap gap-2 text-[0.95rem] text-muted">
                {s.confirm.map((c) => (
                  <FlagNote key={c}>{c}</FlagNote>
                ))}
              </p>
            )}
          </div>
          <PhotoSlot ratio="aspect-[4/3]" description={s.photoDescription} />
        </div>
      </section>

      {/* What we service */}
      <Section bg="steel" eyebrow="What we service" title="What we work on" intro={s.serviceIntro}>
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
          {s.whatWeService.map((item) => (
            <div key={item.label} className="flex gap-3 border-t border-line pt-5">
              <Tick />
              <div>
                <h3 className="font-display text-[1.08rem] font-semibold uppercase tracking-tight text-text">
                  {item.label}
                </h3>
                <p className="mt-1.5 text-[0.97rem] leading-relaxed text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why it matters */}
      <Section bg="black" eyebrow="Why it matters" title="DOT pass or fail, and uptime">
        <div className="max-w-3xl space-y-4 text-[1.07rem] leading-relaxed text-muted">
          {s.whyItMatters.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* One-stop angle, links to DOT */}
      <section className="bg-forge-black pb-[clamp(40px,6vw,72px)]">
        <div className="container">
          <div className="relative overflow-hidden rounded-card border border-gold-deep/60 bg-[linear-gradient(160deg,#1c2026,#121519)] p-7 md:p-10">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-metal" />
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-h3 font-bold uppercase text-text">One stop, not two</h2>
                <p className="mt-3 text-[1.02rem] text-muted">
                  We run the DOT inspection and fix what it flags in the same shop. A {s.nav.toLowerCase()} problem
                  we find does not send you to a second vendor. We handle it and you leave road-legal.
                </p>
              </div>
              <Button href="/dot-inspection" className="shrink-0">
                About DOT inspections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <Section bg="steel" eyebrow="What happens" title="When you bring it in">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.process.map((step, i) => (
            <li key={i} className="rounded-card border border-line bg-steel-800 p-6">
              <div className="font-mono text-[12px] font-semibold tracking-[0.18em] text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-[1.05rem] font-bold uppercase tracking-tight text-text">
                {step.step}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section bg="black" eyebrow="Questions" title={`${s.nav} FAQ`}>
        <Faq items={s.faqs} />
      </Section>

      {/* Related */}
      <Section bg="steel" eyebrow="Keep going" title="Related work">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="group rounded-card border border-line bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep">{r.kicker}</div>
              <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">
                {r.nav}
              </h3>
            </Link>
          ))}
          <Link href="/dot-inspection" className="group rounded-card border border-gold-deep/60 bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">Hero service</div>
            <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">DOT Inspections</h3>
          </Link>
          <Link href="/fleet" className="group rounded-card border border-line bg-steel-800 p-5 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep">For fleets</div>
            <h3 className="mt-1.5 font-display text-[1.1rem] font-bold uppercase tracking-tight text-text group-hover:text-gold-bright">Fleet Services</h3>
          </Link>
        </div>
      </Section>

      <CtaBand
        heading={`Need ${s.nav.toLowerCase()} done right?`}
        sub="Book a DOT inspection or call the shop. We inspect and repair under one roof."
      />

      <JsonLd
        data={[
          serviceSchema({ name: s.nav, description: s.metaDescription, url }),
          faqSchema(s.faqs),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
