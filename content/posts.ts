import type { ComponentType } from "react";
import Checklist, { meta as mChecklist } from "./posts/dot-inspection-checklist.mdx";
import Oos, { meta as mOos } from "./posts/dot-out-of-service-criteria.mdx";
import Fines, { meta as mFines } from "./posts/dot-inspection-fines-2026.mdx";
import HowOften, { meta as mHowOften } from "./posts/how-often-dot-inspection.mdx";
import WhatFails, { meta as mWhatFails } from "./posts/what-fails-dot-inspection-most.mdx";
import Winter, { meta as mWinter } from "./posts/winter-prep-commercial-trucks.mdx";
import Fleet, { meta as mFleet } from "./posts/keep-a-fleet-compliant.mdx";
import Scale, { meta as mScale } from "./posts/what-a-certified-scale-is-for.mdx";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  keyword: string;
  category: string;
}
export interface Post {
  meta: PostMeta;
  Component: ComponentType;
}

export const POSTS: Post[] = [
  { meta: mChecklist, Component: Checklist },
  { meta: mOos, Component: Oos },
  { meta: mFines, Component: Fines },
  { meta: mHowOften, Component: HowOften },
  { meta: mWhatFails, Component: WhatFails },
  { meta: mWinter, Component: Winter },
  { meta: mFleet, Component: Fleet },
  { meta: mScale, Component: Scale },
].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export const POST_SLUGS = POSTS.map((p) => p.meta.slug);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
