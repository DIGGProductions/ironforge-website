// Audience landing pages (contractors, landscapers). Distinct copy per audience,
// no duplicated body text, each pointing at the services that audience needs most.

export interface AudienceNeed {
  label: string;
  text: string;
}
export interface Audience {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  eyebrow: string;
  title: string;
  heroSub: string;
  heroImage: string;
  intro: string[];
  needsTitle: string;
  needs: AudienceNeed[];
  relevantServices: string[];
  closing: string;
  testimonial?: { quote: string; name: string };
}

export const AUDIENCES: Record<string, Audience> = {
  contractors: {
    slug: "contractors",
    name: "Contractors",
    metaTitle: "Truck & Trailer Repair for Contractors, Douglas County | Iron Forge",
    metaDescription:
      "Commercial truck and trailer repair for contractors and construction crews in Douglas County. Brakes, suspension, dump-trailer work, tires, DOT inspections, and PM that keeps the crew working.",
    keyword: "contractor truck and trailer repair Douglas County",
    eyebrow: "For contractors · Douglas County",
    title: "Truck and trailer repair for contractors",
    heroSub:
      "Your trucks and trailers are the crew. We keep them legal and working, and we fix what we flag in the same stop.",
    heroImage: "/images/fleet.jpg",
    intro: [
      "Contractor truck and trailer repair in Douglas County comes down to one thing: keeping the crew working. When a work truck or a dump trailer goes down, the whole job stalls, and that lost day costs a lot more than the repair would have. Iron Forge keeps construction and contractor trucks and trailers on the road, and runs the DOT inspection that keeps them legal, all under one roof.",
      "Construction work is hard on equipment. Heavy loads, rough sites, and constant use wear out brakes, suspension, and tires faster than a highway truck ever sees. We catch that wear before it turns into a breakdown or a violation.",
    ],
    needsTitle: "What contractor trucks come in for",
    needs: [
      { label: "Brakes and suspension under load", text: "Heavy loads and job-site abuse wear out brakes, springs, and U-bolts. We keep them in spec so the truck stops straight and tracks straight." },
      { label: "Dump and equipment trailers", text: "Axles, brakes, and the wiring that runs the lights. The trailers that haul your machines take a beating, and we keep them working." },
      { label: "Tires that take a beating", text: "Site tires wear hard and uneven. We sell and service them, and check the alignment and front end that chews them up." },
      { label: "DOT inspections and compliance", text: "Your trucks have to pass. We run the annual inspection and fix what it flags, so a flagged truck does not park the crew." },
      { label: "Maintenance that fits the work", text: "We build a service schedule around how hard your trucks run, so the downtime is planned instead of forced on you mid-job." },
    ],
    relevantServices: ["brake-repair", "steering-suspension", "tires", "preventive-maintenance"],
    closing:
      "One shop that knows your trucks, runs the inspections, and fixes the repairs is one less thing standing between your crew and the job.",
    testimonial: {
      quote:
        "Thanks to Will and the shop team. They got me out of an emergency today with my trailer. Had all the parts and expertise to get me off the side of Santa Fe. Thanks again, Iron Forge.",
      name: "Brendan S.",
    },
  },
  landscaping: {
    slug: "landscaping",
    name: "Landscaping",
    metaTitle: "Truck, Trailer & Plow Service for Landscapers, Colorado | Iron Forge",
    metaDescription:
      "Landscaping truck, trailer, and snow plow service in Douglas County. Trailer lights and brakes, tires, DOT inspections, PM, and Boss and SnowEx plow service. One shop, year-round.",
    keyword: "landscaping truck and trailer repair Colorado",
    eyebrow: "For landscapers · Douglas County",
    title: "Truck, trailer, and plow service for landscapers",
    heroSub:
      "Mowing season or snow season, we keep your trucks, trailers, and plows working. One shop, all year.",
    heroImage: "/images/snow-plows.jpg",
    intro: [
      "Landscaping truck and trailer repair in Colorado runs on two seasons. All summer your crews are hauling, mowing, and loading, which is hard on trailers and tires. All winter those same trucks are plowing, which is hard on everything else. Iron Forge keeps landscapers running through both, with truck and trailer repair, DOT inspections, and Boss and SnowEx plow service under one roof.",
      "Landscape trailers live a rough life. Constant loading and unloading wears out ramps, axles, brakes, and the trailer lights that fail an inspection. We keep them legal and working, so a dead light or a worn brake does not park a crew in the busy season.",
    ],
    needsTitle: "What landscape crews come in for",
    needs: [
      { label: "Trailer brakes, axles, and lights", text: "Enclosed, dump, and utility trailers take constant abuse. We handle the brakes, axles, and the lighting and wiring that get written up most." },
      { label: "Tires and front-end wear", text: "Loaded trailers and stop-and-go routes wear tires fast. We sell and service them and fix the alignment that ruins the next set." },
      { label: "DOT inspections", text: "Your trucks and trailers have to be legal. We run the inspection and fix what it flags in one stop." },
      { label: "Snow plow service and sales", text: "When the season turns, we get your Boss and SnowEx plows ready, and sell you the right one if you need it. The same shop, year-round." },
      { label: "Maintenance for both seasons", text: "We schedule service around your busy stretches, so the trucks are ready when the work is, summer and winter." },
    ],
    relevantServices: ["snow-plows", "lighting-electrical", "tires", "preventive-maintenance"],
    closing:
      "Landscapers need a shop that keeps the trucks, the trailers, and the plows going through both seasons. That is exactly what we do.",
    testimonial: {
      quote: "Love these guys. I have been doing work with them for seven years. Always fair, always done right.",
      name: "Hi-Def Landscapes",
    },
  },
};

export const AUDIENCE_SLUGS = Object.keys(AUDIENCES);
