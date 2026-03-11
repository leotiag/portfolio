import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Remplace 'portfolio' par le nom de ton repository GitHub
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [tailwind()],
  // Ajouter cette ligne
  base: '/portfolio/', 
});