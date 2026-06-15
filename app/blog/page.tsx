import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { POSTS, formatDate } from "@/content/posts";
import { SITE } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "DOT & Fleet Resources | Iron Forge Commercial Repair" },
  description:
    "Plain-spoken guides on DOT inspections, out-of-service criteria, fleet compliance, winter prep, and more, from the team at Iron Forge in Sedalia, CO.",
  alternates: { canonical: "/blog" },
};

export default function BlogHub() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <>
      <PageHero
        eyebrow="DOT & fleet resources"
        title="Straight answers on keeping trucks legal"
        sub="Guides on DOT inspections, what fails them, fleet compliance, and seasonal prep. Written by the shop that does the work."
        crumbs={crumbs}
        showCtas={false}
      />

      <Section bg="black">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
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
              <h2 className="mt-3 font-display text-[1.25rem] font-bold uppercase leading-tight tracking-tight text-text group-hover:text-gold-bright">
                {p.meta.title}
              </h2>
              <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-muted">{p.meta.description}</p>
              <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-gold">Read &rarr;</span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />

      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` })))}
      />
    </>
  );
}
