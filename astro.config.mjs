import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import radixVue from "radix-vue";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    vue(),
    radixVue,
    icon({
      include: {
        mdi: ["youtube", "github", "email"], 
      },
    }),
  ]
});