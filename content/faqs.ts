import type { FaqItem } from "@/components/Faq";

// DOT inspection page FAQ (drives FAQPage schema on /dot-inspection).
export const DOT_FAQS: FaqItem[] = [
  {
    q: "What is a DOT annual inspection?",
    a: "It is the state-regulated safety inspection that commercial vehicles are required to pass every year. A qualified inspector checks the truck or trailer against federal standards, covering brakes, steering, suspension, tires, lights, the frame, and more. Pass it and the vehicle is certified for the year. Fail it and the flagged items have to be fixed before the vehicle is road-legal.",
  },
  {
    q: "Who needs a DOT inspection?",
    a: "Most commercial trucks and trailers operating in interstate commerce, and many in intrastate commerce, are required to carry a current annual inspection. If your vehicle is registered as commercial and runs for a business, it very likely needs one. If you are not sure, call us and we will help you figure it out.",
  },
  {
    q: "What happens if my truck fails the inspection?",
    a: "This is where one stop matters. A failed item has to be repaired before the truck is legal. A mobile inspector cannot fix it, and a repair-only shop cannot inspect it. We do both, so we fix what we flag in the same visit and get you certified without sending you to a second shop.",
  },
  {
    q: "How long does an inspection take?",
    a: "Plan for it to take part of the day, and call ahead so we can get you scheduled and moving. If the truck passes, you are on your way. If it needs work, we will tell you what we found and what it takes to fix it before we start.",
  },
  {
    q: "What should I bring?",
    a: "Bring the truck or trailer, its registration, and any prior inspection paperwork you have. If the vehicle has a known issue or a recent repair, tell us. The more we know going in, the faster we can move.",
  },
  {
    q: "How often do I need one?",
    a: "The annual inspection recurs every year. The due date is tied to your vehicle, so it comes up on a regular cycle rather than all at once. If you run a fleet, we can track those dates for you so nothing lapses.",
  },
];

// Site-level FAQ (drives FAQPage schema on /faq).
export const SITE_FAQS: FaqItem[] = [
  {
    q: "What kind of trucks do you work on?",
    a: "Medium-duty commercial trucks and trailers. We handle the inspection and the repair, from brakes and tires to lighting, suspension, emissions, and engine and drivetrain work. For the exact upper size we can take, call with your truck and we will tell you straight.",
  },
  {
    q: "What makes Iron Forge different from a mobile inspector or a repair shop?",
    a: "We are the shop that does both. A mobile inspector can fail your truck but cannot fix it. A repair shop can fix it but cannot inspect it. Iron Forge runs the DOT inspection and repairs what it flags under one roof, so a flagged truck does not sit waiting on a second vendor.",
  },
  {
    q: "Where are you, and what areas do you serve?",
    a: "We are at 7144 Reynolds Drive in Sedalia, CO. We serve the I-25 corridor and the towns around it, including Castle Rock, Highlands Ranch, Parker, Monument, Larkspur, Franktown, and Lone Tree.",
  },
  {
    q: "Do you do scheduled maintenance for fleets?",
    a: "Yes. We build preventive maintenance schedules around how your trucks run and track inspection due dates so nothing lapses. One accountable shop for inspection and repair across the whole fleet. See the fleet page for how it works.",
  },
  {
    q: "Can you fix what fails the inspection the same day?",
    a: "Often, yes, depending on the parts. Because inspection and repair happen in the same shop, many failed items get handled in the same visit. Call ahead and we will tell you what to expect for your truck.",
  },
  {
    q: "How do I book?",
    a: "Use the request form on the contact page or call the shop. Tell us the truck and what you need, and we will get you scheduled.",
  },
  {
    q: "Do you have a certified vehicle scale?",
    a: "Yes. We have a vehicle scale on site for weighing trucks. See the vehicle scale page for details, and call ahead to confirm availability before you come by.",
  },
];
