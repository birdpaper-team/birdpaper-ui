<template>
  <bp-button @click="handleOpen">异步关闭</bp-button>

  <bp-drawer v-model="show" :on-before-ok="handleBeforeOk"></bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = () => {
  show.value = true;
};

const handleBeforeOk = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};
</script>
