<template>
  code: {{ code }}
  <bp-space type="vertical">
    <!-- <bp-verify-code size="mini"></bp-verify-code>
    <bp-verify-code size="small"></bp-verify-code> -->
    <bp-verify-code v-model="code" size="normal"></bp-verify-code>
    <!-- <bp-verify-code size="large"></bp-verify-code> -->
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const code = ref<string>("");
</script>
