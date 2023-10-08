<template>
  <bp-space>
    <bp-input-number :style="{ width: '180px' }" v-model="val" placeholder="请输入"></bp-input-number>
    <bp-input-number :style="{ width: '180px' }" disabled v-model="val" placeholder="请输入"></bp-input-number>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref<number>(16);
</script>
