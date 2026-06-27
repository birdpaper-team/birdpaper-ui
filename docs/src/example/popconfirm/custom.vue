<template>
  <bp-popconfirm content="删除后将无法恢复，确认删除？" type="error" ok-text="删除" cancel-text="再想想" @ok="handleOk">
    <bp-button status="danger">删除</bp-button>
  </bp-popconfirm>
</template>

<script setup lang="ts">
const handleOk = () => {
  console.log("confirmed");
};
</script>
