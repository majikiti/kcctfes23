import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import swup from "@swup/astro"

export default defineConfig({
  site: "https://kcctfes23.kobe-kosen.org",
  scopedStyleStrategy: "class",
  integrations: [svelte(), swup({ theme: false })],
})
