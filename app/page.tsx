import Link from "next/link";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import SpecPlate from "@/components/SpecPlate";
import ProofBar from "@/components/ProofBar";
import Section from "@/components/Section";
import ServiceCard, { type ServiceCardData } from "@/components/ServiceCard";
import PhotoSlot from "@/components/PhotoSlot";
import CtaBand from "@/components/CtaBand";
import { SITE, BOOK_LABEL, BOOK_HREF } from "@/content/site";

const heroBg = {
  background:
    "radial-gradient(900px 420px at 12% -10%, rgba(212,162,78,.16), transparent 60%), radial-gradient(700px 500px at 100% 120%, rgba(156,107,46,.10), transparent 55%), linear-gradient(180deg, #16191E, #0D0F12)",
};

const previewCards: ServiceCardData[] = [
  {
    href: "/dot-inspection",
    kicker: "Hero service",
    title: "DOT Inspections",
    blurb:
      "State annual safety inspections for medium-duty trucks and trailers. If it fails, we fix it here and get you road-legal.",
    photoDescription: "Inspector with clipboard working under a truck",
    featured: true,
  },
  {
    href: "/services/brake-repair",
    kicker: "No. 1 fail point",
    title: "Brake Repair",
    blurb:
      "The top reason trucks fail inspection. Chambers, slack adjusters, shoes, and linings done right.",
    photoDescription: "Brake drum and chamber close-up, hands working",
  },
  {
    href: "/services/tires",
    kicker: "Sales + service",
    title: "Tires",
    blurb:
      "Commercial truck and trailer tire sales and replacement, in and out with minimal downtime.",
    photoDescription: "Commercial tire being mounted in the bay",
  },
  {
    href: "/services/lighting-electrical",
    kicker: "No. 2 fail point",
    title: "Lighting & Electrical",
    blurb:
      "Burned-out lamps and bad wiring are a top inspection violation. We trace, repair, and get every light legal.",
    photoDescription: "Tech tracing a trailer wiring harness or truck lights",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="scanlines relative overflow-hidden border-b border-gold-deep" style={heroBg}>
        <div className="container relative grid items-center gap-12 py-[clamp(56px,9vw,92px)] lg:grid-cols-[1.25fr_.85fr] lg:gap-14">
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
                Maintenance · <strong className="font-semibold text-gold-bright">Boss &amp; SnowEx plows</strong>
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

        {/* Hero photo slot (background image goes here in Phase 8). */}
        <div className="container relative -mt-2 pb-6">
          <span className="inline-flex items-center gap-2 rounded-[3px] border border-line bg-steel-900/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 8h3.5l1.5-2h8l1.5 2H21a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V9.5A1.5 1.5 0 0 1 3 8z" />
              <circle cx="12" cy="13.5" r="3.5" />
            </svg>
            Hero photo: medium-duty truck up on the lift, mid-service
          </span>
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
      <section className="border-t border-line bg-steel-900 py-[clamp(56px,8vw,100px)]">
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
            ratio="aspect-[4/3]"
            description="Will and the team in front of the shop, or the yard lined with Boss plows"
          />
        </div>
      </section>

      {/* FLEET + COVERAGE */}
      <Section eyebrow="Two ways we help" title="Whole fleets and the whole corridor">
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/fleet"
            className="group flex flex-col justify-between rounded-card border border-line bg-steel-800 p-7 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-deep">
                For fleet managers
              </div>
              <h3 className="mt-2 font-display text-h3 font-bold uppercase text-text">Fleet services</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                One accountable shop for inspection and repair across your whole fleet. Scheduled
                maintenance and tracked due dates, so no truck lapses out of compliance.
              </p>
            </div>
            <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-gold group-hover:text-gold-bright">
              Request a fleet quote →
            </span>
          </Link>

          <Link
            href="/service-area"
            className="group flex flex-col justify-between rounded-card border border-line bg-steel-800 p-7 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-gold-deep"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-deep">
                Castle Rock to the Springs
              </div>
              <h3 className="mt-2 font-display text-h3 font-bold uppercase text-text">Service area</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                We serve the I-25 corridor and the towns around Sedalia, from Castle Rock and Parker
                to Monument and Lone Tree. Easy on, easy off, easy back to work.
              </p>
            </div>
            <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-gold group-hover:text-gold-bright">
              See the towns we cover →
            </span>
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
