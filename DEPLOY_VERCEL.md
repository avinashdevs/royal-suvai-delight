# Deploying Royal Suvai to Vercel

This project is built with TanStack Start (Vite) and works on Vercel out of the box.

## One-time setup

1. Push this repo to GitHub (use the **GitHub** button in Lovable → Connect → Create Repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Vercel will auto-detect Vite. Confirm these settings (already set in `vercel.json`):
   - **Build Command:** `vite build`
   - **Output Directory:** `.output/public`
   - **Install Command:** `npm install`
4. Click **Deploy**. Done.

## Custom domain
In Vercel → Project → Settings → Domains, add your domain and follow the DNS instructions.

## Notes
- This site is fully client-side (no server functions), so it deploys as a static SPA on Vercel's CDN — fast and free on the Hobby plan.
- The `rewrites` rule in `vercel.json` ensures deep links like `/menu` and `/booking` work on refresh.
