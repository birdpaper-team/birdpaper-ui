<template>
  <bp-switch v-model="val" check-text="On" uncheck-text="Close"></bp-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref(false);
</script>
