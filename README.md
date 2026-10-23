# Sudo Create

Sudo Create is an independent software development studio building apps, websites, and e-commerce for creative businesses and creative people.

This repository contains two separately deployed applications:

- `client/` — the public Astro site
- `cms/` — Payload CMS on Next.js

## Local development

Use Node 22 LTS and pnpm.

```bash
cd client
cp .env.example .env
pnpm install
pnpm dev
```

In a second terminal:

```bash
cd cms
cp .env.example .env
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`; Payload runs at `http://localhost:3000/admin`.

## Content model

- **Projects** — software, website, commerce, and studio-product work
- **Services** — capabilities and deliverables
- **Testimonials** — approved client quotes
- **Media** — images stored in Vercel Blob
- **Site settings** — studio description, contact details, availability, and social links

The frontend loads published Projects from Payload at runtime. If the CMS is unavailable, it deliberately falls back to the bundled Tourpass example so the public page does not collapse.

## Vercel deployment

Create two Vercel projects from this repository.

### Public site

- Root directory: `client`
- Framework preset: Astro
- Environment variable: `PUBLIC_PAYLOAD_URL=https://your-cms-project.vercel.app`

### CMS

- Root directory: `cms`
- Framework preset: Next.js
- Connect a Neon database and set `DATABASE_URL` to its pooled connection string
- Connect a Vercel Blob store; Vercel supplies `BLOB_READ_WRITE_TOKEN`
- Set `PAYLOAD_SECRET`, `SERVER_URL`, and `CORS_ORIGINS`

For production, `SERVER_URL` must be the CMS origin and `CORS_ORIGINS` must include the public site’s production and preview origins. Media uploads use direct client uploads to avoid Vercel’s server upload-size limit.

## Before first production deploy

1. Deploy the CMS and create the first Payload admin user.
2. Add the three Services records and the initial Projects records.
3. Set the public site’s `PUBLIC_PAYLOAD_URL` to the CMS URL.
4. Deploy the public site and add its URL to `CORS_ORIGINS` in the CMS.
5. Verify one media upload, one published project, the contact form, and both mobile and desktop layouts.
