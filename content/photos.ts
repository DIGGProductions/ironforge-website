// Real photos mapped to slots. Sourced from the shop's own Facebook export, team
// portrait shoot, and a few brand-matched generated fills. Optimized for web.
export const PHOTOS = {
  hero: "/images/hero.jpg",
  dot: "/images/dot-inspection.jpg",
  dotHero: "/images/dot-hero.jpg",
  about: "/images/about.jpg",
  will: "/images/will.jpg",
  fleet: "/images/fleet.jpg",
  scale: "/images/vehicle-scale.jpg",
} as const;

export const SERVICE_PHOTOS: Record<string, string> = {
  "brake-repair": "/images/brake-repair.jpg",
  tires: "/images/tires.jpg",
  "lighting-electrical": "/images/lighting-electrical.jpg",
  "steering-suspension": "/images/steering-suspension.jpg",
  "exhaust-emissions": "/images/exhaust-emissions.jpg",
  "engine-drivetrain": "/images/engine-drivetrain.jpg",
  "preventive-maintenance": "/images/preventive-maintenance.jpg",
};
