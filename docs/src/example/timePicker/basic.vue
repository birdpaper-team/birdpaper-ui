<template>
  <bp-time-picker v-model="val" style="width: 160px" placeholder="请选择时间"> </bp-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";

// const val = ref("");
const val = ref("01:02:03");
</script>
