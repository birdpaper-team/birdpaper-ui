<template>
  <bp-space type="vertical">
    <bp-verify-code disabled v-model="code"></bp-verify-code>
    <bp-verify-code readonly v-model="code"></bp-verify-code>
    <bp-verify-code is-danger v-model="code"></bp-verify-code>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const code = ref<string>("123456");
</script>
