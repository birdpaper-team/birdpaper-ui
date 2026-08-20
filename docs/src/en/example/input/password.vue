<template>
  <bp-input v-model="psw" type="password" style="width: 180px" clearable placeholder="Enter password" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const psw = ref("");
</script>
