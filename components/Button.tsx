import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "gold" | "ghost";

const base =
  "inline-flex items-center justify-center font-display font-bold uppercase tracking-wide text-[15px] leading-none px-[22px] py-[13px] rounded-btn border whitespace-nowrap transition-[transform,box-shadow,background,border-color] duration-200";

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-ink border-transparent shadow-[inset_0_1px_0_rgba(232,192,120,0.55)] hover:bg-gold-bright hover:-translate-y-px hover:shadow-gold-glow",
  ghost:
    "bg-transparent text-text border-line hover:border-gold hover:text-gold-bright",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className"
  >;
type NativeProps = CommonProps & { href?: undefined } & ComponentPropsWithoutRef<"button">;

export default function Button(props: LinkProps | NativeProps) {
  const { variant = "gold", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props as LinkProps;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props as NativeProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
