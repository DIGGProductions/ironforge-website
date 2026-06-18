import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Contact & Booking | Iron Forge Commercial Repair, Sedalia CO" },
  description:
    "Book a DOT inspection or repair at Iron Forge in Sedalia, CO. Call 720.312.7095, send a request, or find us at 7144 Reynolds Drive. Open Tuesday to Friday.",
  alternates: { canonical: "/contact" },
};

const mapSrc =
  "https://www.google.com/maps?q=7144+Reynolds+Drive,+Sedalia,+CO+80135&output=embed";

export default function ContactPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact & booking"
        title="Bring us your truck"
        sub="Book a DOT inspection, ask about a repair, or set up fleet service. Call the shop or send a request and we will get you scheduled."
        crumbs={crumbs}
        ctaHref="#book"
      />

      <Section bg="black">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Details */}
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-deep">The shop</h2>
            <address className="mt-4 not-italic">
              <p className="font-display text-[1.3rem] font-bold uppercase tracking-wide text-text">
                {SITE.address.street}
              </p>
              <p className="text-muted">
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-4 inline-block font-display text-[1.7rem] font-bold tracking-wide text-gold hover:text-gold-bright"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-4 text-[0.98rem] text-muted">
                Email:{" "}
                <a href={`mailto:${SITE.email}`} className="font-semibold text-gold hover:text-gold-bright">
                  {SITE.email}
                </a>
              </p>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                {SITE.hours}
              </p>
            </address>

            <div className="mt-8 overflow-hidden rounded-card border border-line">
              <iframe
                title="Map to Iron Forge Commercial Repair, 7144 Reynolds Drive, Sedalia, CO"
                src={mapSrc}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>

          {/* Booking */}
          <BookingForm id="book" kind="inspection" heading="Request a DOT inspection or repair" />
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` })))}
      />
    </>
  );
}
