<template>
  <div class="btn-box" v-for="v in list">
    <bp-space size="mini">
      <bp-button type="normal" :status="v.status">{{ v.status }}</bp-button>
      <bp-button type="primary" :status="v.status">{{ v.status }}</bp-button>
      <bp-button type="plain" :status="v.status">{{ v.status }}</bp-button>
      <bp-button type="dashed" :status="v.status">{{ v.status }}</bp-button>
      <bp-button type="text" :status="v.status">{{ v.status }}</bp-button>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
const list = [
  { status: "normal" },
  { status: "primary" },
  { status: "success" },
  { status: "warning" },
  { status: "danger" },
];
</script>

<style lang="less" scoped>
.btn-box {
  &:not(:first-child) {
    margin-top: 10px;
  }

  .bp-btn {
    text-transform: capitalize;
  }
}
</style>
