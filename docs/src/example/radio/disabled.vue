<template>
  <bp-space>
    <bp-radio disabled v-model="val" :value="0">禁用选项</bp-radio>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(0);
</script>
