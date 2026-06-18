// Service content. Each entry drives /services/[slug] via the service-page template.
// Copy is specific by design: detail signals competence in a trade business.

export interface ServiceFaq {
  q: string;
  a: string;
}
export interface ServiceSpec {
  label: string;
  text: string;
}
export interface ServiceStep {
  step: string;
  text: string;
}
export interface Service {
  slug: string;
  nav: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  kicker: string;
  cardBlurb: string;
  photoDescription: string;
  heroSub: string;
  problem: string[];
  serviceIntro: string;
  whatWeService: ServiceSpec[];
  whyItMatters: string[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  related: string[];
  confirm?: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "brake-repair",
    nav: "Brake Repair",
    title: "Brake repair for commercial trucks, Douglas County",
    metaTitle: "Commercial Truck Brake Repair, Douglas County | Iron Forge",
    metaDescription:
      "Air and hydraulic brake repair for medium-duty trucks and trailers in Douglas County. Brakes are the number one DOT failure. We inspect and fix them in one stop.",
    keyword: "commercial truck brake repair Douglas County",
    kicker: "No. 1 fail point",
    cardBlurb:
      "The top reason trucks fail inspection. Chambers, slack adjusters, shoes, and linings done right.",
    photoDescription: "Brake drum and chamber close-up, hands working",
    heroSub:
      "Brakes are the number one reason commercial trucks get pulled out of service. We inspect, repair, and get you road-legal in the same visit.",
    problem: [
      "Commercial truck brake repair in Douglas County is the work that keeps a truck legal and keeps it stopping. Brakes are the single most common reason trucks fail a DOT inspection and the most common out-of-service violation on the road. A worn lining or a chamber that is out of stroke is not just a citation risk. It is a safety risk for the truck and everyone around it.",
      "If your brakes are grabbing, fading, pulling to one side, or showing up on an inspection report, bring the truck in. We find the cause and fix it instead of throwing parts at it.",
    ],
    serviceIntro: "We work on air brakes and hydraulic brakes for medium-duty trucks and trailers.",
    whatWeService: [
      {
        label: "Chambers and push rod stroke",
        text: "Out-of-adjustment stroke is a top violation. We measure it, set it right, and replace chambers that leak or run weak.",
      },
      {
        label: "Slack adjusters",
        text: "Automatic and manual slack adjusters checked, lubricated, and replaced when they stop holding adjustment.",
      },
      {
        label: "Shoes, linings, and drums",
        text: "Lining thickness measured against spec. Shoes relined, drums turned or replaced when they are scored or out of round.",
      },
      {
        label: "S-cams and hardware",
        text: "Worn S-cam bushings and tired return springs cause drag and uneven wear. We rebuild the foundation, not just the friction surface.",
      },
      {
        label: "Air lines, valves, and governor",
        text: "Leaks, frozen valves, and a governor that cuts out at the wrong pressure. We test the system and seal it up.",
      },
      {
        label: "ABS faults",
        text: "We pull ABS codes, trace the sensor or wiring, and clear the fault so the dash light goes out for the right reason.",
      },
    ],
    whyItMatters: [
      "On a DOT inspection, brakes are scored hard. Out-of-adjustment brakes, thin linings, and air loss will fail a truck and can put it out of service on the spot.",
      "Because we inspect and repair under one roof, a brake problem we find does not send you to a second shop. We fix it and you leave road-legal.",
    ],
    process: [
      { step: "You bring it in", text: "Tell us what you are feeling or hand us the inspection report. We listen first." },
      { step: "We inspect the system", text: "Wheels off, we measure stroke and lining, check drums, and test the air system end to end." },
      { step: "We quote before we work", text: "You get a straight estimate. No surprise parts." },
      { step: "We fix it and verify", text: "We repair, adjust, and road-test so the brakes are right before the truck leaves." },
    ],
    faqs: [
      {
        q: "Are bad brakes really the most common DOT violation?",
        a: "Yes. Brake problems, including out-of-adjustment brakes and worn linings, are consistently the largest share of out-of-service violations on commercial vehicles. That is why we check them closely on every inspection.",
      },
      {
        q: "Do you work on air brakes and hydraulic brakes?",
        a: "Both. Medium-duty trucks and trailers run either system, and we service both, including the air supply, valves, and ABS.",
      },
      {
        q: "Can you fix the brakes the same day you inspect the truck?",
        a: "Often, yes, depending on parts. Because inspection and repair happen in one shop, a brake issue we flag can be fixed without sending you elsewhere. Call ahead and we will tell you what to expect.",
      },
      {
        q: "My ABS light is on but the brakes feel fine. Does that matter?",
        a: "It can. An ABS fault on a truck or trailer required to have ABS is a violation. We diagnose the cause and clear it properly.",
      },
    ],
    related: ["preventive-maintenance", "tires", "steering-suspension"],
  },
  {
    slug: "tires",
    nav: "Tires",
    title: "Commercial truck tires in Castle Rock",
    metaTitle: "Commercial Truck Tires, Sales and Service | Iron Forge",
    metaDescription:
      "Commercial truck and trailer tire sales and service near Castle Rock. Tread and sidewalls checked, mounted, and balanced, with minimal downtime.",
    keyword: "commercial truck tires Castle Rock",
    kicker: "Sales + service",
    cardBlurb:
      "Commercial truck and trailer tire sales and replacement, in and out with minimal downtime.",
    photoDescription: "Commercial tire being mounted in the bay",
    heroSub:
      "Tire sales and service for medium-duty trucks and trailers. We get you the right tire and get you back on the road.",
    problem: [
      "Commercial truck tires near Castle Rock take a beating on the I-25 corridor. Worn tread, a cut sidewall, or mismatched duals slow you down and put you in a DOT violation category that inspectors check on every stop. A tire that lets go on the highway is a bad day for everyone.",
      "We sell and service truck and trailer tires, and we do it without making you wait around all day.",
    ],
    serviceIntro: "Steer, drive, and trailer tires for medium-duty trucks and trailers.",
    whatWeService: [
      { label: "Tire sales", text: "We get you the right size and load range for the truck and the work it does. Tell us the application and we will match it." },
      { label: "Mounting and balancing", text: "Mounted and balanced on the rim so you do not chase a vibration down the road." },
      { label: "Tread and sidewall checks", text: "We measure tread against the legal minimum and look for cuts, bulges, and uneven wear that point to a bigger problem." },
      { label: "Valve stems and TPMS", text: "Leaking valve stems and sensor faults handled so you hold pressure and keep the light off." },
      { label: "Matched duals", text: "Duals matched for size and wear so they share the load and last longer." },
      { label: "Flat repair", text: "Repaired to standard where the tire allows it, replaced when it does not." },
    ],
    whyItMatters: [
      "Tires are a violation category for a reason. Tread below the minimum, exposed cord, and flat-spotted rubber will mark you down on a DOT inspection.",
      "Worn tires also hurt fuel economy and chew up the next set faster. We catch the wear early and fix the cause, not just the symptom.",
    ],
    process: [
      { step: "Tell us the truck and the load", text: "Application drives the tire. We start there." },
      { step: "We inspect what is on it", text: "Tread, sidewalls, and wear pattern, so we are not selling you tires you do not need." },
      { step: "We mount and balance", text: "Right tire, mounted and balanced, valve and pressure set." },
      { step: "Back to work", text: "In and out with minimal downtime." },
    ],
    faqs: [
      {
        q: "Do you sell tires or just service them?",
        a: "Both. We sell commercial truck and trailer tires and mount, balance, and repair them. Tell us the truck and the work it does and we will get you the right tire.",
      },
      {
        q: "Can uneven tire wear mean something else is wrong?",
        a: "Often, yes. Cupping, feathering, or one-side wear usually points to alignment, suspension, or inflation. We can check the cause so the new tires do not wear out the same way.",
      },
      {
        q: "What is the legal minimum tread for a commercial vehicle?",
        a: "Steer tires and other tires have different minimums under federal rules. We measure against the standard and tell you where you stand. If a tire is close, we will say so.",
      },
    ],
    related: ["brake-repair", "steering-suspension", "preventive-maintenance"],
  },
  {
    slug: "lighting-electrical",
    nav: "Lighting & Electrical",
    title: "Truck lighting and electrical repair, Colorado",
    metaTitle: "Truck Lighting & Electrical Repair, Colorado | Iron Forge",
    metaDescription:
      "Lighting and electrical repair for commercial trucks and trailers. Lamps, wiring, connectors, and trailer harnesses traced and fixed. Lighting is a top DOT violation.",
    keyword: "truck lighting repair Colorado",
    kicker: "No. 2 fail point",
    cardBlurb:
      "Burned-out lamps and bad wiring are a top inspection violation. We trace, repair, and get every light legal.",
    photoDescription: "Tech tracing a trailer wiring harness or truck lights",
    heroSub:
      "Lamps, wiring, and trailer harnesses traced and repaired. Lighting violations are quick to fix and easy to prevent.",
    problem: [
      "Truck lighting repair in Colorado is one of the most common fixes we do, because lighting and wiring problems are one of the most common DOT violations. A dead marker lamp or a corroded trailer plug is a small thing that puts a truck out of service. The frustrating part is how avoidable it is.",
      "We trace the fault to the source, whether it is a bulb, a ground, a connector, or a chafed wire, and we fix it so it stays fixed.",
    ],
    serviceIntro: "Lighting and 12-volt electrical for medium-duty trucks and trailers.",
    whatWeService: [
      { label: "Lamps and markers", text: "Headlights, tail and brake lamps, turn signals, and clearance and marker lights replaced and aimed." },
      { label: "Trailer harnesses and 7-way plugs", text: "The top source of trailer light trouble. We rebuild corroded plugs and harnesses instead of taping over them." },
      { label: "Wiring, grounds, and connectors", text: "We chase shorts, opens, and bad grounds with a meter, not a guess." },
      { label: "Charging system", text: "Alternators, batteries, and starters tested and replaced when they are behind a no-start or a dim light." },
      { label: "Switches and controls", text: "Dash switches, relays, and fuses that drop out at the wrong time." },
      { label: "Accessory wiring", text: "Work lights, beacons, and back-up alarms wired in clean." },
    ],
    whyItMatters: [
      "Lighting is checked on every DOT inspection, and violations add up fast across a trailer. It is also the cheapest category to stay ahead of.",
      "We fix the lights now so a five dollar lamp does not turn into a roadside out-of-service later.",
    ],
    process: [
      { step: "Show us what is out", text: "Or let us walk the truck and trailer and find it." },
      { step: "We trace it", text: "Meter in hand, back to the source. Bulb, ground, connector, or wire." },
      { step: "We repair it right", text: "Sealed connections and proper grounds, not a temporary patch." },
      { step: "We check every light", text: "Before it leaves, every required lamp works." },
    ],
    faqs: [
      {
        q: "Why do my trailer lights keep failing?",
        a: "Most repeat trailer light failures trace back to a corroded 7-way plug, a bad ground, or a chafed wire rubbing through. We fix the cause so you are not replacing bulbs every month.",
      },
      {
        q: "Is a single burned-out lamp really an inspection problem?",
        a: "It can be, depending on which lamp. Required lamps that are out are a violation, and they add up across a trailer. We make sure every required light works.",
      },
      {
        q: "Can you handle electrical problems beyond lighting?",
        a: "Yes. We work on the charging system, grounds, switches, relays, and wiring for medium-duty trucks and trailers.",
      },
    ],
    related: ["brake-repair", "preventive-maintenance", "engine-drivetrain"],
  },
  {
    slug: "steering-suspension",
    nav: "Steering & Suspension",
    title: "Steering and suspension repair for commercial trucks, Colorado",
    metaTitle: "Truck Steering & Suspension Repair, Colorado | Iron Forge",
    metaDescription:
      "Steering and suspension repair for medium-duty trucks and trailers. Springs, shocks, kingpins, tie rods, and alignment. Safer ride, even tire wear, DOT ready.",
    keyword: "truck suspension repair Colorado",
    kicker: "Ride + safety",
    cardBlurb:
      "Springs, shocks, kingpins, and steering checked and repaired for a safe ride and even tire wear.",
    photoDescription: "Leaf spring and steering linkage under a truck on the lift",
    heroSub:
      "Springs, steering, and alignment for medium-duty trucks and trailers. A truck that tracks straight is safer and easier on tires.",
    problem: [
      "Truck suspension repair in Colorado is about more than a smooth ride. Worn steering and suspension parts make a truck wander, eat tires, and fail the steering and suspension checks on a DOT inspection. If the truck darts when you hit a bump or the steering has play in it, those parts are telling you something.",
      "We find the worn component and replace it, and we make sure the truck tracks straight when it leaves.",
    ],
    serviceIntro: "Steering, springs, and ride control for medium-duty trucks and trailers.",
    whatWeService: [
      { label: "Leaf springs and U-bolts", text: "Cracked leaves and broken center bolts replaced. Ride height set back to spec." },
      { label: "Shocks and air suspension", text: "Worn shocks and leaking air bags that let the truck wallow and bottom out." },
      { label: "Kingpins and bushings", text: "Play in the kingpins shows up as wander and uneven tire wear. We measure it and rebuild it." },
      { label: "Tie rods, drag links, and steering box", text: "The linkage that turns the wheel. Slop here is a safety item and an inspection item." },
      { label: "Wheel bearings and seals", text: "Repacked or replaced, with leaking seals handled before they ruin a hub." },
      { label: "Alignment", text: "Toe and angles set so the truck tracks straight and the new tires last." },
    ],
    whyItMatters: [
      "Steering and suspension are safety systems, and inspectors treat them that way. Loose steering, cracked springs, and worn kingpins are out-of-service items.",
      "They also destroy tires, which is its own cost. Fixing the front end pays for itself in rubber.",
    ],
    process: [
      { step: "Tell us how it drives", text: "Wander, vibration, a clunk over bumps. The symptom points us to the part." },
      { step: "We inspect the front end", text: "Up on the lift, we check play in every joint and the condition of the springs." },
      { step: "We repair and align", text: "Replace what is worn, then set the alignment so it tracks straight." },
      { step: "Road test", text: "We drive it to confirm the fix before you do." },
    ],
    faqs: [
      {
        q: "My truck wanders and wears the front tires. What causes that?",
        a: "Usually worn kingpins, tie rod ends, or an alignment that is out. We check the whole front end and fix the cause so the next set of tires lasts.",
      },
      {
        q: "Do you do alignments on medium-duty trucks?",
        a: "Yes. We set toe and the steering angles so the truck tracks straight and tires wear evenly.",
      },
      {
        q: "Are worn steering parts a DOT out-of-service item?",
        a: "They can be. Excess play in the steering and broken suspension parts are inspected closely and can take a truck out of service. We catch them before the inspector does.",
      },
    ],
    related: ["tires", "brake-repair", "preventive-maintenance"],
  },
  {
    slug: "exhaust-emissions",
    nav: "Exhaust & Emissions",
    title: "Exhaust and emissions service, DPF and DEF, Colorado",
    metaTitle: "DPF Cleaning & Diesel Emissions Service, Colorado | Iron Forge",
    metaDescription:
      "Diesel exhaust and emissions service for medium-duty trucks. DPF cleaning, DEF and SCR service, regen and sensor diagnosis. Keep the truck compliant and pulling.",
    keyword: "DPF cleaning Colorado",
    kicker: "Emissions",
    cardBlurb:
      "DPF and DEF service, regen and sensor diagnosis, so the emissions system stops putting you in limp mode.",
    photoDescription: "DPF filter out of a diesel truck on the bench",
    heroSub:
      "DPF and DEF service for diesel trucks. We get the emissions system healthy so the truck stops derating.",
    problem: [
      "DPF cleaning in Colorado and diesel emissions service is some of the most frustrating work a truck owner deals with. A plugged diesel particulate filter, a bad DEF sensor, or a failed regen drops the truck into a derate and kills your day. The dash lights up and the power goes away.",
      "We diagnose the emissions system properly, clean or replace what is plugged, and get the regen working the way it should.",
    ],
    serviceIntro: "Diesel exhaust and aftertreatment service for medium-duty trucks.",
    whatWeService: [
      { label: "DPF cleaning and replacement", text: "We clean a loaded particulate filter or replace one that is past saving, and find out why it plugged." },
      { label: "Forced and parked regens", text: "When the truck will not regen on its own, we run it and address what is blocking it." },
      { label: "DEF and SCR system", text: "DEF quality and dosing, pumps, and injectors on the selective catalytic reduction side." },
      { label: "Sensors and faults", text: "Pressure, temperature, and NOx sensors that throw codes and trigger a derate." },
      { label: "EGR and related", text: "EGR coolers and valves that fail and set the whole system off." },
      { label: "Diagnostics", text: "We read the codes and the data so we fix the cause instead of clearing a light." },
    ],
    whyItMatters: [
      "Emissions equipment is required, and tampering with it is not something we do. A truck throwing emissions faults is also losing power and burning more fuel.",
      "Getting the aftertreatment healthy keeps you legal and keeps the truck pulling.",
    ],
    process: [
      { step: "We read the system", text: "Codes, freeze frame, and live data tell us where the problem is." },
      { step: "We find the cause", text: "A plugged filter is often a symptom. We look for why." },
      { step: "We clean or replace", text: "DPF service, sensor and component replacement, and a working regen." },
      { step: "We verify the regen", text: "We confirm the system completes a regen before the truck leaves." },
    ],
    faqs: [
      {
        q: "My truck keeps going into derate. Can you fix it?",
        a: "Usually, yes. A derate is the engine protecting itself, often over the emissions system. We read the codes and data, find the cause, and fix it instead of just resetting the light.",
      },
      {
        q: "Do you delete or tune out the emissions system?",
        a: "No. We do not delete or tamper with emissions equipment. We repair it so it works and keeps the truck legal.",
      },
      {
        q: "Can you clean a DPF or do I need a new one?",
        a: "Often we can clean it and get it back in service, as long as it is not damaged. If it is past saving we will tell you and replace it. Either way we look for why it plugged.",
      },
    ],
    related: ["engine-drivetrain", "preventive-maintenance", "brake-repair"],
  },
  {
    slug: "engine-drivetrain",
    nav: "Engine & Drivetrain",
    title: "Diesel engine and drivetrain repair, Sedalia",
    metaTitle: "Diesel Engine & Drivetrain Repair, Sedalia CO | Iron Forge",
    metaDescription:
      "Diesel engine and drivetrain repair for medium-duty trucks in Sedalia. Diagnostics, no-starts, cooling, clutches, transmissions, and driveline. Straight answers, careful work.",
    keyword: "diesel engine repair Sedalia",
    kicker: "Diagnostics + drivetrain",
    cardBlurb: "Diagnostics, no-starts, cooling, and driveline work for medium-duty diesel trucks.",
    photoDescription: "Tech with a diagnostic laptop plugged into a diesel engine",
    heroSub:
      "Diagnostics and repair for medium-duty diesel engines and the driveline behind them.",
    problem: [
      "Diesel engine repair in Sedalia covers everything from a check-engine light you cannot ignore to a truck that will not start on a cold morning. When a medium-duty truck is down, the business behind it is down. You need a straight diagnosis and a fix that holds, not a guess.",
      "We diagnose with the right tools, tell you what we find, and repair the engine and drivetrain so the truck earns again.",
    ],
    serviceIntro: "Engine and drivetrain work for medium-duty diesel trucks.",
    whatWeService: [
      { label: "Diagnostics", text: "Check-engine and warning lights read with the right software, traced to the real cause." },
      { label: "No-starts and hard starts", text: "Fuel, batteries, glow and intake heaters, and starting circuits." },
      { label: "Cooling system", text: "Leaks, water pumps, thermostats, and overheating that will sideline a truck fast." },
      { label: "Clutches and transmissions", text: "Slipping clutches and rough-shifting transmissions, repaired or replaced." },
      { label: "Driveline", text: "U-joints, carrier bearings, and driveshafts that vibrate or clunk." },
      { label: "Differentials and axles", text: "Leaks, noise, and wear in the rear end." },
    ],
    whyItMatters: [
      "A drivability problem rarely fixes itself, and a small leak or noise usually turns into a bigger bill if it waits. We catch it early when we can.",
      "When something does break, we get the truck diagnosed and back to work without the runaround. One shop that already knows your truck saves you time on the next problem too.",
    ],
    process: [
      { step: "Describe the symptom", text: "When it happens and what it feels like. It narrows the search." },
      { step: "We diagnose", text: "Tools and data, not parts-cannon guessing." },
      { step: "We quote the repair", text: "You hear the cause and the cost before we start." },
      { step: "We fix and test", text: "Repaired and run to confirm it is right." },
    ],
    faqs: [
      {
        q: "Can you diagnose a check-engine light?",
        a: "Yes. We read the codes and live data with the right software, then trace the fault to the cause so you are not paying for parts that were not the problem.",
      },
      {
        q: "What size diesel trucks do you work on?",
        a: "We focus on medium-duty trucks and trailers. The exact upper class limit is best confirmed for your specific truck, so call us with the details and we will tell you straight.",
      },
      {
        q: "My truck is hard to start when it is cold. Can you help?",
        a: "Yes. Cold-start problems usually come down to batteries, the fuel system, or intake heating. We test the starting system and fix the actual cause.",
      },
    ],
    related: ["exhaust-emissions", "preventive-maintenance", "steering-suspension"],
  },
  {
    slug: "preventive-maintenance",
    nav: "Preventive Maintenance",
    title: "Preventive maintenance and PM programs for trucks, Douglas County",
    metaTitle: "Scheduled Truck Maintenance & PM Programs, Douglas County | Iron Forge",
    metaDescription:
      "Scheduled preventive maintenance for medium-duty trucks and fleets in Douglas County. Oil, filters, fluids, and full inspections that keep trucks out of the out-of-service pile.",
    keyword: "scheduled truck maintenance Douglas County",
    kicker: "Stay ahead of it",
    cardBlurb:
      "Scheduled service that keeps trucks legal and out of the out-of-service pile. Seasonal prep included.",
    photoDescription: "Oil and filter service on a medium-duty truck on the lift",
    heroSub:
      "Scheduled maintenance for trucks and fleets. The cheapest repair is the breakdown you prevent.",
    problem: [
      "Scheduled truck maintenance in Douglas County is how you keep a truck out of the out-of-service pile instead of reacting to it there. A missed oil change, a worn belt, or brakes nobody looked at become a roadside problem at the worst possible time. Downtime always costs more than the service that would have prevented it.",
      "We build a maintenance schedule around how your trucks actually run, and we keep them on it.",
    ],
    serviceIntro: "Preventive maintenance for single trucks and whole fleets.",
    whatWeService: [
      { label: "Oil, filters, and fluids", text: "Engine oil and filters, fuel and air filters, and the fluids that get forgotten until they fail." },
      { label: "Full PM inspection", text: "Brakes, steering, suspension, tires, lights, and leaks checked on a set interval, so problems surface early." },
      { label: "Belts, hoses, and batteries", text: "The wear items that strand a truck, replaced before they let go." },
      { label: "Seasonal prep", text: "Cooling and heating, batteries, and winter readiness before the weather turns." },
      { label: "DOT inspection paired with PM", text: "Run the annual DOT inspection with a service visit and handle anything it flags in one stop." },
      { label: "Records you can use", text: "A record of what was done and what is coming due." },
    ],
    whyItMatters: [
      "Preventive maintenance is the difference between scheduling downtime and having it forced on you. It also keeps trucks passing inspections, because most violations come from wear a regular PM would have caught.",
      "For a fleet, that adds up to fewer surprise out-of-service trucks and a more predictable week.",
    ],
    process: [
      { step: "We learn the trucks", text: "What they are, how hard they run, and where they have given trouble." },
      { step: "We set the schedule", text: "Intervals that fit the work, not a generic calendar." },
      { step: "We service and inspect", text: "Each visit, we do the service and look the truck over." },
      { step: "We tell you what is coming", text: "So the next repair is planned, not a surprise." },
    ],
    faqs: [
      {
        q: "Do I need a PM program if my trucks seem fine?",
        a: "A truck that seems fine is the best time to set one up. Preventive maintenance catches wear before it becomes a breakdown or a violation, which is far cheaper than fixing it on the side of the road.",
      },
      {
        q: "Can you do preventive maintenance for a whole fleet?",
        a: "Yes. We build PM schedules around your fleet and track what is due, so trucks stay compliant and on the road. See our fleet page for how that works.",
      },
      {
        q: "Can you do my DOT inspection at the same time?",
        a: "Yes, and it is the smart way to do it. We pair the annual DOT inspection with a service visit and fix anything it flags in the same stop.",
      },
    ],
    related: ["brake-repair", "steering-suspension", "tires"],
  },
  {
    slug: "snow-plows",
    nav: "Snow Plows",
    title: "Snow plow sales and service, Boss and SnowEx, Colorado",
    metaTitle: "Boss & SnowEx Snow Plow Sales and Service, Colorado | Iron Forge",
    metaDescription:
      "Snow plow sales and service for Boss and SnowEx in Colorado. Plow hydraulics, controllers, cutting edges, and wiring serviced before the storm. Get ready for winter.",
    keyword: "Boss snow plow dealer Colorado",
    kicker: "Seasonal",
    cardBlurb: "Boss and SnowEx plow sales and service. Get the plow ready before the first storm.",
    photoDescription: "A Boss or SnowEx plow on a truck in the yard, or a plow on the service bench",
    heroSub:
      "Boss and SnowEx plow sales and service. We get the plow working before the snow flies, and fix it when it does not.",
    problem: [
      "A snow plow that will not lift or angle at four in the morning before a route is a problem you cannot afford. We sell and service Boss and SnowEx plows and get them ready before winter, so the first storm is not the test.",
      "When a plow goes down mid-season, we get it back in the fight.",
    ],
    serviceIntro: "Plow sales, setup, and service for Boss and SnowEx.",
    whatWeService: [
      { label: "Hydraulics", text: "Pumps, cylinders, hoses, and fluid. The system that lifts and angles the blade." },
      { label: "Controllers and wiring", text: "In-cab controllers, harnesses, and connectors that quit in the cold and wet." },
      { label: "Cutting edges and wear parts", text: "Worn edges, shoes, and trip springs replaced before they chew up the moldboard." },
      { label: "Plow lights", text: "Plow lights aimed and wired so you can see and be seen." },
      { label: "Mounts and setup", text: "Plow mounts and truck-side setup done right for the truck." },
      { label: "Pre-season service", text: "A full check before the season so the plow is ready when you are." },
    ],
    whyItMatters: [
      "A plow truck only earns when the plow works. The time to find a bad solenoid or a cracked hose is in the shop in the fall, not in a parking lot during a storm.",
      "We service the plow and the truck under it, so the whole rig is ready.",
    ],
    process: [
      { step: "Bring it in before the season", text: "Fall is the time. We check the whole system." },
      { step: "We test and service", text: "Hydraulics, controls, wiring, and wear parts." },
      { step: "We fix what is worn", text: "Before it strands you mid-route." },
      { step: "Mid-season support", text: "If it goes down in the snow, get it to us and we will get it going." },
    ],
    faqs: [
      {
        q: "Do you sell Boss and SnowEx plows or only service them?",
        a: "We work on and sell Boss and SnowEx plows and set them up on your truck. Call us with your truck and the area you cover and we will help you spec the right plow.",
      },
      {
        q: "When should I bring my plow in for service?",
        a: "Before the season, in the fall. That is when we can find a weak hydraulic pump or a cracked hose without it costing you a route. We also handle mid-season repairs when a plow goes down.",
      },
      {
        q: "My plow will not lift or angle. Can you fix it?",
        a: "Yes. Most lift and angle problems come down to hydraulics, the controller, or the wiring. We test the system, find the fault, and get the blade moving again.",
      },
    ],
    related: ["preventive-maintenance", "lighting-electrical", "engine-drivetrain"],
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
