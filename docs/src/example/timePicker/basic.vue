<template>
  <bp-time-picker v-model="val" style="width: 200px" placeholder="请选择时间"> </bp-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
