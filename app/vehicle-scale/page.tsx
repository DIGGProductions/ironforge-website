import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import SpecPlate from "@/components/SpecPlate";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { PHOTOS } from "@/content/photos";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Certified Vehicle Scale near Castle Rock | Iron Forge, Sedalia" },
  description:
    "A certified vehicle scale in Sedalia, CO, near Castle Rock. Weigh your truck and check axle weights before you load and roll. Call ahead to confirm availability.",
  alternates: { canonical: "/vehicle-scale" },
};

const whoNeedsIt = [
  { label: "Haulers checking axle weights", text: "Know your axle and gross weights before you hit a checkpoint or a public scale and get a costly surprise." },
  { label: "Agriculture and landscaping", text: "Weigh loads of material, feed, or product when the price or the legal limit depends on the number." },
  { label: "Movers and freight", text: "Confirm a load weight before a long haul instead of guessing." },
  { label: "Anyone who needs a real number", text: "A certified weight you can stand behind, not an estimate." },
];

export default function VehicleScalePage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Vehicle Scale", href: "/vehicle-scale" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Certified vehicle scale"
        title="A certified truck scale on the corridor"
        sub="Weigh your truck and check your axle weights before you roll. Iron Forge has a certified vehicle scale on site in Sedalia, a short drive from Castle Rock."
        crumbs={crumbs}
        ctaHref={SITE.phoneHref}
        ctaLabel={`Call ${SITE.phoneDisplay}`}
        bgImage={PHOTOS.scale}
        bgAlt="The certified vehicle scale at Iron Forge in Sedalia, Colorado"
      />

      <section className="zone-light border-t border-line py-[clamp(48px,7vw,88px)]">
        <div className="container grid items-start gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow>What it is</Eyebrow>
            <div className="mt-5 space-y-4 text-[1.07rem] leading-relaxed text-muted">
              <p>
                A certified vehicle scale near Castle Rock is hard to find, and we have one. It lets you
                put your truck on a scale and get a certified weight, so you know your gross and axle
                weights before you get on the highway.
              </p>
              <p>
                An overweight truck is a fine, a downtime problem, and extra wear all at once. A quick
                stop on the scale tells you where you stand before any of that becomes your problem. Call
                ahead so we can make sure the scale is open when you come by.
              </p>
            </div>
            <div className="mt-7">
              <Button href={SITE.phoneHref} variant="ghost">
                Call {SITE.phoneDisplay} to confirm availability
              </Button>
            </div>
          </div>
          <SpecPlate
            headLeft="Vehicle Scale"
            headRight="Sedalia · CO"
            rows={[
              { label: "Location", value: <>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state}</> },
              { label: "We weigh", value: <>Gross &amp; axle weights</> },
              { label: "Why it matters", value: <>Avoid overweight fines</> },
              { label: "Hours", value: "Call ahead" },
            ]}
          />
        </div>
      </section>

      <Section bg="steel" eyebrow="Who uses it" title="When you need a real weight">
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {whoNeedsIt.map((w) => (
            <div key={w.label} className="border-t border-line pt-5">
              <h3 className="font-display text-[1.08rem] font-semibold uppercase tracking-tight text-text">
                {w.label}
              </h3>
              <p className="mt-1.5 text-[0.97rem] leading-relaxed text-muted">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="black" eyebrow="Find us" title="Where the scale is">
        <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted">
          The scale is at our shop at {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
          {SITE.address.zip}, just off the corridor. Call ahead at{" "}
          <a href={SITE.phoneHref} className="font-semibold text-gold hover:text-gold-bright">
            {SITE.phoneDisplay}
          </a>{" "}
          to confirm the scale is open before you come by.
        </p>
      </Section>

      <CtaBand
        heading="Need a certified weight?"
        sub="Call the shop to confirm the scale is open, then swing by and weigh your truck."
        bookHref={SITE.phoneHref}
        bookLabel={`Call ${SITE.phoneDisplay}`}
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Certified Vehicle Scale",
            description:
              "Certified vehicle scale for weighing commercial trucks and checking axle weights, on site in Sedalia, CO near Castle Rock.",
            url: `${SITE.url}/vehicle-scale`,
          }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
