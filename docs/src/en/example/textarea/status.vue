<template>
  <bp-space>
    <bp-textarea v-model="txt" clearable placeholder="Enter content" />
    <bp-textarea readonly v-model="txt" placeholder="Enter content" />
    <bp-textarea disabled v-model="txt" placeholder="Enter content" />
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("Text content");
</script>
