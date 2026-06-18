import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import SpecPlate from "@/components/SpecPlate";
import Faq from "@/components/Faq";
import Button from "@/components/Button";
import BookingForm from "@/components/BookingForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { PHOTOS } from "@/content/photos";
import { DOT_FAQS } from "@/content/faqs";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "DOT Inspections in Castle Rock & Douglas County | Iron Forge" },
  description:
    "DOT annual inspections for commercial trucks and trailers near Castle Rock and across Douglas County. If it fails, we fix it here in one stop. Book your inspection.",
  alternates: { canonical: "/dot-inspection" },
};

const checks = [
  { label: "Brake system", text: "Linings, chambers, push rod stroke, air loss, and ABS. The most common failure category." },
  { label: "Steering", text: "Steering wheel free play, the box, and the linkage that turns the wheels." },
  { label: "Suspension", text: "Springs, hangers, U-bolts, and axle positioning parts." },
  { label: "Frame", text: "Cracks, corrosion, and loose or missing fasteners on the frame and members." },
  { label: "Tires and wheels", text: "Tread depth, sidewall condition, and wheels, rims, and fasteners." },
  { label: "Lighting", text: "Required lamps and reflectors on the truck and trailer, including the connections." },
  { label: "Coupling devices", text: "Fifth wheels, pintle hooks, and the safety devices that keep a trailer attached." },
  { label: "Exhaust and fuel", text: "Leaks and mounting on the exhaust and fuel systems." },
  { label: "Glass and mirrors", text: "Windshield, wipers, mirrors, and the horn." },
];

export default function DotInspectionPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "DOT Inspection", href: "/dot-inspection" },
  ];

  return (
    <>
      <PageHero
        eyebrow="DOT annual inspections · Sedalia, CO"
        title="DOT inspections that fix what they find"
        sub="Iron Forge runs your DOT inspection and repairs what it flags under one roof, so a commercial truck near Castle Rock or anywhere on the corridor does not sit out of service waiting on a second shop."
        crumbs={crumbs}
        ctaHref="#book"
        bgImage={PHOTOS.dotHero}
        bgAlt="Medium-duty trucks at Iron Forge in Sedalia, Colorado"
      />

      {/* What it is + spec echo */}
      <section className="zone-light border-t border-line py-[clamp(48px,7vw,88px)]">
        <div className="container grid items-start gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow>What it is and who needs one</Eyebrow>
            <div className="mt-5 space-y-4 text-[1.07rem] leading-relaxed text-muted">
              <p>
                A DOT inspection near Castle Rock is the state-regulated annual safety inspection that
                commercial trucks and trailers are required to pass. A qualified inspector checks the
                vehicle against federal standards. Pass it and you are certified for the year. Fail it
                and the flagged items have to be fixed before the truck is road-legal again.
              </p>
              <p>
                If your vehicle is registered as commercial and runs for a business, it very likely
                needs a current annual inspection. Newly registered commercial vehicles need their
                first one done correctly and on time. If you are not sure where your truck stands,
                call the shop and we will help you sort it out.
              </p>
            </div>
          </div>
          <SpecPlate
            headLeft="DOT Inspection"
            headRight="Annual"
            stampTop="DOT"
            stampBottom="CO"
            rows={[
              { label: "What it is", value: "State annual safety inspection" },
              { label: "Covers", value: <>Brakes, steering, lights,<br />and more</> },
              { label: "If it fails", value: <>We fix it here,<br />same stop</> },
            ]}
          />
        </div>
      </section>

      {/* What gets checked */}
      <Section
        bg="steel"
        eyebrow="What gets checked"
        title="The inspection, end to end"
        intro="The annual inspection follows the federal standard. These are the systems we go through on every truck and trailer."
      >
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <div key={c.label} className="border-t border-line pt-4">
              <h3 className="font-display text-[1.05rem] font-semibold uppercase tracking-tight text-text">
                {c.label}
              </h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The one-stop advantage */}
      <Section bg="black" eyebrow="The advantage" title="If it fails, we fix it here">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-[1.07rem] leading-relaxed text-muted">
            <p>
              This is the whole point of bringing your truck to Iron Forge. A DOT inspection that finds
              a problem legally requires that problem to be fixed before the truck is road-legal. A
              mobile inspector cannot fix it. A repair-only shop cannot inspect it.
            </p>
            <p>
              We do both. When we flag something, we can repair it in the same visit and certify the
              truck, so it does not sit out of service while you line up a second vendor. That is time
              the truck spends working instead of parked.
            </p>
          </div>
          <div className="rounded-card border border-line bg-steel-800 p-7">
            <h3 className="font-display text-h3 font-bold uppercase text-text">How long it takes</h3>
            <p className="mt-3 text-[1.0rem] leading-relaxed text-muted">
              Plan for the inspection to take part of the day, and call ahead so we can get you
              scheduled. If the truck passes, you are on your way. If it needs work, we will tell you
              what we found and what it takes to fix it before we start, so there are no surprises.
            </p>
            <h3 className="mt-7 font-display text-h3 font-bold uppercase text-text">What to bring</h3>
            <ul className="mt-3 space-y-2 text-[1.0rem] text-muted">
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-[6px] before:w-[6px] before:bg-gold/80">The truck or trailer</li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-[6px] before:w-[6px] before:bg-gold/80">The vehicle registration</li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-[6px] before:w-[6px] before:bg-gold/80">Any prior inspection paperwork</li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-[6px] before:w-[6px] before:bg-gold/80">A heads up on any known issue</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Booking */}
      <Section bg="steel" eyebrow="Book it" title="Request your DOT inspection" id="book">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Send your details and we will confirm a time. Tell us the truck and whether you already
              know it needs work, and we will plan for it. Need it handled today? Call the shop at{" "}
              <a href={SITE.phoneHref} className="font-semibold text-gold hover:text-gold-bright">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
            <p className="text-[0.95rem]">
              Not sure what it will run? Send your details and we will give you a straight quote
              before you come in.
            </p>
          </div>
          <BookingForm id="book" kind="inspection" />
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="black" eyebrow="Questions" title="DOT inspection FAQ">
        <Faq items={DOT_FAQS} />
      </Section>

      <CtaBand
        heading="Book your DOT inspection."
        sub="One stop for the inspection and the repair. Book online or call the shop."
        bookHref="#book"
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "DOT Annual Inspection",
            description:
              "State-regulated annual DOT safety inspection for commercial trucks and trailers, with in-shop repair of any flagged items.",
            url: `${SITE.url}/dot-inspection`,
          }),
          faqSchema(DOT_FAQS),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
