import Link from "next/link";
import Button from "@/components/Button";
import { SITE, BOOK_HREF, BOOK_LABEL } from "@/content/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="scanlines relative overflow-hidden">
      <div className="container flex min-h-[60vh] flex-col items-start justify-center py-24">
        <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-gold-deep">
          404 · Off the map
        </span>
        <h1 className="mt-4 font-display text-h1 font-extrabold uppercase text-text">
          This page took a <span className="metal-text">wrong turn.</span>
        </h1>
        <p className="mt-5 max-w-xl text-[1.05rem] text-muted">
          The page you are looking for is not here. Let us get you back to the shop. You can book a
          DOT inspection, browse what we service, or call us at{" "}
          <a href={SITE.phoneHref} className="font-semibold text-gold hover:text-gold-bright">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <Button href={BOOK_HREF}>{BOOK_LABEL}</Button>
          <Button href="/" variant="ghost">
            Back to home
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
          <Link href="/dot-inspection" className="hover:text-gold-bright">DOT Inspections</Link>
          <Link href="/services" className="hover:text-gold-bright">Services</Link>
          <Link href="/fleet" className="hover:text-gold-bright">Fleet</Link>
          <Link href="/contact" className="hover:text-gold-bright">Contact</Link>
        </div>
      </div>
    </section>
  );
}
