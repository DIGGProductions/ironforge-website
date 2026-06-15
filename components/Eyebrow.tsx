// Mono eyebrow label with a leading hairline. Set rule={false} to drop the line.
export default function Eyebrow({
  children,
  rule = true,
  className = "",
}: {
  children: React.ReactNode;
  rule?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${rule ? "" : "no-rule"} ${className}`}>{children}</span>
  );
}
