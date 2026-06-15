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

## Phase status (updated)
- Phase 0 Setup & foundation: DONE.
- Phase 1 Copy: DONE. All pages written in voice. Rule checks pass (no em-dashes, no banned words, no fabrication).
- Phase 2 Homepage: DONE. Matches approved concept (hero, spec plate, proof bar, services preview, about band, fleet/coverage, CTA).
- Phase 3 DOT Inspection: DONE. Conversion engine with depth, spec-plate echo, booking form, FAQ, schema.
- Phase 4 Services hub + 8 service pages: DONE. Templated, specific, each with FAQ, related links, schema.
- Phase 5 Fleet + Vehicle Scale: DONE.
- Phase 6 Service-area hub + 7 city pages: DONE. Unique local content per city, no duplicated body text.
- Phase 7 About, Contact (form + map), FAQ, Blog (hub + 8 MDX posts): DONE.
- Phase 8 Photos: styled placeholders in place to the shot list. Awaiting owner photos to swap in.
- Phase 9 SEO/QA/deploy: metadata, JSON-LD (LocalBusiness/AutoRepair, Service, FAQPage, Article, Breadcrumb), sitemap.xml, robots.txt done. Production build passes (38 static routes). Deploy to Vercel pending owner account.

## Acceptance checklist (self-run)
- Every sitemap page exists and is reachable from nav or footer: PASS.
- Every internal link resolves, no dead links or orphan pages: PASS.
- Every CTA goes to booking or the phone (tap-to-call on mobile): PASS.
- No welding/fabrication or frame repair anywhere: PASS.
- No em-dashes and no banned words: PASS.
- No invented numbers; unconfirmed facts flagged: PASS.
- Area pages unique, not duplicated: PASS.
- Schema present; titles and meta descriptions on every page: PASS.
- NAP identical across footers (global Footer component): PASS.
- Custom on-brand 404: PASS.
- Reduced motion respected; keyboard focus visible; images have alt text: PASS.
- Lighthouse 95+: to confirm on the deployed URL (no headless browser in build env).
