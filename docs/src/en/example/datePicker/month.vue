<template>
  <bp-space type="vertical">
    <bp-month-picker v-model="val" style="width: 200px" placeholder="Please select" />
    <bp-month-picker v-model="val" hide-trigger style="width: 200px" placeholder="Please select" />
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref();
</script>
