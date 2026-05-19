# Sudo Create — Portfolio Website Kickoff

> **Project:** sudocreate.com portfolio rebuild  
> **Stack:** Astro (client) + Payload CMS (headless)  
> **Vibe:** Retro/vintage tech — nerdy, creative, fun. Think old terminal UIs, dot-matrix print, CRT scanlines, warm amber/phosphor greens, floppy disk energy with modern execution.

---

## Project Structure

```
sudo-create-portfolio/
├── client/          ← Astro frontend
├── cms/             ← Payload CMS (headless)
└── README.md
```

---

## Task 1 — Scaffold `client/` (Astro)

### 1.1 Create the Astro project

```bash
mkdir sudo-create-portfolio && cd sudo-create-portfolio
npm create astro@latest client -- --template minimal --typescript strict --no-git --install
cd client
```

### 1.2 Add integrations

```bash
# React integration
npx astro add react --yes

# Tailwind CSS integration
npx astro add tailwind --yes
```

### 1.3 Verify `astro.config.mjs`

After adding integrations, `astro.config.mjs` should look like this:

```ts
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
});
```

### 1.4 Base folder structure for `client/`

```
client/
├── public/
│   └── fonts/              ← drop custom/retro fonts here
├── src/
│   ├── components/
│   │   ├── ui/             ← reusable UI primitives
│   │   └── sections/       ← page section components
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work/
│   │   │   └── [slug].astro
│   │   ├── photos/
│   │   │   └── index.astro
│   │   ├── services/
│   │   │   └── index.astro
│   │   ├── pricing/
│   │   │   └── index.astro
│   │   └── tech/
│   │       └── index.astro
│   ├── lib/
│   │   └── payload.ts      ← Payload API fetch helpers
│   └── styles/
│       └── global.css      ← Tailwind base + custom CSS vars
├── tailwind.config.mjs
└── astro.config.mjs
```

### 1.5 Design tokens — `tailwind.config.mjs`

Seed the Tailwind config with the retro/vintage tech design language:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Phosphor / CRT palette
        phosphor: {
          green:  '#39FF14',
          amber:  '#FFB300',
          dim:    '#1A1A0E',
        },
        paper:    '#F5F0E8',  // aged paper / warm off-white
        ink:      '#1C1A14',  // near-black
        rust:     '#B94A2C',  // accent red
        slate:    '#4A5568',
      },
      fontFamily: {
        // TODO: swap these with your chosen retro typefaces
        mono:    ['"Courier Prime"', 'Courier New', 'monospace'],
        display: ['"Special Elite"', 'serif'],   // typewriter feel
        body:    ['"IBM Plex Serif"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'scanlines': "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        'dot-grid':  "radial-gradient(circle, #00000015 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
    },
  },
  plugins: [],
};
```

---

## Task 2 — Scaffold `cms/` (Payload CMS)

### 2.1 Create the Payload project

```bash
cd ..  # back to project root
npx create-payload-app@latest cms --template blank --db mongodb --typescript --no-git
cd cms
```

> **Note:** Swap `--db mongodb` for `--db postgres` if you prefer Postgres.

### 2.2 Collections to scaffold

Create the following collection config files inside `cms/src/collections/`:

---

#### `CaseStudies.ts`

```ts
import { CollectionConfig } from 'payload';

const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title',       type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'client',      type: 'text' },
    { name: 'summary',     type: 'textarea' },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    { name: 'tags',        type: 'array',    fields: [{ name: 'tag', type: 'text' }] },
    { name: 'body',        type: 'richText' },
    { name: 'publishedAt', type: 'date' },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
  ],
};

export default CaseStudies;
```

---

#### `Photos.ts`

```ts
import { CollectionConfig } from 'payload';

const Photos: CollectionConfig = {
  slug: 'photos',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title',       type: 'text' },
    { name: 'image',       type: 'upload', relationTo: 'media', required: true },
    { name: 'caption',     type: 'textarea' },
    { name: 'location',    type: 'text' },
    { name: 'takenAt',     type: 'date' },
    { name: 'tags',        type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    {
      name: 'category',
      type: 'select',
      options: ['event', 'brand', 'portrait', 'product', 'street', 'nature', 'other'],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
};

export default Photos;
```

---

#### `Services.ts`

```ts
import { CollectionConfig } from 'payload';

const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name',        type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'tagline',     type: 'text' },
    { name: 'description', type: 'richText' },
    { name: 'icon',        type: 'text',     admin: { description: 'Icon name or SVG string' } },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    {
      name: 'deliverables',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    { name: 'order', type: 'number', admin: { position: 'sidebar' } },
  ],
};

export default Services;
```

---

#### `Pricing.ts`

```ts
import { CollectionConfig } from 'payload';

const Pricing: CollectionConfig = {
  slug: 'pricing',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name',        type: 'text',    required: true },
    { name: 'tagline',     type: 'text' },
    { name: 'price',       type: 'number' },
    {
      name: 'priceLabel',
      type: 'text',
      admin: { description: 'e.g. "starting at", "/ month", "flat rate"' },
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'feature',   type: 'text' },
        { name: 'included',  type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'highlighted',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mark as featured/recommended tier', position: 'sidebar' },
    },
    { name: 'order', type: 'number', admin: { position: 'sidebar' } },
  ],
};

