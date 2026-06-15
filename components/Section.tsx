import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type Bg = "black" | "steel" | "steel800" | "paper";

const bgMap: Record<Bg, string> = {
  black: "bg-forge-black text-text",
  steel: "bg-steel-900 text-text",
  steel800: "bg-steel-800 text-text",
  paper: "bg-paper text-ink",
};

// Standard section wrapper: brand background, vertical rhythm, centered container,
// optional eyebrow + heading. Vertical padding 72px to 100px on desktop.
export default function Section({
  children,
  bg = "black",
  eyebrow,
  title,
  intro,
  id,
  className = "",
  headingLevel = "h2",
  bordered = false,
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
  const isPaper = bg === "paper";
  return (
    <section
      id={id}
      className={`${bgMap[bg]} ${bordered ? "border-t border-line" : ""} py-[clamp(56px,8vw,100px)] ${className}`}
    >
      <div className="container">
        {(eyebrow || title || intro) && (
          <div className="mb-9 max-w-3xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <Heading
                className={`mt-4 font-display font-extrabold uppercase ${
                  headingLevel === "h1" ? "text-h1" : "text-h2"
                } ${isPaper ? "text-ink" : "text-text"}`}
              >
                {title}
              </Heading>
            )}
            {intro && (
              <p className={`mt-5 text-[1.08rem] leading-relaxed ${isPaper ? "text-ink/80" : "text-muted"}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
