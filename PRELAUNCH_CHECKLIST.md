# Iron Forge — Pre-Launch Checklist

Status as of June 24, 2026: production build passes and all automated QA checks pass. Two technical defects were fixed in this pass (duplicate element IDs on the DOT inspection and Fleet pages). The site is technically ready to deploy. The items below are facts the site states as true (some feed Google through structured data) that should be confirmed with Will before or right after going live.

## Confirm with Will (priority order)

1. **Public email and hours.** The site publishes IronForge80135@gmail.com and "Open Tuesday to Friday, 7am to 5pm." Both are live on the Contact page and in the structured data, and the email also receives every booking-form submission. Confirm both are correct.
2. **Founding year.** The site uses 2012 ("family owned since 2012," "Established 2012") on the homepage and About page.
3. **Certified vehicle scale.** The Vehicle Scale page states the scale is "certified." Confirm that claim is accurate. Hours and pricing already say "call ahead," so only the certified claim needs a check.
4. **Boss and SnowEx plows.** The Snow Plows service and a blog post say the shop sells and services Boss and SnowEx plows. Confirm the sell/dealer wording is accurate.
5. **Owner name spelling.** The About page names the owner "Will Larabee." Confirm the spelling.
6. **Blog stats.** Two posts cite specific 2025 International Roadcheck figures. Verify the numbers and year are current.

## To deploy (from Cursor)

1. Commit and push the project to your connected repo.
2. Vercel auto-builds and deploys. Next.js is auto-detected and there are no environment variables to set.
3. Add the domain ironforgecolorado.com in Vercel, Settings, Domains, then set the DNS records it shows at your registrar.

## Verified clean this pass

Build green, all routes static. No dead links, no orphan pages. All 16 images present. 156 structured-data blocks parse with zero errors. Every page has a title and canonical. No em-dashes, no banned words, no welding, fabrication, or frame repair. No pricing or placeholder text rendered. No leftover dark sections from the light redesign. Phone, address, name, and social links consistent everywhere.
