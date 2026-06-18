"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { NAV, SITE, BOOK_LABEL, BOOK_HREF } from "@/content/site";
import { SERVICES } from "@/content/services";

const SERVICES_MENU = [
  { label: "DOT Inspections", href: "/dot-inspection", kicker: "Annual safety inspection" },
  ...SERVICES.map((s) => ({ label: s.nav, href: `/services/${s.slug}`, kicker: s.kicker })),
  { label: "All Services", href: "/services", kicker: "See everything we do" },
];

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function ServicesDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/services"
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-gold-bright group-hover:text-gold-bright"
      >
        Services
        <Chevron className="transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="w-[540px] overflow-hidden rounded-card border border-line bg-[rgba(18,21,25,0.98)] p-2.5 shadow-plate backdrop-blur">
          <span className="absolute inset-x-0 top-0 h-[3px] bg-metal" />
          <div className="grid grid-cols-2 gap-1">
            {SERVICES_MENU.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group/item flex flex-col rounded-[4px] px-3 py-2.5 transition-colors hover:bg-steel-700"
              >
                <span className="font-display text-[14px] font-bold uppercase tracking-tight text-text transition-colors group-hover/item:text-gold-bright">
                  {link.label}
                </span>
                <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-gold-deep">
                  {link.kicker}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(13,15,18,0.86)] backdrop-blur-[10px]">
      <div className="container flex h-[72px] items-center gap-7">
        <Link href="/" aria-label="Iron Forge home" className="shrink-0">
          <Logo priority />
        </Link>

        <nav aria-label="Primary" className="ml-2 hidden items-center gap-[26px] lg:flex">
          {NAV.map((item) =>
            item.href === "/services" ? (
              <ServicesDropdown key={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-gold-bright"
              >
                {item.label}
              </Link>
            )
          )}
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
            {NAV.map((item) =>
              item.href === "/services" ? (
                <div key={item.href} className="border-b border-line/60">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
                  >
                    Services
                    <Chevron className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pb-3">
                      {SERVICES_MENU.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 pl-4 font-mono text-[12px] uppercase tracking-[0.08em] text-muted/90 hover:text-gold-bright"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
                >
                  {item.label}
                </Link>
              )
            )}
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
            <Link
              href="/contractors"
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
            >
              Contractors
            </Link>
            <Link
              href="/landscaping"
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-muted hover:text-gold-bright"
            >
              Landscaping
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
