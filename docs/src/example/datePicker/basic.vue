<template>
  <bp-date-picker v-model="val" clearable style="width: 200px" placeholder="请选择"> </bp-date-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const val = ref('');
</script>
