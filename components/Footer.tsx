import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { SITE, FOOTER_NAV, BOOK_LABEL, BOOK_HREF } from "@/content/site";

const columns = [FOOTER_NAV.services, FOOTER_NAV.company, FOOTER_NAV.resources];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold-deep bg-steel-900">
      <div className="container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
        {/* NAP block. Identical on every page. */}
        <div>
          <Logo height={38} />
          <address className="mt-5 not-italic">
            <p className="font-display text-[1.05rem] font-semibold uppercase tracking-wide text-text">
              {SITE.address.street}
            </p>
            <p className="text-muted">
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-3 inline-block font-display text-[1.4rem] font-bold tracking-wide text-gold transition-colors hover:text-gold-bright"
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {SITE.hours}
            </p>
          </address>
          <div className="mt-6">
            <Button href={BOOK_HREF}>{BOOK_LABEL}</Button>
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-deep">
              {col.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.96rem] text-muted transition-colors hover:text-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col gap-2 py-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Sedalia, Colorado.
          </p>
          <p className="font-mono uppercase tracking-[0.12em]">
            Medium-duty truck &amp; trailer repair · DOT inspections
          </p>
        </div>
      </div>
    </footer>
  );
}
