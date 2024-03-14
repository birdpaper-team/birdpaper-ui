<template>
  <bp-date-picker isDanger v-model="val" style="width: 200px" placeholder="请选择日期"> </bp-date-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
