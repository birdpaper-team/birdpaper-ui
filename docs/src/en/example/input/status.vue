<template>
  <bp-space>
    <bp-input v-model="txt" clearable placeholder="Enter content" />
    <bp-input readonly v-model="txt" placeholder="Enter content" />
    <bp-input disabled v-model="txt" placeholder="Enter content" />
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("Text content");
</script>
