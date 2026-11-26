// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.sudocreate.studio",
  integrations: [
    react(),
    sitemap({ filter: (page) => !["/thanks", "/works"].includes(new URL(page).pathname.replace(/\/$/, "")) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
