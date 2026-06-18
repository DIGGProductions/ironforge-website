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
          <div className="mt-6 flex items-center gap-3">
            {SITE.social?.facebook && (
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Iron Forge on Facebook" className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-muted transition-colors hover:border-gold hover:text-gold-bright">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H7.5v3h2.8v9H14z"/></svg>
              </a>
            )}
            {SITE.social?.youtube && (
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Iron Forge on YouTube" className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-muted transition-colors hover:border-gold hover:text-gold-bright">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58A3 3 0 0 0 23.5 17.8 31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
              </a>
            )}
            {SITE.social?.instagram && (
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Iron Forge on Instagram" className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-muted transition-colors hover:border-gold hover:text-gold-bright">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" /></svg>
              </a>
            )}
            {SITE.social?.x && (
              <a href={SITE.social.x} target="_blank" rel="noopener noreferrer" aria-label="Iron Forge on X" className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-muted transition-colors hover:border-gold hover:text-gold-bright">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            )}
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
