<template>
  <bp-popconfirm content="This cannot be undone. Delete?" type="error" ok-text="Delete" cancel-text="Cancel" @ok="handleOk">
    <bp-button status="danger">Delete</bp-button>
  </bp-popconfirm>
</template>

<script setup lang="ts">
const handleOk = () => {
  console.log("confirmed");
};
</script>
