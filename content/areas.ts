// Service-area content. Each city page must read local, not find-and-replaced.
// Distances are described by direction and the corridor, not invented mileage.

export interface Area {
  slug: string;
  name: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  drive: string;
  intro: string[];
  fleetMix: string;
  relevantServices: string[]; // service slugs most relevant to this city
  localNote: string;
}

export const AREAS: Area[] = [
  {
    slug: "castle-rock",
    name: "Castle Rock",
    keyword: "DOT inspection Castle Rock",
    metaTitle: "DOT Inspections & Commercial Truck Repair, Castle Rock | Iron Forge",
    metaDescription:
      "DOT inspections and commercial truck repair for Castle Rock, under one roof. Iron Forge is a short drive west in Sedalia. Inspect and fix in the same stop.",
    drive:
      "Castle Rock is the closest major town to the shop. Head west toward Sedalia and you are at our bay in a few minutes, no run into the city.",
    intro: [
      "If you need a DOT inspection in Castle Rock or a repair that actually gets your commercial truck back to work, Iron Forge is the closest shop that does both under one roof. Castle Rock runs on contractors, landscapers, and the trades, and those trucks cannot sit.",
      "We inspect and repair medium-duty trucks and trailers a short drive west of town, right off the corridor, and we fix what the inspection finds before the truck leaves.",
    ],
    fleetMix:
      "Castle Rock holds one of the heaviest contractor and landscaping bases in the county, plus the delivery and service fleets that come with a fast-growing town.",
    relevantServices: ["brake-repair", "tires", "lighting-electrical", "preventive-maintenance"],
    localNote:
      "Contractor and landscape trucks live on their brakes, tires, and lights. Those are the categories that fail inspections most, and the ones we keep Castle Rock trucks ahead of.",
  },
  {
    slug: "highlands-ranch",
    name: "Highlands Ranch",
    keyword: "commercial truck repair Highlands Ranch",
    metaTitle: "Commercial Truck Repair & DOT Inspections, Highlands Ranch | Iron Forge",
    metaDescription:
      "Commercial truck repair and DOT inspections for Highlands Ranch service and delivery fleets. Iron Forge is a short drive south in Sedalia. One stop for inspection and repair.",
    drive:
      "Highlands Ranch sits just north of the shop. A straight run south toward Sedalia puts you at our door without fighting metro traffic.",
    intro: [
      "Commercial truck repair for Highlands Ranch means service and delivery fleets that run all day in a busy residential market. Iron Forge keeps those trucks legal and moving with in-shop DOT inspections and full medium-duty repair.",
      "You bring the truck a short drive south, we inspect it, and we fix what it needs in the same visit.",
    ],
    fleetMix:
      "Highlands Ranch leans on service, delivery, and trades fleets working residential and light commercial routes. Uptime is everything when the schedule is packed.",
    relevantServices: ["preventive-maintenance", "brake-repair", "lighting-electrical", "tires"],
    localNote:
      "Stop-and-go residential routes are hard on brakes and tires. A preventive maintenance schedule keeps those trucks on route instead of on the shoulder.",
  },
  {
    slug: "parker",
    name: "Parker",
    keyword: "DOT inspection Parker CO",
    metaTitle: "DOT Inspections & Truck Repair, Parker CO | Iron Forge",
    metaDescription:
      "DOT inspections and commercial truck repair for Parker, CO. Iron Forge inspects and fixes medium-duty trucks and trailers in one stop, a short drive from town.",
    drive:
      "Parker is a straightforward drive southwest to the shop. Take the county roads or drop onto the corridor and you are here.",
    intro: [
      "Need a DOT inspection in Parker, CO or a shop that can fix what the inspection finds? Iron Forge does both in one stop. Parker's commercial base is growing fast, and construction and service trucks there need a shop that can keep up.",
      "We handle medium-duty trucks and trailers a short drive from town, inspection and repair in the same place.",
    ],
    fleetMix:
      "Parker's growth brings construction, grading, and service fleets, along with the trailers that haul for them.",
    relevantServices: ["brake-repair", "steering-suspension", "preventive-maintenance", "tires"],
    localNote:
      "Construction trucks beat up suspension and brakes. We catch the wear on a maintenance visit before it becomes a violation or a breakdown.",
  },
  {
    slug: "monument",
    name: "Monument",
    keyword: "truck repair Monument CO",
    metaTitle: "Truck Repair & DOT Inspections, Monument CO | Iron Forge",
    metaDescription:
      "Commercial truck repair and DOT inspections for Monument, CO. Iron Forge sits north up I-25, so Monument trucks skip the run into the Springs. Inspect and fix in one stop.",
    drive:
      "Monument is at the south end of our area, up I-25 from Colorado Springs. The shop is a straight shot north on the corridor.",
    intro: [
      "Truck repair in Monument, CO from a shop that also runs your DOT inspection. Iron Forge sits north of Monument on the same I-25 corridor where DOT runs its checkpoints, so a Monument-based truck does not have to run all the way into the Springs and back.",
      "We inspect and repair medium-duty trucks and trailers, and handle what the inspection flags in the same stop.",
    ],
    fleetMix:
      "Monument and the Tri-Lakes area run contractor, landscaping, and service fleets that work both the Springs and the south metro.",
    relevantServices: ["exhaust-emissions", "brake-repair", "preventive-maintenance", "tires"],
    localNote:
      "The climb on I-25 is hard on cooling and emissions systems. We keep Monument trucks from derating on the grade.",
  },
  {
    slug: "larkspur",
    name: "Larkspur",
    keyword: "commercial vehicle repair Larkspur",
    metaTitle: "Commercial Vehicle Repair & DOT Inspections, Larkspur | Iron Forge",
    metaDescription:
      "Commercial vehicle repair and DOT inspections for Larkspur. Iron Forge is a short run north up the corridor. Ranch, rural, and contractor trucks kept legal and working.",
    drive:
      "Larkspur sits right between the shop and the south county line, an easy run up the corridor to Sedalia.",
    intro: [
      "Commercial vehicle repair in Larkspur from the closest shop that also does DOT inspections. Larkspur is small and close, mostly rural property, ranch, and contractor trucks.",
      "Iron Forge keeps those medium-duty trucks and trailers legal and working, a short drive north, with inspection and repair in one place.",
    ],
    fleetMix:
      "Larkspur runs rural, ranch, and contractor trucks, plus the trailers that come with property and land work.",
    relevantServices: ["steering-suspension", "tires", "preventive-maintenance", "brake-repair"],
    localNote:
      "Dirt roads and heavy loads are hard on suspension and tires. We handle the wear that rural work puts on a truck.",
  },
  {
    slug: "franktown",
    name: "Franktown",
    keyword: "truck repair Franktown CO",
    metaTitle: "Truck Repair & DOT Inspections, Franktown CO | Iron Forge",
    metaDescription:
      "Commercial truck repair and DOT inspections for Franktown, CO, a few minutes west at Iron Forge. Ag and contractor trucks and trailers inspected and fixed in one stop.",
    drive:
      "Franktown is just east of the shop near the SH-83 and SH-86 junction. A quick run west and you are here.",
    intro: [
      "Truck repair in Franktown, CO from a shop a few minutes west. Franktown is close to Sedalia, with ag and contractor trucks working the eastern part of the county.",
      "Iron Forge inspects and repairs medium-duty trucks and trailers, and fixes what the DOT inspection finds in the same stop.",
    ],
    fleetMix:
      "Franktown and the country around it run ag, ranch, and contractor trucks, and the trailers that work with them.",
    relevantServices: ["preventive-maintenance", "brake-repair", "lighting-electrical", "tires"],
    localNote:
      "Trailers do a lot of the work out here, and trailer lights and brakes are common inspection trouble. We keep them legal.",
  },
  {
    slug: "lone-tree",
    name: "Lone Tree",
    keyword: "DOT inspection Lone Tree",
    metaTitle: "DOT Inspections & Truck Repair, Lone Tree | Iron Forge",
    metaDescription:
      "DOT inspections and commercial truck repair for Lone Tree, without the drive into the city. Iron Forge runs inspection and repair in one stop, a straight drive south.",
    drive:
      "Lone Tree is at the north end of our area near C-470. Drop down the corridor toward Sedalia and you are at the shop.",
    intro: [
      "Looking for a DOT inspection in Lone Tree without driving into the city? Iron Forge runs the inspection and the repair in one stop, a straight drive south.",
      "Lone Tree anchors the north end of the Douglas County commercial corridor, and the fleets there need a shop that does both. We handle medium-duty trucks and trailers.",
    ],
    fleetMix:
      "Lone Tree runs service, delivery, and light commercial fleets tied to the north county business corridor.",
    relevantServices: ["preventive-maintenance", "lighting-electrical", "brake-repair", "tires"],
    localNote:
      "Corridor delivery trucks rack up miles fast. A regular maintenance schedule and a clean inspection keep them earning.",
  },
];

export const AREA_SLUGS = AREAS.map((a) => a.slug);

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
