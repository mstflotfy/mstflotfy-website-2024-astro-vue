import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import radixVue from "radix-vue";

export default defineConfig({
  integrations: [
    vue(),
    radixVue
  ]
});