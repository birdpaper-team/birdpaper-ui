<template>
  <bp-space :size="16">
    <bp-button @click="handleOpen('right')">Popup right</bp-button>
    <bp-button @click="handleOpen('left')">Popup left</bp-button>
    <bp-button @click="handleOpen('up')">Popup top</bp-button>
    <bp-button @click="handleOpen('down')">Popup bottom</bp-button>
  </bp-space>

  <bp-drawer v-model="show" :placement title="Placement">
    <p>Current placement: {{ placement }}</p>
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
