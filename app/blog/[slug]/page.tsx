import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { POST_SLUGS, getPost, formatDate } from "@/content/posts";
import { SITE } from "@/content/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const { meta } = post;
  return {
    title: { absolute: `${meta.title} | Iron Forge` },
    description: meta.description,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: { type: "article", title: meta.title, description: meta.description, url: `${SITE.url}/blog/${meta.slug}` },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const { meta, Component } = post;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: meta.title, href: `/blog/${meta.slug}` },
  ];

  return (
    <>
      <article>
        <header className="scanlines relative overflow-hidden border-b border-gold-deep/70 bg-[linear-gradient(180deg,#16191E,#0D0F12)]">
          <div className="container py-[clamp(40px,7vw,72px)]">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                <li><Link href="/" className="hover:text-gold-bright">Home</Link></li>
                <li aria-hidden className="text-gold-deep">/</li>
                <li><Link href="/blog" className="hover:text-gold-bright">Blog</Link></li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
              <span>{meta.category}</span>
              <span aria-hidden className="text-gold-deep">·</span>
              <span className="text-muted">{formatDate(meta.date)}</span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-h1 font-extrabold uppercase leading-[0.98] text-text">
              {meta.title}
            </h1>
          </div>
        </header>

        <div className="zone-light py-[clamp(40px,6vw,72px)]">
          <div className="container">
            <div className="max-w-2xl">
              <Component />
            </div>
            <div className="mt-12 max-w-2xl border-t border-line pt-6">
              <Link href="/blog" className="font-mono text-[12px] uppercase tracking-[0.14em] text-gold hover:text-gold-bright">
                &larr; All resources
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand />

      <JsonLd
        data={[
          articleSchema({ title: meta.title, description: meta.description, url: `${SITE.url}/blog/${meta.slug}`, datePublished: meta.date }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href === "/" ? "" : c.href}` }))),
        ]}
      />
    </>
  );
}
