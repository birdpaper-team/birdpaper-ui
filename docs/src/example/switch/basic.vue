<template>
  <bp-switch v-model="val" :on-before-ok="handleBeforeOk"></bp-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const val = ref(false);

const handleBeforeOk = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};
</script>