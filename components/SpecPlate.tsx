import type { ReactNode } from "react";

// The signature: a stamped steel spec plate with rivets and a rotated DOT·CO stamp.
// One strong appearance in the hero; a lighter echo elsewhere.
export type SpecRow = { label: string; value: ReactNode };

export default function SpecPlate({
  headLeft = "Iron Forge",
  headRight = "Sedalia · CO",
  rows,
  stampTop = "DOT",
  stampBottom = "CO",
  className = "",
  label = "Iron Forge at a glance",
}: {
  headLeft?: string;
  headRight?: string;
  rows: SpecRow[];
  stampTop?: string;
  stampBottom?: string;
  className?: string;
  label?: string;
}) {
  return (
    <aside className={`plate ${className}`} aria-label={label}>
      <div className="stamp" aria-hidden>
        <span>{stampTop}</span>
        <small>{stampBottom}</small>
      </div>
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
