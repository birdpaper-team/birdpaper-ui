<template>
  <bp-space type="horizontal">
    <bp-input v-model="val" :style="{ width: '120px' }" clearable size="mini" placeholder="Mini"></bp-input>
    <bp-input v-model="val" :style="{ width: '130px' }" clearable size="small" placeholder="Samll"></bp-input>
    <bp-input v-model="val" :style="{ width: '140px' }" clearable size="normal" placeholder="Normal"></bp-input>
    <bp-input v-model="val" :style="{ width: '160px' }" clearable size="large" placeholder="Large"></bp-input>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
