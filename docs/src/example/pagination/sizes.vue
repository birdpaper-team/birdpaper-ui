<template>
  <bp-pagination v-model:current="page" :total="500" layout="prev, pager, next, sizes"> </bp-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";

const page = ref(1);
</script>
