<template>
  <bp-textarea :style="{ width: '380px' }" v-model="val" clearable placeholder="Please input"></bp-textarea>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
