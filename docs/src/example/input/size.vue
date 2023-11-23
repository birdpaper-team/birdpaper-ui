<template>
  <bp-space type="horizontal">
    <bp-input v-model="val" :style="{ width: '120px' }" clearable size="mini" placeholder="迷你尺寸"></bp-input>
    <bp-input v-model="val" :style="{ width: '130px' }" clearable size="small" placeholder="小型尺寸"></bp-input>
    <bp-input v-model="val" :style="{ width: '140px' }" clearable size="normal" placeholder="常规尺寸"></bp-input>
    <bp-input v-model="val" :style="{ width: '160px' }" clearable size="large" placeholder="大型尺寸"></bp-input>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
