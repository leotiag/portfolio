import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://leotiag.netlify.app",
  server: {
    port: 3000
  },
  integrations: [tailwind()]
});