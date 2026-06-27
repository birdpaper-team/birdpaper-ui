<template>
  <div class="alert-list">
    <bp-alert status="info" title="可关闭的提示" show-close />
    <bp-alert status="success" title="操作成功" content="数据已保存。" show-close @close="onClose" />
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
