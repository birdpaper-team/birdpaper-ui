<template>
  <div style="display: flex; gap: 20px">
    <bp-steps v-model="current" type="horizontal">
      <bp-step description="填写信息">步骤一</bp-step>
      <bp-step description="审核中">步骤二</bp-step>
      <bp-step description="完成">步骤三</bp-step>
    </bp-steps>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(1);
</script>
