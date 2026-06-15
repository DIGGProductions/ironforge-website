import Link from "next/link";
import PhotoSlot from "./PhotoSlot";

export type ServiceCardData = {
  href: string;
  kicker: string;
  title: string;
  blurb: string;
  photoDescription: string;
  src?: string;
  featured?: boolean;
};

// Photo on top, then kicker, title, one plain line. Hover lifts and shifts the
// border to gold. Featured variant gets a gold edge and a metallic top bar.
export default function ServiceCard({ data }: { data: ServiceCardData }) {
  const { href, kicker, title, blurb, photoDescription, src, featured } = data;
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-card border bg-steel-800 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] ${
        featured
          ? "border-gold/70 hover:border-gold"
          : "border-line hover:border-gold-deep"
      }`}
    >
      {featured && <span className="absolute inset-x-0 top-0 z-10 h-[3px] bg-metal" />}
      <PhotoSlot
        description={photoDescription}
        src={src}
        rounded="rounded-none"
        className="border-0 border-b border-line"
      />
      <div className="flex flex-1 flex-col p-6">
        <div
          className={`mb-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
            featured ? "text-gold" : "text-gold-deep"
          }`}
        >
          {kicker}
        </div>
        <h3 className="font-display text-h3 font-bold uppercase tracking-tight text-text">
          {title}
        </h3>
        <p className="mt-2 text-[0.96rem] leading-relaxed text-muted">{blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View service
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
