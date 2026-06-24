# CLAUDE.md — Iron Forge Commercial Repair (website repo)
> Rename this file to **CLAUDE.md** and place it at the ROOT of the website repo. If a CLAUDE.md already exists, MERGE these sections into it. Claude reads this automatically and uses it as context for all work on the site.

## What this project is
The Iron Forge Commercial Repair website — **Next.js (App Router) on Vercel**. Content is MDX/markdown committed to this repo; Vercel builds and deploys. Read this file first. The marketing strategy lives in separate docs (see "Source of truth").

## Business facts
- **Iron Forge Commercial Repair** · 7144 Reynolds Drive, Sedalia, CO 80135 · **(720) 312-7095** · Tue–Fri 7am–5pm (closed Sat/Sun/Mon).
- Owner: **Will Larabee.** Family owned. *(Founding year is inconsistent — site says 2012, GBP says 2013. Use the confirmed year everywhere; ask if unknown.)*
- **Canonical NAP — use EXACTLY, everywhere:** `Iron Forge Commercial Repair · 7144 Reynolds Drive, Sedalia, CO 80135 · (720) 312-7095`
- Socials: Facebook /IronForgeTrailers · Instagram /ironforgecommercialrepair · YouTube /@IronForgeCommercialRepair · X /ironforgerepair.

## The USP — lead with this everywhere
The **only shop on the I-25 corridor between Castle Rock and Colorado Springs that runs your DOT inspection AND fixes what it flags in the same visit.** Tagline energy: *"We fix what we flag."* No second shop, no second trip.

## Focus & scope — RECENT OWNER CHANGES (important)
- **Primary focus: DOT inspections + the repairs that correspond to them** — brakes, tires, lighting/electrical, steering/suspension, exhaust/emissions (DPF/DEF), engine/drivetrain, preventive maintenance.
- **Snow plows: KEEP sales + service only** (Boss & SnowEx). **Do NOT market snow plowing (the operation)** — Will stopped plowing. Reframe the snow-plow page to sales/service.
- **Welding/fabrication: DO NOT advertise.** Will has no fabricator and doesn't do fabrication. *(If he confirms incidental repair-welding, a one-line mention is OK — never a fabrication-shop page.)*
- Vehicles: **medium-duty trucks and trailers.**
- Segments: fleet managers, contractors, landscapers, ranch/ag (Larkspur/Franktown).
- Service-area towns: **Sedalia (base), Castle Rock, Highlands Ranch, Parker, Monument, Larkspur, Franktown, Lone Tree.** Corridor: Castle Rock → Colorado Springs (Douglas/El Paso County).

## Voice & writing rules
- Plain-spoken, confident, **no hype or fluff.** Write for working-truck owners and fleet managers, not marketers. Short sentences, practical first.
- Match the existing site's tone (e.g., "Get your truck road-legal in one stop," "kept legal and kept moving," "we fix what we flag").
- **DOT/FMCSA content must be ACCURATE.** Never invent regulations, thresholds, fines, or prices. Verify against FMCSA primary sources (49 CFR Part 396, etc.) or leave it out. This is a regulated, trust-sensitive niche — accuracy over volume, always.
- Never fabricate reviews, stats, or competitor claims.

## Tech & publishing
- **Publish flow:** draft on a branch → open a PR → review the Vercel preview → **human merge** to publish. Never push straight to `main`. DOT/compliance content always gets human review before merge.
- **URL patterns:** services `/services/<slug>` (DOT lives at `/dot-inspection`); towns `/service-area/<town>`; blog `/blog/<slug>`.
- **Canonical host:** currently the page canonicals point to non-www while the site serves on **www** — fix this. Set the www domain primary in Vercel (301 the apex), set `metadataBase` to the chosen host, ensure per-page canonicals match.
- **GA4:** add via `@next/third-parties` → `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />` in `app/layout.tsx`; set `NEXT_PUBLIC_GA_ID` in Vercel (Measurement ID from Stephen).

## SEO conventions
- Unique `<title>`, meta description, and a single `<h1>` per page (keyword + geo + brand).
- Internal links: town pages → relevant service pages; blog posts → service/town pages; service pages → the DOT page.
- **Schema (JSON-LD):** LocalBusiness/AutoRepair on key pages (NAP, geo, openingHours, sameAs socials); FAQPage where FAQ blocks exist; Service on service pages; BreadcrumbList; BlogPosting on posts. Verify what already exists before adding (Rich Results Test).
- Don't mass-produce near-duplicate pages (Google "scaled content abuse" risk on a small domain). Each town/service page needs genuinely local specifics.

## What's handled OUTSIDE this repo (don't build here)
Google Business Profile optimization, Google Ads, the reviews workflow, and GSC/analytics account setup are managed separately (in the marketing docs / Google accounts), not in the site code.

## Source of truth (reference docs)
`WEBSITE_WORK_ORDER.md` (the ordered task list for this repo) · `IRON_FORGE_GROWTH_PLAN.md` · `GBP_EDITS_PASTE_READY.md` · `GOOGLE_ADS_CAMPAIGN_BUILD.md` · `SETUP_GSC_GA4.md` · `PROJECT_LOG.md`. Start with WEBSITE_WORK_ORDER.md.
