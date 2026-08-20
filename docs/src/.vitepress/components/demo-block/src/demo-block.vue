<template>
  <div :class="[name, { open: showCode }]">
    <div :class="`${name}-area`" v-if="demoComponent">
      <component :is="demoComponent"></component>
    </div>
    <div :class="`${name}-footer`">
      <demo-option v-model="showCode" :src :base-path="exampleBasePath"></demo-option>
    </div>

    <div :class="[`${name}-code`]">
      <div :class="`${name}-code-inner`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, markRaw, ref, watch } from "vue";
import { useData } from "vitepress";
import demoOption from "./demo-option.vue";

const name = "demo-block";
const props = defineProps({
  src: { type: String },
});

const { lang } = useData();
const isEn = computed(() => lang.value === "en");
const exampleBasePath = computed(() => (isEn.value ? "en/example" : "example"));

/** Show code is or not. */
const showCode = ref<boolean>(false);

/** The component which this demo. */
const demoComponent = ref();

// @ts-ignore
const exampleGlobZh = import.meta.glob(`../../../../example/**/*.vue`);
// @ts-ignore
const exampleGlobEn = import.meta.glob(`../../../../en/example/**/*.vue`);

/**
 * Demo init
 * Set defineAsyncComponent.
 */
const init = async (src?: string) => {
  const file = `${src || props.src}.vue`;
  const glob = isEn.value ? exampleGlobEn : exampleGlobZh;
  const prefix = isEn.value ? `../../../../en/example/` : `../../../../example/`;
  const path = `${prefix}${file}`;
  const loader = glob[path] as any;
  if (!loader) {
    console.warn(`[demo-block] demo not found: ${path}`);
    demoComponent.value = undefined;
    return;
  }
  demoComponent.value = markRaw(defineAsyncComponent(loader));
};

watch(
  () => [props.src, lang.value] as const,
  () => init(),
  { immediate: true }
);

defineExpose({
  init,
});
</script>
