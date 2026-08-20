<template>
  <bp-space>
    <bp-switch v-for="size in sizes" :size v-model="val"></bp-switch>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sizes = ["small", "mini"];
const val = ref(true);
</script>
