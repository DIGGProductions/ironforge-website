import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import PhotoSlot from "@/components/PhotoSlot";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { PHOTOS } from "@/content/photos";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "About Iron Forge Commercial Repair, Sedalia CO | Iron Forge" },
  description:
    "Iron Forge Commercial Repair has kept medium-duty trucks and trailers on the road since 2012. Family owned in Sedalia, CO. Straight answers and careful work.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    label: "Do it right",
    text: "We would rather fix it once than see the truck back for the same thing. That means honest diagnosis, careful work, and parts that hold up to the job.",
  },
  {
    label: "Fix what we flag",
    text: "When we inspect a truck and find a problem, we can repair it in the same shop. We do not hand you a list and send you down the road. We handle it.",
  },
  {
    label: "Respect the truck and the work",
    text: "Every truck that comes in is keeping someone's business running. We treat it that way, and we tell you the truth about what it needs and what it does not.",
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];
  return (
    <>
      <PageHero
        eyebrow="About · Family owned since 2012"
        title="Built on doing it right"
        sub="Iron Forge is a family-owned shop in Sedalia that runs DOT inspections and full repair for medium-duty trucks and trailers, all under one roof."
        crumbs={crumbs}
        showCtas={false}
      />

      <section className="zone-light border-t border-line py-[clamp(48px,7vw,88px)]">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-[1.07rem] leading-relaxed text-muted">
            <p>
              Will Larabee started Iron Forge in 2012, and the shop has spent more than a decade keeping
              medium-duty trucks and trailers on the road for Sedalia and the businesses up and down the
              I-25 corridor.
            </p>
            <p>
              The shop exists to close a gap. Out here, you could find someone to inspect your truck or
              someone to repair it, but not both in one place. So a flagged truck would sit, out of
              service, waiting on a second shop. Iron Forge does the inspection and the repair under one
              roof, so that does not happen to you.
            </p>
            <p>
              Will runs it the way a shop should run. You get straight answers, careful work, and a team
              that stands behind what it does. No upsell, no runaround.
            </p>
          </div>
          <PhotoSlot
            ratio="aspect-[3/2]"
            src={PHOTOS.about}
            alt="The crew in the Iron Forge shop in Sedalia, Colorado"
            description="Will and the team in front of the shop, or the yard lined with Boss plows"
          />
        </div>
      </section>

      {/* OWNER FEATURE */}
      <section className="zone-light border-t border-line py-[clamp(48px,7vw,88px)]">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <PhotoSlot
            ratio="aspect-[3/4]"
            src={PHOTOS.will}
            alt="Will Larabee, owner of Iron Forge Commercial Repair"
            description="Will Larabee, owner"
          />
          <div>
            <Eyebrow>The owner</Eyebrow>
            <h2 className="mt-4 font-display text-h2 font-extrabold uppercase text-text">Will Larabee</h2>
            <p className="mt-5 text-[1.07rem] leading-relaxed text-muted">
              Will Larabee has run Iron Forge since 2012, and he still runs it hands-on. He built the
              shop around a skilled team of mechanics and one standard: do the work right, do it fast,
              and stand behind it. Bring a truck in and there is a good chance the man with the gray
              beard is the one who tells you straight what it needs and what it does not.
            </p>
            <p className="mt-4 text-[1.07rem] leading-relaxed text-muted">
              What Will cares about is keeping your equipment working and your downtime short. Every
              truck and trailer that comes through gets treated like it is one of ours, because the
              businesses that depend on them are our neighbors. He keeps the turnaround fast and the
              standards high, and he tells you the truth about the work.
            </p>
            <p className="mt-4 text-[1.07rem] leading-relaxed text-muted">
              That is the difference a family-owned shop makes. You are not a work order. You are the
              business that truck keeps running, and Will and his team run the shop like they know it.
            </p>
          </div>
        </div>
      </section>

      <Section bg="steel" eyebrow="What we stand on" title="How we work">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="border-t border-gold-deep/50 pt-5">
              <h3 className="font-display text-[1.2rem] font-bold uppercase tracking-tight text-text">
                {v.label}
              </h3>
              <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="black" eyebrow="Local roots" title="A Sedalia shop on the corridor">
        <p className="max-w-3xl text-[1.07rem] leading-relaxed text-muted">
          We are at {SITE.address.street} in {SITE.address.city}, right on the corridor between Castle
          Rock and Colorado Springs. The trucks we work on belong to our neighbors, the contractors,
          landscapers, utilities, and fleets that keep this part of Colorado running. Keeping them
          working is the whole job.
        </p>
      </Section>

      <CtaBand />

      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` })))}
      />
    </>
  );
}
