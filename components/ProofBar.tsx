type ProofItem = { label: string; text: string };

const defaultItems: ProofItem[] = [
  {
    label: "One stop",
    text: "We run your DOT inspection and fix what it flags in the same visit, so the truck does not come back twice.",
  },
  {
    label: "The only one",
    text: "The only shop offering in-shop inspection and full medium-duty repair between Castle Rock and Colorado Springs.",
  },
  {
    label: "No downtime",
    text: "A flagged truck never sits waiting on a second shop to make it road-legal. We handle both.",
  },
];

// Full-width proof strip. Three moat points divided by hairlines.
export default function ProofBar({ items = defaultItems }: { items?: ProofItem[] }) {
  return (
    <section className="border-y border-line bg-steel-900">
      <div className="container grid grid-cols-1 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`px-1 py-8 md:px-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
          >
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              {item.label}
            </div>
            <p className="text-[0.99rem] text-text/85">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
