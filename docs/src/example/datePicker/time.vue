<template>
  <bp-date-picker
    v-model="val"
    value-format="YYYY-MM-DD HH:mm:ss"
    show-time
    style="width: 200px"
    placeholder="请选择"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref();
</script>
