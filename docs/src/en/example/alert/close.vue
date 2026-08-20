<template>
  <div class="alert-list">
    <bp-alert status="info" title="Closable alert" show-close />
    <bp-alert status="success" title="Success" content="Data saved." show-close @close="onClose" />
  </div>
</template>

<script setup lang="ts">
const onClose = () => {
  console.log("alert closed");
};
</script>

<style lang="scss" scoped>
.alert-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
