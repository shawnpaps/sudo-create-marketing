# Sudo Create website

The public Sudo Create website is a static Astro application. Projects are stored as Markdown in `src/content/projects/` and validated by `src/content.config.ts`.

## Project structure

```text
/
├── public/project-covers/
├── src/
│   ├── content/projects/
│   ├── content.config.ts
│   ├── components/
│   └── pages/
└── package.json
```

## Commands

Run these from `client/`:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build |

## Add a project

Add a cover image to `public/project-covers/`, then copy an existing Markdown file in `src/content/projects/` and update its frontmatter and body. The work index and project route are generated automatically.
