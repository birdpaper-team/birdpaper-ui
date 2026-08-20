<template>
  <bp-popconfirm content="Submit?" :on-before-ok="handleBeforeOk" @ok="handleOk">
    <bp-button status="primary">Async submit</bp-button>
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
