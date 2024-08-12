<template>
  <div :class="name">
    <div :class="`${name}-area`" v-if="demoComponent">
      <component :is="demoComponent"></component>
    </div>
    <div :class="`${name}-footer`">
      <demo-option></demo-option>
    </div>

    <!-- v-html="decodeURIComponent(codeStr)" -->
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, markRaw, onMounted, ref } from "vue";
import demoOption from "./demo-option.vue";

const name = "demo-block";
const props = defineProps({
  // Demo src
  src: { type: String },
  codeStr: { type: String, default: "" },
});

const exampleGlob = import.meta.glob(`../../../../example/**/*.vue`);
/** 示例文件组件 */
const demoComponent = ref();

const init = async () => {
  demoComponent.value = markRaw(
    defineAsyncComponent(
      exampleGlob[`../../../../example/${props.src}.vue`] as any
    )
  );
};
onMounted(() => {
  init();
});
</script>
