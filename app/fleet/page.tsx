import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import BookingForm from "@/components/BookingForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Fleet Maintenance & DOT Compliance, Douglas County | Iron Forge" },
  description:
    "Fleet DOT compliance and maintenance in Douglas County. One accountable shop for inspection and repair, scheduled PM, and tracked due dates so no truck lapses.",
  alternates: { canonical: "/fleet" },
};

const value = [
  { label: "Compliance across the fleet", text: "We run the annual DOT inspections and keep the whole fleet on the right side of them, not one truck at a time." },
  { label: "Scheduled maintenance", text: "Preventive maintenance on a schedule built around how your trucks run, so wear gets caught before it becomes downtime." },
  { label: "Tracked due dates", text: "We track inspection due dates for your fleet so nothing lapses and no truck gets parked over a missed date." },
  { label: "One accountable shop", text: "Inspection and repair under one roof means one shop that knows your trucks and stands behind the work." },
  { label: "Less downtime", text: "Planned service instead of surprise breakdowns. A truck in for a scheduled PM is a truck that is not stranded on a route." },
  { label: "Records you can use", text: "A record of what was done and what is coming due, so you can plan the week and the budget." },
];

const fleets = [
  "Landscaping",
  "Construction and general contractors",
  "Utilities and water districts",
  "Municipal",
  "Towing",
  "Delivery",
  "Waste",
];

export default function FleetPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Fleet services · Douglas County"
        title="One shop accountable for your whole fleet"
        sub="Inspection, repair, and scheduled maintenance for your fleet, tracked so no truck lapses out of compliance and no truck sits when it should be working."
        crumbs={crumbs}
        ctaHref="#quote"
        ctaLabel="Request a fleet quote"
      />

      <section className="bg-forge-black py-[clamp(48px,7vw,88px)]">
        <div className="container max-w-3xl">
          <Eyebrow>The job of keeping a fleet legal</Eyebrow>
          <div className="mt-5 space-y-4 text-[1.07rem] leading-relaxed text-muted">
            <p>
              Fleet DOT compliance in Douglas County is a moving target. Every truck has its own
              inspection due date, its own wear, and its own way of picking the worst moment to break.
              Miss a date or skip a service and you are not down one truck, you are down the work that
              truck was supposed to do.
            </p>
            <p>
              Iron Forge is built to take that off your plate. One shop runs the inspections, does the
              repairs, and keeps the maintenance on schedule, so you are managing a plan instead of
              chasing problems.
            </p>
          </div>
        </div>
      </section>

      <Section bg="steel" eyebrow="What you get" title="A plan, not a scramble">
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
          {value.map((v) => (
            <div key={v.label} className="border-t border-line pt-5">
              <h3 className="font-display text-[1.08rem] font-semibold uppercase tracking-tight text-text">
                {v.label}
              </h3>
              <p className="mt-1.5 text-[0.97rem] leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="black" eyebrow="Who we keep running" title="Fleets we serve">
        <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted">
          We work with the kinds of fleets that run the Front Range and the I-25 corridor. If your
          trucks earn their keep, we can keep them legal and moving.
        </p>
        <ul className="mt-7 flex flex-wrap gap-3">
          {fleets.map((f) => (
            <li
              key={f}
              className="rounded-[3px] border border-line bg-steel-800 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-text"
            >
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="steel" eyebrow="Start here" title="Request a fleet quote" id="quote">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Tell us about your fleet and we will put together a maintenance and compliance plan that
              fits how you run. We will talk through inspection schedules, preventive maintenance, and
              how we keep your trucks tracked.
            </p>
            <p>
              Prefer to talk it through? Call the shop at{" "}
              <a href={SITE.phoneHref} className="font-semibold text-gold hover:text-gold-bright">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <BookingForm id="quote" kind="fleet" />
        </div>
      </Section>

      <CtaBand
        heading="Put one shop in charge of fleet uptime."
        sub="Request a fleet quote or call the shop. Inspection, repair, and maintenance under one roof."
        bookHref="#quote"
        bookLabel="Request a fleet quote"
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Fleet Maintenance and DOT Compliance",
            description:
              "Fleet DOT compliance, scheduled preventive maintenance, and repair for commercial fleets across Douglas County and the Front Range.",
            url: `${SITE.url}/fleet`,
          }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
