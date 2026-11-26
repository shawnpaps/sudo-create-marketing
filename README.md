# Sudo Create

Sudo Create is an independent Tampa Bay design and development studio building custom websites, applications, and storefronts for businesses and founders.

This repository contains the public Astro site in `client/`. Project case studies live alongside the code as Markdown content and are validated by an Astro content collection.

## Local development

Use Node 22 LTS and npm.

```bash
cd client
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Adding a project

1. Add the project cover to `client/public/project-covers/`.
2. Create a Markdown file in `client/src/content/projects/`.
3. Fill in the validated frontmatter and write the case study below it. Use `classification` for client work or studio products, and set `service` when a case study maps to an inquiry category. The optional `coverSmall` field pairs a 720w screenshot with the 1440w cover. Use `socialImage` for an approved project-specific sharing image.

The homepage and work index are generated from the collection automatically. The project filename becomes its URL: `boardstate.md` becomes `/work/boardstate/`.

## Vercel deployment

Create one Vercel project from this repository.

- Root directory: `client`
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Before production deploy

1. Confirm the four project pages and their live-site links.
2. Run an approved FormSubmit submission with the intended destination and confirm the email arrives from that environment. Activate the destination if FormSubmit requires it.
3. Verify the homepage, project index, one project detail page, and inline inquiry confirmation on mobile and desktop. See [conversion and verification notes](docs/conversion-refinement.md) for optional analytics configuration and release checks.

## Customer references

Homepage reviews live in `client/src/content/testimonials/*.md`, using the same Astro
content-collection architecture as projects. Keep the complete review verbatim in the
Markdown body. Frontmatter defines `displayName`, nullable `role` and `company`,
`rating` (1–5), optional `source`, `featured`, and `sortOrder`.

Only featured records appear, ordered by `sortOrder`. Use public-facing abbreviated
names only; do not add private reviewer names to filenames, frontmatter, or bodies.
Business-owner roles and organizations should only be added when supplied by the
reviewer. Desktop shows the entire review; screens up to 700px show the first
sentence with a native, keyboard-accessible disclosure containing the full review.
Content changes are published with the normal Astro build/deploy.
