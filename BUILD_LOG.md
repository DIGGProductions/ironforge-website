# Iron Forge Website — Build Log

Running record of decisions, status, and open items. Newest notes at the bottom of each section.

## Stack and workflow
- Next.js 14 (App Router) + TypeScript, Tailwind CSS 3, MDX for blog posts.
- Pinned to Next 14 / React 18 / Tailwind 3 for a reliable, well-understood build.
- Fonts are self-hosted (Saira Condensed, Inter, JetBrains Mono) via `next/font/local`,
  sourced from the `@fontsource` packages. The build environment cannot reach Google
  Fonts, and self-hosting is also better for performance and privacy.
- Design tokens mirrored into the Tailwind theme and as CSS variables (metallic gradient,
  spec-plate details).

## Key decisions
- No welding and fabrication anywhere (hard rule). The copy brief still listed it and a
  `/services/welding-fabrication` page; both are removed. The homepage's 4th service card
  is Lighting & Electrical, matching the approved "with photos" concept.
- Primary nav: Services, DOT Inspections, Fleet, About, Contact. Vehicle Scale, Service
  Area, FAQ, and Blog are reachable from the footer (no orphans).
- Booking is a single reusable form component. No real endpoint or scheduler is connected
  yet, so on submit it routes people to the phone and shows a clear flag.
- Photos: styled placeholders are in place per the shot list; owner supplies real images
  at the end (Phase 8).

## Open items — [CONFIRM WITH WILL]
1. Exact business name and any DBA (using "Iron Forge Commercial Repair").
2. Founding year. Approved concept anchors on 2012; copy says "since 2012" / "more than a decade."
3. DOT inspection price and shop labor rate (no price published yet).
4. Upper vehicle-class limit served (using "medium-duty trucks and trailers").
5. Snow plow dealer status (Boss / SnowEx) and which lines.
6. Certified scale: certification, hours, pricing.
7. Which services to market hardest right now.
8. Whether any client names or logos can be used as proof.
9. Booking method: form service or scheduler (e.g. Cal.com / Calendly) to wire the form to.
10. Preferred contact email (domain email reads better than a gmail). Not published until confirmed.
11. Social profile links for the footer (omitted for now to avoid dead links).
12. Vehicle scale exact location detail / approach on the property.

## Phase status
- Phase 0 (Setup & foundation): DONE. Scaffold, tokens, fonts, nav, footer, component
  shells, homepage, custom 404. Production build passes.
