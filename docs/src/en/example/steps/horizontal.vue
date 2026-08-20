<template>
  <div style="display: flex; gap: 20px">
    <bp-steps v-model="current" type="horizontal">
      <bp-step description="Fill in info">Step 1</bp-step>
      <bp-step description="In review">Step 2</bp-step>
      <bp-step description="Done">Step 3</bp-step>
    </bp-steps>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(1);
</script>
