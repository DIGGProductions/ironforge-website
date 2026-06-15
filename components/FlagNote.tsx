// A clearly visible placeholder for an unconfirmed fact. Renders an amber dashed
// chip so it never reads as real published content. Resolve before going live.
export default function FlagNote({ children }: { children?: React.ReactNode }) {
  return (
    <mark className="mx-0.5 inline-flex items-center gap-1.5 rounded-[3px] border border-dashed border-gold/70 bg-gold/10 px-2 py-0.5 align-baseline font-mono text-[11px] uppercase tracking-wider text-gold-bright">
      <span aria-hidden className="text-[9px]">▲</span>
      {children ?? "Confirm with Will"}
    </mark>
  );
}
