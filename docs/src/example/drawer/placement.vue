<template>
  <bp-space :size="16">
    <bp-button @click="handleOpen('right')">右侧弹出</bp-button>
    <bp-button @click="handleOpen('left')">左侧弹出</bp-button>
    <bp-button @click="handleOpen('up')">上方弹出</bp-button>
    <bp-button @click="handleOpen('down')">下方弹出</bp-button>
  </bp-space>

  <bp-drawer v-model="show" :placement title="弹出方向">
    <p>当前弹出方向：{{ placement }}</p>
  </bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
const placement = ref("right");

const handleOpen = (p: string) => {
  placement.value = p;
  show.value = true;
};
</script>
