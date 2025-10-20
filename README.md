
# Yasaswi — Portfolio (React + Tailwind + Framer Motion)

A fast, animated portfolio built with Vite. Deploys **free** on **GitHub Pages** via Actions.

## Quickstart

```bash
npm i
npm run dev
```

Edit content in `src/data.ts` (name, summary, links, skills, projects, experience).

## Add your resume
Drop your PDF as `public/resume.pdf` (the Hero "Resume" button will pick it up).

## One-click free hosting (GitHub Pages)

1. Create a new GitHub repo (any name, e.g., `yasaswi-portfolio`).
2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/yasaswi-portfolio.git
   git push -u origin main
   ```
3. In the repo → **Settings** → **Pages**:
   - Source: **GitHub Actions** (this repo already has a workflow).

The Action will build and publish to Pages. URL is usually `https://<username>.github.io/<repo>/`.

> **Note:** `vite.config.ts` sets `base` dynamically on CI so assets resolve correctly on Pages.

### Use a custom domain
Add your domain as a CNAME in the Pages settings, and create a DNS CNAME record pointing to `<username>.github.io`.

## Alternative free hosting
- **Netlify**: Connect repo → Build command `npm run build` → Publish dir `dist`.
- **Vercel**: Import repo → Framework: Other → Build `npm run build` → Output `dist`.
