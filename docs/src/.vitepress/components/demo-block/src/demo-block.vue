<template>
  <div :class="[name, { open: showCode }]">
    <div :class="`${name}-area`" v-if="demoComponent">
      <component :is="demoComponent"></component>
    </div>
    <div :class="`${name}-footer`">
      <demo-option v-model="showCode"></demo-option>
    </div>

    <div :class="[`${name}-code`]">
      <div :class="`${name}-code-inner`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, markRaw, ref } from "vue";
import demoOption from "./demo-option.vue";

const name = "demo-block";
const props = defineProps({
  // Demo src path
  src: { type: String },
});

/** Show code is or not. */
const showCode = ref<boolean>(false);

/** The component which this demo. */
const demoComponent = ref();

/** Glob */
const exampleGlob = import.meta.glob(`../../../../example/**/*.vue`);

/**
 * Demo init
 * Set defineAsyncComponent.
 */
const init = async (src?: string) => {
  const path = `../../../../example/${src || props.src}.vue`;
  demoComponent.value = markRaw(defineAsyncComponent(exampleGlob[path] as any));
};
init();

defineExpose({
  init,
});
</script>
