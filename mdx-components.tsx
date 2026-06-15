import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Styles MDX blog content to match the brand. Used by @next/mdx.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 font-display text-2xl font-extrabold uppercase tracking-tight text-text">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-display text-xl font-bold uppercase tracking-tight text-text">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mb-5 leading-relaxed text-[1.05rem] text-text/90">{children}</p>,
    ul: ({ children }) => <ul className="mb-6 ml-1 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="mb-6 ml-5 list-decimal space-y-2">{children}</ol>,
    li: ({ children }) => (
      <li className="relative pl-6 text-text/90 before:absolute before:left-0 before:top-[0.6em] before:h-[6px] before:w-[6px] before:bg-gold/80">
        {children}
      </li>
    ),
    a: ({ href, children }) => (
      <Link href={href ?? "#"} className="text-gold underline-offset-4 hover:text-gold-bright hover:underline">
        {children}
      </Link>
    ),
    strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-gold-deep bg-steel-800/60 px-5 py-3 text-muted">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
