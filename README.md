# Iron Forge Commercial Repair — Website

The website for Iron Forge Commercial Repair (ironforgecolorado.com), a medium-duty
commercial truck and trailer shop in Sedalia, CO. In-shop DOT inspections and full
repair under one roof, between Castle Rock and Colorado Springs.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 (brand tokens in `tailwind.config.ts`, CSS variables in `app/globals.css`)
- Self-hosted fonts via `next/font/local` (Saira Condensed, Inter, JetBrains Mono) in `/fonts`
- MDX blog posts (`content/posts`)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Where the content lives

- Global facts (NAP, nav, moat): `content/site.ts`
- Services (8 pages): `content/services.ts`
- Service-area cities (7 pages): `content/areas.ts`
- FAQs (DOT page + site FAQ): `content/faqs.ts`
- Blog posts: `content/posts/*.mdx` and `content/posts.ts`

## Photos (drop-in)

Styled placeholders are in place, each labeled with the shot to capture. To use a real
photo, drop the file in `public/images/` and pass `src="/images/<file>"` to the matching
`PhotoSlot` (or the card data object). Suggested names by slot:

- `hero-truck-lift.jpg` — homepage hero, medium-duty truck up on the lift, mid-service
- `card-dot-inspection.jpg` — inspector with clipboard under a truck
- `card-brakes.jpg` — brake drum and chamber close-up
- `card-tires.jpg` — commercial tire being mounted
- `card-lighting.jpg` — tech tracing a trailer wiring harness
- `about-team.jpg` — Will and the team, or the yard lined with Boss plows
- `service-<slug>.jpg` — each service page photo (for example `service-brake-repair.jpg`)

## Deploy to Vercel

Two ways:

1. Push this folder to a Git repo (GitHub/GitLab), then import it at vercel.com. Vercel
   auto-detects Next.js. No config needed. Vercel handles image optimization.
2. Or from this folder: `npx vercel` (it will prompt you to log in the first time), then
   `npx vercel --prod` to ship production.

## Open items

See `BUILD_LOG.md` for the running list of `[CONFIRM WITH WILL]` items to resolve
before launch (price, hours, dealer status, contact email, and more).
