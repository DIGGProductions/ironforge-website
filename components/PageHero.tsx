import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Reveal from "./Reveal";
import { SITE, BOOK_HREF, BOOK_LABEL } from "@/content/site";

const heroBg = {
  background:
    "radial-gradient(760px 360px at 8% -20%, rgba(212,162,78,.13), transparent 60%), linear-gradient(180deg, #16191E, #0D0F12)",
};

export type Crumb = { name: string; href: string };

export default function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
  ctaHref = BOOK_HREF,
  ctaLabel = BOOK_LABEL,
  showCtas = true,
  bgImage,
  bgAlt = "",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  crumbs?: Crumb[];
  ctaHref?: string;
  ctaLabel?: string;
  showCtas?: boolean;
  bgImage?: string;
  bgAlt?: string;
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-gold-deep/70"
      style={bgImage ? undefined : heroBg}
    >
      {bgImage && (
        <>
          <Image src={bgImage} alt={bgAlt} fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,15,18,0.95)_0%,rgba(13,15,18,0.82)_48%,rgba(13,15,18,0.62)_100%)]" />
        </>
      )}
      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="container relative py-[clamp(40px,7vw,76px)]">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-gold-deep">/</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="hover:text-gold-bright">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-gold">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal delay={1}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={2}>
          <h1 className="mt-4 max-w-4xl font-display text-h1 font-extrabold uppercase text-text">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={3}>
            <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-muted">{sub}</p>
          </Reveal>
        )}
        {showCtas && (
          <Reveal delay={3}>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button href={ctaHref}>{ctaLabel}</Button>
              <Button href={SITE.phoneHref} variant="ghost">
                Call {SITE.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
