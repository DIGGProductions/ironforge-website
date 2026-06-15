import type { ElementType, ReactNode } from "react";

// Restrained page-load rise. Pure CSS (see globals.css .rise), so no client JS.
// Reduced motion disables it. Delay steps map to .d1.. .d5.
export default function Reveal({
  children,
  delay = 1,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
  className?: string;
}) {
  return <Tag className={`rise d${delay} ${className}`}>{children}</Tag>;
}
