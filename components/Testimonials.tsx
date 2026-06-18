import Eyebrow from "./Eyebrow";
import { TESTIMONIALS } from "@/content/testimonials";

// Social proof from real customers. Show a strong handful, not all of them.
export default function Testimonials() {
  const items = TESTIMONIALS;
  return (
    <section className="zone-light surface-2 border-t border-line py-[clamp(56px,8vw,100px)]">
      <div className="container">
        <div className="mb-9 max-w-3xl">
          <Eyebrow>What customers say</Eyebrow>
          <h2 className="mt-4 font-display text-h2 font-extrabold uppercase text-text">
            From the people we keep running
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-card border border-line bg-steel-800 p-6">
              <div aria-hidden className="font-display text-4xl leading-none text-gold-deep">&ldquo;</div>
              <blockquote className="mt-1 flex-1 text-[1.0rem] leading-relaxed text-text/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
