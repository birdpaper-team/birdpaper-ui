<template>
  <div>
    <component :is="cm"></component>
    <div v-html="decodeURIComponent(htmlStr)"></div>
  </div>
</template>

<script setup lang="ts" name="demo-block">
import { defineAsyncComponent, markRaw, ref } from "vue";

const props = defineProps({
  src: { type: String, default: "/example/button/basic" },
  codeStr: { type: String, default: "" },
  htmlStr: { type: String, default: "" },
});

const cm = ref();

const glob = import.meta.glob(`../../../src/example/**/*.vue`);

cm.value = markRaw(defineAsyncComponent(glob[`../../../src${props.src}.vue`] as any));
</script>
