<template>
  <div class="demo-block">
    <!-- 代码演示 -->
    <div class="demo-block-area" v-if="demoComponent">
      <component :is="demoComponent"></component>
    </div>

    <!-- 操作区域 -->
    <div class="demo-block-footer">
      <bp-space size="mini" justify="flex-end">
        <bp-tooltip content="展示代码">
          <div :class="['icon-item', { active: showCode }]" @click="showCode = !showCode">
            <IconCodeLine size="13" />
          </div>
        </bp-tooltip>
        <bp-tooltip v-if="stackBlitzName" content="在 StackBlitz 中调试">
          <div class="icon-item" @click="handleToStackBlitz">
            <IconFlashlightLine size="13" />
          </div>
        </bp-tooltip>
        <bp-tooltip content="在 Github 上编辑">
          <div class="icon-item" @click="handleToGithub">
            <IconEditLine size="13" />
          </div>
        </bp-tooltip>
      </bp-space>
    </div>

    <!-- 源码 -->
    <div :class="['demo-block-source', { 'source-open': showCode }]">
      <div class="demo-block-source-inner" v-html="decodeURIComponent(codeString)"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="demo-block">
import { IconCodeLine, IconFlashlightLine, IconEditLine } from "birdpaper-icon";
import { defineAsyncComponent, markRaw, onMounted, ref } from "vue";

interface Prop {
  src: string;
  codeString?: string;
  lang?: string;
  stackBlitzName?: string;
}
const props = withDefaults(defineProps<Prop>(), {
  src: "",
  codeString: "",
  lang: "vue",
  stackBlitzName: "",
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

const handleToStackBlitz = () => {
  window.open(`https://stackblitz.com/edit/${props.stackBlitzName}?file=src%2FApp.vue`);
};

const handleToGithub = () => {
  window.open(`https://github.com/birdpaper-team/birdpaper-ui/blob/main/docs/src/${props.src}.vue`);
};
</script>

<style lang="less" scoped>
:deep(.min-light) {
  background: none !important;
}
</style>
