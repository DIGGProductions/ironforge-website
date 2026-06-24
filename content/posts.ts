import type { ComponentType } from "react";
import Checklist, { meta as mChecklist } from "./posts/dot-inspection-checklist.mdx";
import Oos, { meta as mOos } from "./posts/dot-out-of-service-criteria.mdx";
import Fines, { meta as mFines } from "./posts/dot-inspection-fines-2026.mdx";
import HowOften, { meta as mHowOften } from "./posts/how-often-dot-inspection.mdx";
import WhatFails, { meta as mWhatFails } from "./posts/what-fails-dot-inspection-most.mdx";
import Winter, { meta as mWinter } from "./posts/winter-prep-commercial-trucks.mdx";
import Fleet, { meta as mFleet } from "./posts/keep-a-fleet-compliant.mdx";
import Scale, { meta as mScale } from "./posts/what-a-certified-scale-is-for.mdx";
import Brake20, { meta as mBrake20 } from "./posts/brakes-20-percent-rule-out-of-service.mdx";
import BrakeSigns, { meta as mBrakeSigns } from "./posts/signs-truck-brakes-need-service.mdx";
import TireTread, { meta as mTireTread } from "./posts/commercial-truck-tire-tread-depth.mdx";
import TireWear, { meta as mTireWear } from "./posts/uneven-truck-tire-wear-causes.mdx";
import LightViol, { meta as mLightViol } from "./posts/trailer-light-dot-violations.mdx";
import LightOut, { meta as mLightOut } from "./posts/trailer-lights-keep-going-out.mdx";
import SteerDot, { meta as mSteerDot } from "./posts/steering-suspension-dot-inspection.mdx";
import FrontEnd, { meta as mFrontEnd } from "./posts/truck-front-end-problems.mdx";
import Dpf, { meta as mDpf } from "./posts/dpf-regeneration-derate.mdx";
import DefScr, { meta as mDefScr } from "./posts/def-scr-problems.mdx";
import CheckEngine, { meta as mCheckEngine } from "./posts/diesel-check-engine-light.mdx";
import ColdStart, { meta as mColdStart } from "./posts/diesel-cold-start-problems.mdx";
import PmSchedule, { meta as mPmSchedule } from "./posts/truck-preventive-maintenance-schedule.mdx";
import PmCost, { meta as mPmCost } from "./posts/cost-of-skipping-preventive-maintenance.mdx";

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
  { meta: mBrake20, Component: Brake20 },
  { meta: mBrakeSigns, Component: BrakeSigns },
  { meta: mTireTread, Component: TireTread },
  { meta: mTireWear, Component: TireWear },
  { meta: mLightViol, Component: LightViol },
  { meta: mLightOut, Component: LightOut },
  { meta: mSteerDot, Component: SteerDot },
  { meta: mFrontEnd, Component: FrontEnd },
  { meta: mDpf, Component: Dpf },
  { meta: mDefScr, Component: DefScr },
  { meta: mCheckEngine, Component: CheckEngine },
  { meta: mColdStart, Component: ColdStart },
  { meta: mPmSchedule, Component: PmSchedule },
  { meta: mPmCost, Component: PmCost },
].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export const POST_SLUGS = POSTS.map((p) => p.meta.slug);
export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
