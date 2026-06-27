<template>
  <bp-button @click="show = true">异步确认</bp-button>

  <bp-modal v-model="show" title="提交确认" :on-before-ok="handleBeforeOk">
    <p>点击确认后将执行异步操作，确认按钮会自动进入 loading 状态。</p>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleBeforeOk = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return true;
};
</script>
