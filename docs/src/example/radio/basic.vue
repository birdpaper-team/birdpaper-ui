<template>
  <bp-space>
    <bp-radio v-model="val" :value="0">Option</bp-radio>
    <bp-radio disabled :value="1">Disabled option</bp-radio>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(0);
</script>
