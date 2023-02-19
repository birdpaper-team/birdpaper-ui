<!--
 * @ Author: Sam
 * @ Create Time: 2023-02-18 14:57:46
 * @ Modified by: Sam
 * @ Modified time: 2023-02-19 17:00:41
 * @ Description: 代码演示组件
 -->

<template>
  <div class="demo-block">
    <div class="demo-block-area">
      <component v-if="cm" :is="cm"></component>
    </div>
    <div class="demo-block-footer">
      <p>展开</p>
    </div>
    <div class="demo-block-source">
      <div class="demo-block-source-inner" v-html="decodeURIComponent(codeString)"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="demo-block">
import { defineAsyncComponent, markRaw, ref } from "vue";

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

const cm = ref();

const glob = import.meta.glob(`../../../src/example/**/*.vue`);

cm.value = markRaw(defineAsyncComponent(glob[`../../../src/${props.src}.vue`] as any));
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
