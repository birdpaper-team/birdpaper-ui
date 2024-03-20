<template>
  <bp-date-picker isDanger v-model="val" style="width: 200px" placeholder="Please select"> </bp-date-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
