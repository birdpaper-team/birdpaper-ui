<template>
  <bp-space>
    <bp-radio v-model="val" :value="0">选项</bp-radio>
    <bp-radio disabled :value="1">选项禁用</bp-radio>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(0);
</script>
