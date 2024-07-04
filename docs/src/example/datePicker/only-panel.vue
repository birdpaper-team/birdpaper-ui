<template>
  <bp-date-picker v-model="val" valueFormat="YYYY-MM-DD HH:mm:ss" hide-trigger style="width: 200px" placeholder="Please select">
  </bp-date-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
