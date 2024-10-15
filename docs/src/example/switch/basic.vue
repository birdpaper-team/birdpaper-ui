<template>
  <bp-space>
    <bp-switch v-model="val" check-text="ON" uncheck-text="OFF"></bp-switch>
    <bp-switch v-model="val" check-text="ON" uncheck-text="OFF" size="mini"></bp-switch>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const val = ref(false);
</script>
