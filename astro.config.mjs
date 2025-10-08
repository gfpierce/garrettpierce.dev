import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: false,
  },
  integrations: [alpinejs(), tailwind(), sanity({
    projectId: "bzkb1ks8",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-08-18",
    studioBasePath: "/studio",
    stega: {
      studioUrl: "/studio",
    },
  }), react()],
});