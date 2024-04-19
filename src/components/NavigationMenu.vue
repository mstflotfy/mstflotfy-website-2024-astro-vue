<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'

import '../styles/radix/navigationMenu.css'

import NavigationMenuListItem from './NavigationMenuListItem.vue'

const currentTrigger = ref('')

const yt = 'https://www.youtube.com/c/mstflotfyindieDev'
const one = 'https://oneexercise.mstflotfy.com'
</script>

<template>
  <NavigationMenuRoot v-model="currentTrigger" class="NavigationMenuRoot">
    <NavigationMenuList class="NavigationMenuList">

      <NavigationMenuItem>
        <NavigationMenuLink class="NavigationMenuLink mstflotfy-home" href="/">
          mstflotfy
        </NavigationMenuLink>
      </NavigationMenuItem>

      <div class="Nav__actions">

        <NavigationMenuItem>
          <NavigationMenuTrigger class="NavigationMenuLink" href="">
            <Icon icon="ic:round-dark-mode" aria-hidden class="icon-clr" />
          </NavigationMenuTrigger>
        </NavigationMenuItem>

        <div class="contact">
          <NavigationMenuItem>
            <NavigationMenuLink class="NavigationMenuLink" :href="yt" target="_blank">
              <Icon icon="mdi:youtube" aria-hidden class="icon-sml" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink class="NavigationMenuLink" href="mailto:contact@mstflotfy.com" target="_blank">
              <Icon icon="ic:round-email" aria-hidden class="icon-sml" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        <NavigationMenuItem>
          <NavigationMenuLink class="NavigationMenuLink page" href="/selfmastery">
            SelfMastery
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink class="NavigationMenuLink page cta" :href="one" target="_blank">
            OneExercise
          </NavigationMenuLink>
        </NavigationMenuItem>

      </div>
    </NavigationMenuList>

    <div class="ViewportPosition">
      <NavigationMenuViewport class="NavigationMenuViewport" />
    </div>
  </NavigationMenuRoot>
</template>

<style scoped>
  .icon-clr {
    font-size: 2.4rem;
  }
  .icon-sml {
    font-size: 1.6rem;
  }
  .page {
    font-family: Caveat;
    font-size: 24px;
    font-weight: 500;
  }
  .cta {
    background-color: #8CDBE2;
    text-align: center;
    padding: 1.6rem 2rem 1.6rem 1.6rem;
    border-radius: 1.6rem;
  }
  .contact {
    display: flex;
  }
  .NavigationMenuLink:has(.icon-sml) {
    padding: 0.6rem;
  }
  .Nav__actions {
    display: flex;
    padding: 0.8rem 0.8rem;
    gap: 2.1rem;
  }
</style>