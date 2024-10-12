<template>
  <bp-space>
    <bp-radio v-model="val" :value="0">选项一</bp-radio>
    <bp-radio v-model="val" disabled :value="1">Disabled option</bp-radio>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(1);
</script>
