<template>
  <div :class="name">
    <div :class="`${name}-area`" v-if="demoComponent">
      <component :is="demoComponent"></component>
    </div>
    <div :class="`${name}-footer`">
      <demo-option v-model="showCode"></demo-option>
    </div>

    <div :class="[`${name}-code`, { open: showCode }]">
      <div
        :class="`${name}-code-inner`"
        v-html="decodeURIComponent(codeStr)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, markRaw, onMounted, ref } from "vue";
import demoOption from "./demo-option.vue";

const name = "demo-block";
const props = defineProps({
  // Demo src path
  src: { type: String },
  // Code text (Auto)
  codeStr: { type: String, default: "" },
});

/** 是否展示源码 */
const showCode = ref<boolean>(false);

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
