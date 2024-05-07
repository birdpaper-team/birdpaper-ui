<template>
  <bp-verify-code is-password v-model="code"></bp-verify-code>
</template>

<script setup lang="ts">
import { ref } from "vue";
const code = ref<string>("123456");
</script>
