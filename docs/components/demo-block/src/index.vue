<template>
  <div class="demo-block">
    <!-- 代码演示 -->
    <div class="demo-block-area" v-if="demoComponent">
      <component :is="demoComponent"></component>
    </div>

    <!-- 操作区域 -->
    <div class="demo-block-footer">
      <div :class="['icon-item', { active: showCode }]" @click="showCode = !showCode">
        <i class="ri-code-s-slash-line"></i>
      </div>
    </div>

    <!-- 源码 -->
    <div :class="['demo-block-source', { 'source-open': showCode }]">
      <div class="demo-block-source-inner" v-html="decodeURIComponent(codeString)"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="demo-block">
import { defineAsyncComponent, markRaw, onMounted, ref } from "vue";

interface Prop {
  src: string;
  codeString?: string;
  lang?: string;
}
const props = withDefaults(defineProps<Prop>(), {
  src: "",
  codeString: "",
  lang: "vue",
});

const exampleGlob = import.meta.glob(`../../../src/example/**/*.vue`);
/** 示例文件组件 */
const demoComponent = ref();
/** 是否展示源码 */
const showCode = ref<boolean>(false);

onMounted(() => {
  init();
});

const init = () => {
  demoComponent.value = markRaw(defineAsyncComponent(exampleGlob[`../../../src/${props.src}.vue`] as any));
};
</script>

<style lang="less" scoped>
:deep(.min-light) {
  background: none !important;
}
</style>
