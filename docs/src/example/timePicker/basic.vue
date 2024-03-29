<template>
  <bp-time-picker v-model="val" style="width: 160px" placeholder="Please select"> </bp-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
