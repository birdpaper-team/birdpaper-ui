<template>
  <bp-verify-code v-model="code"></bp-verify-code>
</template>

<script setup lang="ts">
import { ref } from "vue";
const code = ref<string>("");
</script>
