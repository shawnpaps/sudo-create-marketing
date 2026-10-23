# Sudo Create

Sudo Create is an independent software development studio building apps, websites, and e-commerce for creative businesses and creative people.

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
3. Fill in the validated frontmatter and write the case study below it.

The homepage and work index are generated from the collection automatically. The project filename becomes its URL: `boardstate.md` becomes `/work/boardstate/`.

## Vercel deployment

Create one Vercel project from this repository.

- Root directory: `client`
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Before production deploy

1. Confirm the four project pages and their live-site links.
2. Submit the contact form once and activate the FormSubmit destination from the email sent to `hello@sudocreate.studio`.
3. Verify the homepage, project index, one project detail page, and the complete contact-to-thanks flow on mobile and desktop.
