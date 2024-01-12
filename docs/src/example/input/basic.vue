<template>
  <bp-space>
    <bp-input :style="{ width: '180px' }" v-model="val" clearable placeholder="Please enter"></bp-input>
    <bp-input disabled :style="{ width: '180px' }" v-model="val" placeholder="Please enter"></bp-input>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
