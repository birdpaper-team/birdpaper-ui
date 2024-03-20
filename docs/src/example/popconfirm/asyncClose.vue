<template>
  <bp-popconfirm content="请确认是否执行操作" :on-before-ok="handleBeforeOk">
    <bp-button>Open popconfirm</bp-button>
  </bp-popconfirm>
</template>

<script setup lang="ts">
const handleBeforeOk = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};
</script>
