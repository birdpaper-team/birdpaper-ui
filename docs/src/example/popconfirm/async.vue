<template>
  <bp-popconfirm content="确认提交？" :on-before-ok="handleBeforeOk" @ok="handleOk">
    <bp-button status="primary">异步提交</bp-button>
  </bp-popconfirm>
</template>

<script setup lang="ts">
const handleBeforeOk = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return true;
};

const handleOk = () => {
  console.log("submitted");
};
</script>
