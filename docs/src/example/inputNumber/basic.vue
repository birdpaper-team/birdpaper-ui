<template>
  <bp-space type="vertical">
    <bp-input-number
      size="default"
      :style="{ width: '180px' }"
      v-model="val"
      :precision="4"
      :step="0.001"
      :max="5"
      :min="-1"
      placeholder="Please enter"
    ></bp-input-number>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<number>(2);
</script>
