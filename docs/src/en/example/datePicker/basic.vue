<template>
  <bp-date-picker v-model="val" :disabledDate style="width: 200px" placeholder="Please select" />
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";
const val = ref();

const disabledDate = (current) => dayjs(current).isBefore(dayjs("2025-05-22"));
</script>
