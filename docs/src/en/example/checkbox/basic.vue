<template>
  <bp-space>
    <bp-checkbox v-model:check="val">Option 1</bp-checkbox>
    <bp-checkbox v-model:check="val" disabled>Disabled option</bp-checkbox>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref(true);
</script>
