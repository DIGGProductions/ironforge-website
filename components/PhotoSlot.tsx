import Image from "next/image";

// A styled photo placeholder that becomes a real image the moment `src` is set.
// Until the owner supplies photos, it shows the shot to capture (the shot list).
export default function PhotoSlot({
  description,
  src,
  alt,
  ratio = "aspect-[16/10]",
  priority = false,
  overlay = false,
  className = "",
  rounded = "rounded-card",
}: {
  description: string;
  src?: string;
  alt?: string;
  ratio?: string;
  priority?: boolean;
  overlay?: boolean;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden ${rounded} border border-line bg-[linear-gradient(160deg,#1c2026,#121519)] ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? description}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            priority={priority}
          />
          {overlay && (
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,15,18,0.85)_0%,rgba(13,15,18,0.45)_45%,rgba(13,15,18,0.15)_100%)]" />
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="pointer-events-none absolute inset-[10px] rounded-[4px] border border-dashed border-line/80" />
          <svg
            viewBox="0 0 48 48"
            width="36"
            height="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gold-deep"
            aria-hidden
          >
            <path d="M6 16h7l3-4h8l3 4h7a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3z" />
            <circle cx="24" cy="27" r="7" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-deep">Photo</span>
          <span className="max-w-[34ch] font-mono text-[11px] leading-relaxed tracking-wide text-muted">
            {description}
          </span>
        </div>
      )}
    </div>
  );
}
