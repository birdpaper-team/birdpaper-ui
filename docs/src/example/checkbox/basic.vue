<template>
  <bp-checkbox v-model="val">Option</bp-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(false);
</script>
