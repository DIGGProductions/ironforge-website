import Button from "./Button";
import { SITE, BOOK_LABEL, BOOK_HREF } from "@/content/site";

// Focused conversion band. Use between major sections and before the footer.
export default function CtaBand({
  heading = "Get your truck inspected and back to work.",
  sub = "Book a DOT inspection or call the shop. If it fails, we fix it here.",
  bookHref = BOOK_HREF,
  bookLabel = BOOK_LABEL,
}: {
  heading?: string;
  sub?: string;
  bookHref?: string;
  bookLabel?: string;
}) {
  return (
    <section className="bg-forge-black py-[clamp(48px,7vw,84px)]">
      <div className="container">
        <div className="relative overflow-hidden rounded-card border border-gold-deep/60 bg-[linear-gradient(160deg,#1c2026,#121519)] px-7 py-12 md:px-14">
          <span className="absolute inset-x-0 top-0 h-[3px] bg-metal" />
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-h2 font-extrabold uppercase leading-[1.02] text-text">
                {heading}
              </h2>
              <p className="mt-4 text-[1.05rem] text-muted">{sub}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={bookHref}>{bookLabel}</Button>
              <Button href={SITE.phoneHref} variant="ghost">
                Call {SITE.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
