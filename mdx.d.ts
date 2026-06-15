declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const meta: {
    slug: string;
    title: string;
    description: string;
    date: string;
    keyword: string;
    category: string;
  };
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}
