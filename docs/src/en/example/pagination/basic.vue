<template>
  <bp-pagination :total="30" :page-size="10" :current></bp-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";
const current = ref(1);
</script>