export default Pricing;
```

---

#### `Projects.ts`
> *Client work — things built for others.*

```ts
import { CollectionConfig } from 'payload';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title',       type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'client',      type: 'text' },
    { name: 'url',         type: 'text' },
    { name: 'summary',     type: 'textarea' },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    { name: 'gallery',     type: 'array',    fields: [{ name: 'image', type: 'upload', relationTo: 'media' }] },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    { name: 'body',        type: 'richText' },
    { name: 'completedAt', type: 'date' },
    { name: 'tags',        type: 'array',    fields: [{ name: 'tag', type: 'text' }] },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
  ],
};

export default Projects;
```

---

#### `Tech.ts`
> *Personal products & tools — things built for Paps/Sudo.*

```ts
import { CollectionConfig } from 'payload';

const Tech: CollectionConfig = {
  slug: 'tech',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name',        type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'tagline',     type: 'text' },
    { name: 'url',         type: 'text' },
    { name: 'repoUrl',     type: 'text' },
    { name: 'summary',     type: 'textarea' },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    { name: 'body',        type: 'richText' },
    {
      name: 'stack',
      type: 'array',
      fields: [{ name: 'tech', type: 'text' }],
      admin: { description: 'e.g. Next.js, Supabase, Stripe' },
    },
    {
      name: 'status',
      type: 'select',
      options: ['concept', 'in-progress', 'live', 'archived'],
      defaultValue: 'concept',
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    { name: 'launchedAt', type: 'date', admin: { position: 'sidebar' } },
  ],
};

export default Tech;
```

---

### 2.3 Wire collections into `payload.config.ts`

```ts
import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import CaseStudies  from './collections/CaseStudies';
import Photos       from './collections/Photos';
import Services     from './collections/Services';
import Pricing      from './collections/Pricing';
import Projects     from './collections/Projects';
import Tech         from './collections/Tech';

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || 'http://localhost:3001',
  admin: {
    user: 'users',
  },
  editor: lexicalEditor({}),
  collections: [
    CaseStudies,
    Photos,
    Services,
    Pricing,
    Projects,
    Tech,
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  typescript: {
    outputFile: './payload-types.ts',
  },
});
```

---

## Task 3 — Environment Files

### `cms/.env`
```env
PAYLOAD_SECRET=your-secret-here
MONGODB_URI=mongodb://localhost:27017/sudo-create
PAYLOAD_URL=http://localhost:3001
```

### `client/.env`
```env
PAYLOAD_URL=http://localhost:3001
```

---

## Design Direction Notes

> For the AI agent scaffolding the visual layer — here's the vibe:

- **Aesthetic:** Vintage terminal meets indie zine. CRT phosphor glow, dot-matrix grids, typewriter fonts, worn paper textures.
- **Color palette:** Dark mode base — deep `#1A1A0E` backgrounds, `#FFB300` amber accents, `#39FF14` phosphor green for interactive states, warm `#F5F0E8` paper for light sections.
- **Typography:** Monospaced body, typewriter-style display headings. Reference: old IBM manuals, Letraset catalogs, early computer magazines.
- **Interactions:** Subtle scanline overlays, cursor blink animations, "boot sequence" page transitions, hover states that feel like terminal cursor highlighting.
- **Layout:** Grid-breaking asymmetry. Mix of dense info-columns and generous negative space. Stamp/label UI elements. Navigation that feels like a BBS menu.

---

## Dev Scripts

```bash
# Run both in parallel (from project root)
cd cms  && npm run dev  # → localhost:3001
cd client && npm run dev  # → localhost:4321
```

---

## Next Steps (after scaffold)

- [ ] Design system tokens finalized (fonts locked in, color vars in global.css)
- [ ] `BaseLayout.astro` built with nav + footer
- [ ] Payload API helper (`lib/payload.ts`) wired up
- [ ] Homepage scaffold
- [ ] Individual collection page templates
- [ ] Media/image optimization strategy (Astro Image + Payload upload config)
