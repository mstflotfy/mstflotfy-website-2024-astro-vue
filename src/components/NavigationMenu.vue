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

      <NavigationMenuItem>
        <NavigationMenuTrigger class="NavigationMenuLink" href="">
          <Icon icon="ic:round-dark-mode" aria-hidden class="icon-clr" />
        </NavigationMenuTrigger>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink class="NavigationMenuLink" :href="yt" target="_blank">
          <Icon icon="mdi:youtube" aria-hidden class="icon-sml" />
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="NavigationMenuLink" href="">
          <Icon icon="ic:round-email" aria-hidden class="icon-sml" />
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink class="NavigationMenuLink" href="/selfmastery" >
          SelfMastery
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink class="NavigationMenuLink" :href="one" target="_blank">
          OneExercise
        </NavigationMenuLink>
      </NavigationMenuItem>

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
</style>