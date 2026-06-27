<template>
  <bp-button @click="show = true">全屏 Modal</bp-button>

  <bp-modal v-model="show" title="全屏对话框" fullscreen>
    <p>这是一个全屏对话框，适用于需要大面积展示内容的场景。</p>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>
