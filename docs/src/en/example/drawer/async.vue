<template>
  <bp-button @click="show = true">Async confirm</bp-button>

  <bp-drawer v-model="show" title="Submit confirm" :on-before-ok="handleBeforeOk">
    <p>After confirm, an async action runs and the confirm button enters loading.</p>
  </bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleBeforeOk = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return true;
};
</script>
