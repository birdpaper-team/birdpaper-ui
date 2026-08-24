<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <home-page />
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import DefaultTheme from "vitepress/theme";

/** Lazy-load homepage so it stays out of the critical theme path. */
const HomePage = defineAsyncComponent(() => import("../components/home-page.vue"));

const loadNolebase = () =>
  Promise.all([
    import("@nolebase/vitepress-plugin-enhanced-readabilities/client"),
    import("@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css"),
  ]).then(([mod]) => mod);

const NolebaseEnhancedReadabilitiesMenu = defineAsyncComponent(() =>
  loadNolebase().then((m) => m.NolebaseEnhancedReadabilitiesMenu)
);
const NolebaseEnhancedReadabilitiesScreenMenu = defineAsyncComponent(() =>
  loadNolebase().then((m) => m.NolebaseEnhancedReadabilitiesScreenMenu)
);
</script>
