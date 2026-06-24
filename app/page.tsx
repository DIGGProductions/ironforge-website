import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import SpecPlate from "@/components/SpecPlate";
import ProofBar from "@/components/ProofBar";
import Section from "@/components/Section";
import ServiceCard, { type ServiceCardData } from "@/components/ServiceCard";
import PhotoSlot from "@/components/PhotoSlot";
import CtaBand from "@/components/CtaBand";
import Testimonials from "@/components/Testimonials";
import { SITE, BOOK_HREF } from "@/content/site";
import { PHOTOS, SERVICE_PHOTOS } from "@/content/photos";
import { POSTS, formatDate } from "@/content/posts";

const previewCards: ServiceCardData[] = [
  {
    href: "/dot-inspection",
    kicker: "Hero service",
    title: "DOT Inspections",
    blurb:
      "State annual safety inspections for medium-duty trucks and trailers. If it fails, we fix it here and get you road-legal.",
    photoDescription: "Inspector with clipboard working under a truck",
    src: PHOTOS.dot,
    featured: true,
  },
  {
    href: "/services/brake-repair",
    kicker: "No. 1 fail point",
    title: "Brake Repair",
    blurb:
      "The top reason trucks fail inspection. Chambers, slack adjusters, shoes, and linings done right.",
    photoDescription: "Brake drum and chamber close-up, hands working",
    src: SERVICE_PHOTOS["brake-repair"],
  },
  {
    href: "/services/tires",
    kicker: "Sales + service",
    title: "Tires",
    blurb:
      "Commercial truck and trailer tire sales and replacement, in and out with minimal downtime.",
    photoDescription: "Commercial tire being mounted in the bay",
    src: SERVICE_PHOTOS["tires"],
  },
  {
    href: "/services/lighting-electrical",
    kicker: "No. 2 fail point",
    title: "Lighting & Electrical",
    blurb:
      "Burned-out lamps and bad wiring are a top inspection violation. We trace, repair, and get every light legal.",
    photoDescription: "Tech tracing a trailer wiring harness or truck lights",
    src: SERVICE_PHOTOS["lighting-electrical"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold-deep">
        <Image
          src={PHOTOS.hero}
          alt="A work truck at the Iron Forge shop in Sedalia, Colorado"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,15,18,0.95)_0%,rgba(13,15,18,0.84)_40%,rgba(13,15,18,0.55)_100%)]" />
        <div className="scanlines pointer-events-none absolute inset-0" />
        <div className="container relative grid items-center gap-12 py-[clamp(56px,9vw,96px)] lg:grid-cols-[1.25fr_.85fr] lg:gap-14">
          <div>
            <Reveal delay={1}>
              <Eyebrow>Est. 2012 · Sedalia, CO · I-25 Corridor</Eyebrow>
            </Reveal>
            <Reveal delay={2}>
              <h1 className="mt-5 font-display text-h1 font-extrabold uppercase text-text">
                Get your truck
                <br />
                road-legal in
                <br />
                <span className="metal-text">one stop.</span>
              </h1>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-6 max-w-[34em] text-[1.12rem] text-text/90">
                Iron Forge is the only shop on the I-25 corridor between Castle Rock and Colorado
                Springs that runs your <strong className="font-semibold text-text">DOT inspection</strong>{" "}
                and fixes what it flags, in the same visit. Medium-duty trucks and trailers, family
                owned since 2012.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href={BOOK_HREF}>Book a DOT Inspection</Button>
                <Button href={SITE.phoneHref} variant="ghost">
                  Call {SITE.phoneDisplay}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <p className="mt-8 max-w-[40em] border-t border-line pt-5 font-mono text-[11.5px] leading-[1.9] tracking-wide text-muted">
                Brakes · Tires · Lighting &amp; Electrical · Steering &amp; Suspension · Preventive
                Maintenance
              </p>
            </Reveal>
          </div>

          <Reveal delay={4}>
            <SpecPlate
              rows={[
                { label: "Established", value: "2012" },
                { label: "We service", value: <>Medium-duty trucks<br />&amp; trailers</> },
                { label: "Under one roof", value: <>DOT inspection<br />+ full repair</> },
                { label: "The edge", value: <>Only in-shop inspect<br />&amp; repair, CR to the Springs</> },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* PROOF */}
      <ProofBar />

      {/* SERVICES PREVIEW */}
      <Section
        eyebrow="What we keep running"
        title="Built for working trucks"
        intro="Medium-duty trucks and trailers, kept legal and kept moving. Inspection and repair under one roof, so a flagged truck does not sit waiting on a second shop."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewCards.map((card) => (
            <ServiceCard key={card.href} data={card} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-gold hover:text-gold-bright"
          >
            View all services <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      {/* ABOUT BAND */}
      <section className="zone-light border-t border-line py-[clamp(56px,8vw,100px)]">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Family owned since 2012</Eyebrow>
            <h2 className="mt-4 font-display text-h2 font-extrabold uppercase text-text">
              Will built this shop on doing it right
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              Iron Forge started in 2012 and has spent more than a decade keeping medium-duty trucks
              and trailers on the road for Sedalia and the businesses up and down the I-25 corridor.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              Will Larabee runs it the way a shop should run. Every truck that comes in gets treated
              like it is the one keeping someone&apos;s business moving. You get straight answers,
              careful work, and a team that stands behind it.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-gold hover:text-gold-bright"
            >
              Meet the shop <span aria-hidden>→</span>
            </Link>
          </div>
          <PhotoSlot
            ratio="aspect-[3/2]"
            src={PHOTOS.about}
            alt="The crew in the Iron Forge shop in Sedalia, Colorado"
            description="Will and the team in front of the Iron Forge shop in Sedalia, Colorado"
          />
        </div>
      </section>

      <Testimonials />

      {/* WHO WE SERVE */}
      <Section eyebrow="Who we serve" title="Built around your operation">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { href: "/fleet", kicker: "For fleet managers", title: "Fleet Services", text: "One accountable shop for inspection and repair across your whole fleet, with scheduled maintenance and tracked due dates.", cta: "Request a fleet quote" },
            { href: "/contractors", kicker: "For contractors", title: "Contractors", text: "Work trucks, dump and equipment trailers, and the DOT compliance that keeps the crew on the job.", cta: "Contractor service" },
            { href: "/landscaping", kicker: "For landscapers", title: "Landscaping", text: "Work trucks and trailers kept legal and running through the busy season, with the DOT inspections to match.", cta: "Landscaping service" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col justify-between rounded-card border border-line bg-steel-800 p-7 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-deep">{c.kicker}</div>
                <h3 className="mt-2 font-display text-h3 font-bold uppercase text-text">{c.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{c.text}</p>
              </div>
              <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-gold group-hover:text-gold-bright">
                {c.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/service-area" className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-gold hover:text-gold-bright">
            We cover the I-25 corridor, see your town <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Section>

      {/* LATEST ARTICLES */}
      <Section
        bg="steel"
        eyebrow="From the blog"
        title="DOT and truck resources"
        intro="Plain-spoken guides on inspections, repairs, and keeping a truck legal, written by the shop that does the work."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <Link
              key={p.meta.slug}
              href={`/blog/${p.meta.slug}`}
              className="group flex flex-col rounded-card border border-line bg-steel-800 p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
            >
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep">
                <span>{p.meta.category}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(p.meta.date)}</span>
              </div>
              <h3 className="mt-3 font-display text-[1.15rem] font-bold uppercase leading-tight tracking-tight text-text group-hover:text-gold-bright">
                {p.meta.title}
              </h3>
              <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-muted">{p.meta.description}</p>
              <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-gold">Read &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-gold hover:text-gold-bright"
          >
            Read all articles <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
