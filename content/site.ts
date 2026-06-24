// Global business facts. Single source of truth for NAP, nav, and positioning.
// Unconfirmed facts are left null and surfaced as [CONFIRM WITH WILL] in the UI.

export const SITE = {
  name: "Iron Forge Commercial Repair",
  shortName: "Iron Forge",
  url: "https://www.ironforgecolorado.com",
  tagline:
    "In-shop DOT inspections and full repair for medium-duty commercial trucks and trailers.",

  phoneDisplay: "720.312.7095",
  phoneHref: "tel:+17203127095",

  address: {
    street: "7144 Reynolds Drive",
    city: "Sedalia",
    state: "CO",
    zip: "80135",
  },
  addressLine: "7144 Reynolds Drive, Sedalia, CO 80135",

  hours: "Open Tuesday to Friday, 7am to 5pm",
  hoursStructured: [
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
  ],

  // [CONFIRM WITH WILL] founding year. The approved concept anchors on 2012.
  founded: "2012",

  // [CONFIRM WITH WILL] preferred domain email (e.g. will@ironforgecolorado.com).
  // Left null on purpose. Do not publish an unconfirmed address.
  email: "IronForge80135@gmail.com" as string | null,

  corridor: "the I-25 corridor between Castle Rock and Colorado Springs",
  county: "Douglas County",
  social: {
    facebook: "https://www.facebook.com/IronForgeTrailers",
    youtube: "https://www.youtube.com/@IronForgeCommercialRepair",
    instagram: "https://www.instagram.com/ironforgecommercialrepair/",
    x: "https://x.com/ironforgerepair",
  },

  // The positioning spine, given by the owner brief (not an invented stat).
  moat:
    "the only shop that runs your DOT inspection and fixes what it flags under one roof, between Castle Rock and Colorado Springs",
} as const;

// Primary navigation. Vehicle Scale, Service Area, FAQ, and Blog live in the footer
// so every page stays reachable without crowding the top bar.
export const NAV = [
  { label: "Services", href: "/services" },
  { label: "DOT Inspections", href: "/dot-inspection" },
  { label: "Fleet", href: "/fleet" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV = {
  services: {
    title: "Services",
    links: [
      { label: "DOT Inspections", href: "/dot-inspection" },
      { label: "Brake Repair", href: "/services/brake-repair" },
      { label: "Tires", href: "/services/tires" },
      { label: "Lighting & Electrical", href: "/services/lighting-electrical" },
      { label: "Preventive Maintenance", href: "/services/preventive-maintenance" },
      { label: "All Services", href: "/services" },
    ],
  },
  company: {
    title: "Shop",
    links: [
      { label: "About", href: "/about" },
      { label: "Fleet Services", href: "/fleet" },
      { label: "Contractors", href: "/contractors" },
      { label: "Landscaping", href: "/landscaping" },
      { label: "Certified Vehicle Scale", href: "/vehicle-scale" },
      { label: "Contact & Booking", href: "/contact" },
    ],
  },
  resources: {
    title: "Coverage & Resources",
    links: [
      { label: "Service Area", href: "/service-area" },
      { label: "DOT & Fleet Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
} as const;

export const BOOK_LABEL = "Book a DOT Inspection";
export const BOOK_HREF = "/contact#book";
