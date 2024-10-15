<template>
  <bp-switch disabled v-model="val"></bp-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(true);
</script>
