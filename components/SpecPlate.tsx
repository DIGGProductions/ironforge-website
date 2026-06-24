import type { ReactNode } from "react";

// The signature: a stamped steel spec plate with corner rivets.
export type SpecRow = { label: string; value: ReactNode };

export default function SpecPlate({
  headLeft = "Iron Forge",
  headRight = "Sedalia · CO",
  rows,
  className = "",
  label = "Iron Forge at a glance",
}: {
  headLeft?: string;
  headRight?: string;
  rows: SpecRow[];
  className?: string;
  label?: string;
}) {
  return (
    <aside className={`plate ${className}`} aria-label={label}>
      <div className="plate-head">
        <span>{headLeft}</span>
        <b>{headRight}</b>
      </div>
      <dl className="m-0">
        {rows.map((row, i) => (
          <div className="spec" key={i}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
