# FloTech — Florian Technologies

Premium marketing website for **FloTech**, the public brand of **Florian Technologies**, a Canadian blockchain technology and software consulting company based in Ontario.

The site is a single page with anchor navigation, built as a fully static export so it can be hosted on **GitHub Pages** with the custom domain **floriantechnologies.ca**. There is no backend, no database, and no secrets.

Core message: **Blockchain infrastructure built for real business.**

---

## Tech stack

- **Next.js 14** (App Router) with **static export** (`output: "export"`)
- **TypeScript**
- **Tailwind CSS** (custom dark, futuristic design system)
- **Framer Motion** (scroll reveals, floating visuals, hover motion, reduced-motion support)
- **lucide-react** (icons)
- **next/font** (Sora, Inter, JetBrains Mono — self-hosted at build time)

No external image services, tracking scripts, or heavy dependencies. All visuals are CSS, SVG, and Framer Motion.

---

## Project structure

```
.
├── app/
│   ├── globals.css        # Design tokens + component classes
│   ├── layout.tsx         # Fonts, SEO metadata, Background + Header
│   └── page.tsx           # Section composition (single page)
├── components/
│   ├── Background.tsx     # Ambient grid + glow blobs
│   ├── Header.tsx         # Sticky nav, scrollspy, mobile menu
│   ├── Hero.tsx           # Headline + animated ledger visual
│   ├── LedgerVisual.tsx   # Signature node-graph + floating cards
│   ├── ValueStrip.tsx     # 4 value points
│   ├── About.tsx
│   ├── Services.tsx       # Blockchain services first, software second
│   ├── Industries.tsx
│   ├── UseCases.tsx       # Bento grid
│   ├── Process.tsx        # 7-step timeline
│   ├── Technology.tsx     # Capability matrix
│   ├── Responsible.tsx    # Responsible blockchain
│   ├── ContactSales.tsx   # "Contact Sales" focal band (no pricing)
│   ├── Contact.tsx        # mailto-based contact form
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── Reveal.tsx         # Scroll-reveal helpers
│   └── Section.tsx        # Section heading helper
├── lib/
│   └── content.ts         # All copy and section data in one place
├── public/
│   ├── CNAME              # floriantechnologies.ca
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og.png             # 1200x630 social image, generated at build time
│   └── .nojekyll          # Required so GitHub Pages serves /_next correctly
├── scripts/
│   └── generate-og.py     # Renders public/og.png (run in CI before build)
├── .github/workflows/
│   └── deploy.yml         # Build + deploy to GitHub Pages
├── next.config.mjs        # Static export config
├── tailwind.config.ts
└── package.json
```

All site text lives in `lib/content.ts`. To tweak copy, edit there and everything updates.

---

## Deploying with GitHub Pages (browser only)

You do not need a local machine. Everything runs in GitHub Actions.

1. **Create the repository and add these files.** Create a new repository on GitHub, then upload this project (drag-and-drop in the GitHub web UI works, or commit through the browser editor). Make sure the default branch is **main**.
2. **Enable Pages via Actions.** In the repository, go to **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. **Trigger a deploy.** Pushing to `main` runs the workflow automatically. You can also run it manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.
4. **Watch it build.** The **Actions** tab shows the `build` and `deploy` jobs. When they finish, the deploy job prints the live URL.

The workflow (`.github/workflows/deploy.yml`):

- runs on every push to `main` (and on manual dispatch),
- installs dependencies with `npm install`,
- renders the social share image to `public/og.png` with `scripts/generate-og.py`,
- builds the static site with `npm run build` (output goes to `out/`),
- uploads `out/` and deploys it to GitHub Pages.

> `public/og.png` is generated during the build (and git-ignored) so the
> repository stays fully reviewable as text; `scripts/generate-og.py` is the
> single source of truth for that image.

---

## Connecting the domain (floriantechnologies.ca)

A `CNAME` file containing `floriantechnologies.ca` is already in `public/`, so it ships with every build.

1. In the repository, go to **Settings → Pages → Custom domain**, enter `floriantechnologies.ca`, and save.
2. At your domain registrar (where you bought floriantechnologies.ca), add DNS records:

   **Apex domain (floriantechnologies.ca) — A records:**
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **Optional IPv6 — AAAA records:**
   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```

   **www subdomain — CNAME record:**
   ```
   www  →  YOUR-GITHUB-USERNAME.github.io
   ```

3. Back in **Settings → Pages**, once DNS propagates, tick **Enforce HTTPS**. Propagation can take from a few minutes to a day.

---

## Setting up business email (contact@floriantechnologies.ca)

The site links to `contact@floriantechnologies.ca`, but the mailbox itself is set up with an email provider. Any of these work with your domain:

- **Google Workspace** — add the domain, verify ownership with a TXT record, then add the provided MX records.
- **Microsoft 365** — add and verify the domain in the Microsoft 365 admin center, then add its MX, CNAME, and TXT records.
- **Zoho Mail** — has a free tier for a custom domain; verify the domain, then add Zoho's MX records.

In every case you add the provider's **MX records** at the same registrar where you set the Pages DNS above. Email MX records and the website A/CNAME records live side by side and do not conflict.

---

## How the contact flow works

GitHub Pages is static, so there is no server to receive form submissions. The contact form is fully functional without a backend:

- The visitor fills in name, company, email, project type, and message.
- On submit, the site builds a `mailto:contact@floriantechnologies.ca` link with the subject and body pre-filled from those fields and opens the visitor's email app.
- A confirmation state explains what happened and shows the direct address as a fallback.
- A separate **Email FloTech** button opens a blank email to the same address.

No data is sent anywhere automatically, and nothing pretends to submit to a server.

### Upgrading the form later

If you want submissions to arrive without the visitor's email app opening, swap the `mailto` handler in `components/Contact.tsx` for a hosted form endpoint. No backend hosting required:

- **Formspree**, **Getform**, or **Basin** — create a form, point the submit handler at the endpoint URL with a `fetch` POST, and submissions land in your inbox or dashboard.
- Or, if you later add a backend or serverless function, POST the form JSON to your own endpoint.

The form state and fields are already in place, so only the submit handler changes.

---

## Running locally (optional, for later)

If you get a local machine, you can run the site with Node.js 18+:

```bash
npm install
npm run dev      # http://localhost:3000
```

To reproduce the production build and preview the static output:

```bash
npm run build    # generates the static site in ./out
npx serve out    # preview the exported files
```

---

## Notes and conventions

- All copy and structured data are centralized in `lib/content.ts`.
- The design system (colors, glass surfaces, buttons, cards, grid) is defined as tokens and component classes in `app/globals.css` and `tailwind.config.ts`.
- Animations respect `prefers-reduced-motion`.
- No secrets, API keys, private keys, or environment variables are used anywhere in the project.

© 2026 Florian Technologies. All rights reserved.
