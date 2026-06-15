export type FaqItem = { q: string; a: string };

// Accessible accordion built on native details/summary. Thin dividers, gold marker.
// Pair with faqSchema() on the page to emit FAQPage structured data.
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.15rem] font-semibold uppercase tracking-tight text-text">
              {item.q}
            </span>
            <span
              aria-hidden
              className="mt-1 shrink-0 font-mono text-gold transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-[1.02rem] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
