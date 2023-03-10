<template>
  <div class="btn-box" v-for="v in list">
    <bp-space size="mini">
      <bp-button type="normal" :status="v.status">{{ v.title }}</bp-button>
      <bp-button type="primary" :status="v.status">{{ v.title }}</bp-button>
      <bp-button type="plain" :status="v.status">{{ v.title }}</bp-button>
      <bp-button type="dashed" :status="v.status">{{ v.title }}</bp-button>
      <bp-button type="text" :status="v.status">{{ v.title }}</bp-button>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
const list = [
  { status: "normal", title: "普通" },
  { status: "primary", title: "主要" },
  { status: "success", title: "成功" },
  { status: "warning", title: "警告" },
  { status: "danger", title: "危险" },
];
</script>

<style lang="less" scoped>
.btn-box {
  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
