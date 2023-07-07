<template>
  <div class="home-page">
    <banner />
    <quick-entry />
    <start-entry />
  </div>

  <site-footer />
</template>

<script setup lang="ts">
import banner from "./components/banner.vue";
import quickEntry from "./components/quick-entry.vue";
import startEntry from "./components/start-entry.vue";
import siteFooter from "./components/site-footer.vue";
</script>
