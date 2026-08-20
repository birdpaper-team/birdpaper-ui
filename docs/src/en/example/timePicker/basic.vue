<template>
  <bp-time-picker v-model="time" :style="{ width: '180px' }" clearable placeholder="Please select" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const time = ref("");
</script>
