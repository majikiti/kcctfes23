import { defineConfig } from "astro/config"
import swup from "@swup/astro"

export default defineConfig({
  site: "https://kcctfes23.kobe-kosen.org",
  scopedStyleStrategy : "class",
  integrations: [swup({ theme: false })],
})
