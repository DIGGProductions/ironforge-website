import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type Bg = "black" | "steel" | "steel800" | "paper";

// Light body section. The dark hero, proof bar, CTA, and footer are their own
// components and stay dark; everything routed through Section is the light zone.
// bg "steel"/"steel800" render the slightly lighter alt surface for rhythm.
export default function Section({
  children,
  bg = "paper",
  eyebrow,
  title,
  intro,
  id,
  className = "",
  headingLevel = "h2",
  bordered = true,
}: {
  children?: ReactNode;
  bg?: Bg;
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  id?: string;
  className?: string;
  headingLevel?: "h1" | "h2";
  bordered?: boolean;
}) {
  const Heading = headingLevel;
  const alt = bg === "steel" || bg === "steel800" ? "surface-2" : "";
  return (
    <section
      id={id}
      className={`zone-light ${alt} ${bordered ? "border-t border-line" : ""} py-[clamp(56px,8vw,100px)] ${className}`}
    >
      <div className="container">
        {(eyebrow || title || intro) && (
          <div className="mb-9 max-w-3xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <Heading
                className={`mt-4 font-display font-extrabold uppercase ${
                  headingLevel === "h1" ? "text-h1" : "text-h2"
                } text-text`}
              >
                {title}
              </Heading>
            )}
            {intro && (
              <p className="mt-5 text-[1.08rem] leading-relaxed text-muted">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
