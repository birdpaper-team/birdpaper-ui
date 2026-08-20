<template>
  <bp-textarea v-model="txt" clearable placeholder="Enter content" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("");
</script>
