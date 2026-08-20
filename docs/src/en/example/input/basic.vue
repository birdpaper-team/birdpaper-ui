<template>
  <bp-space>
    <bp-input placeholder="Enter content" />
    <bp-input v-model="txt" clearable placeholder="Enter content" />
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("Text content");
</script>
