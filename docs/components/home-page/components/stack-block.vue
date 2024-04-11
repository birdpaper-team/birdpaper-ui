<template>
  <div class="stack-box">
    <div id="embed"></div>
  </div>
</template>

<script setup lang="ts">
import sdk from '@stackblitz/sdk';
import { nextTick, onMounted } from "vue";
import { useData } from "vitepress";

const init = () => {
  if (!window.location.href.includes("birdpaper")) return;

  sdk.embedProjectId(
      'embed',
      'birdpaper-ui',
      {
        // forceEmbedLayout: true,
        // clickToLoad: true,
        theme: 'light',
        openFile: 'src/App.vue',
        hideNavigation: true,
        height: 640
      }
  );
}
onMounted(() => {
  nextTick(() => init());
})

</script>
