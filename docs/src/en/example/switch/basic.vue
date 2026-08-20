<template>
  <bp-space>
    <bp-switch v-model="val"></bp-switch>
    <bp-switch v-model="val" disabled></bp-switch>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref(true);
</script>
