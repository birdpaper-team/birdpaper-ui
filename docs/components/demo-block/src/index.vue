<!--
 * @ Author: Sam
 * @ Create Time: 2023-02-18 14:57:46
 * @ Modified by: Sam
 * @ Modified time: 2023-02-20 15:57:43
 * @ Description: 代码演示组件
 -->

<template>
  <div class="demo-block">
    <!-- 代码演示 -->
    <div class="demo-block-area">
      <component v-if="cm" :is="cm"></component>
    </div>

    <!-- 操作区域 -->
    <div class="demo-block-footer">
      <div :class="['icon-item', { active: showCode }]" @click="showCode = !showCode">
        <code-icon theme="filled" size="14" :fill="showCode ? '#434343' : '#8c8c8c'" />
      </div>
    </div>

    <!-- 源码 -->
    <div :class="['demo-block-source', { 'source-open': showCode }]">
      <div class="demo-block-source-inner" v-html="decodeURIComponent(codeString)"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="demo-block">
import { Code as codeIcon } from "@icon-park/vue-next";
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
const showCode = ref<boolean>(false);

const glob = import.meta.glob(`../../../src/example/**/*.vue`);

cm.value = markRaw(defineAsyncComponent(glob[`../../../src/${props.src}.vue`] as any));
</script>

<style lang="less" scoped>
:deep(.min-light) {
  background: none !important;
}
</style>
