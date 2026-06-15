"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { NAV, SITE, BOOK_LABEL, BOOK_HREF } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(13,15,18,0.86)] backdrop-blur-[10px]">
      <div className="container flex h-[72px] items-center gap-7">
        <Link href="/" aria-label="Iron Forge home" className="shrink-0">
          <Logo priority />
        </Link>

        <nav aria-label="Primary" className="ml-2 hidden items-center gap-[26px] lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-gold-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <a href={SITE.phoneHref} className="hidden flex-col text-right leading-[1.1] sm:flex">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
              Call the shop
            </span>
            <span className="font-display text-[19px] font-bold tracking-[0.02em] text-text">
              {SITE.phoneDisplay}
            </span>
          </a>
          <Button href={BOOK_HREF} className="hidden px-[18px] py-[10px] text-[13.5px] sm:inline-flex">
            {BOOK_LABEL}
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-btn border border-line text-text lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-forge-black lg:hidden">
          <nav aria-label="Mobile" className="container flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/vehicle-scale"
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
            >
              Vehicle Scale
            </Link>
            <Link
              href="/service-area"
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
            >
              Service Area
            </Link>
            <div className="flex items-center justify-between gap-4 pt-4">
              <a href={SITE.phoneHref} className="font-display text-[18px] font-bold text-text">
                {SITE.phoneDisplay}
              </a>
              <Button href={BOOK_HREF} onClick={() => setOpen(false)}>
                {BOOK_LABEL}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
