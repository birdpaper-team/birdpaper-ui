<template>
  {{ val }}
  <bp-input-number
    :precision="2"
    :style="{ width: '220px' }"
    :min="-5"
    :max="5"
    v-model="val"
    placeholder="请输入"
  ></bp-input-number>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<number>(1);
</script>
