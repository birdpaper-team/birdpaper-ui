<template>
  <bp-space type="vertical">
    <bp-input-number :style="{ width: '180px' }" :precision="2" v-model="val" placeholder="请输入"></bp-input-number>
    <bp-input-number :style="{ width: '180px' }" :step="0.01" v-model="val1" placeholder="请输入"></bp-input-number>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<number>(16);
const val1 = ref<number>();
</script>
