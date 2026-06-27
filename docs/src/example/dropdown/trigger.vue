<template>
  <bp-space>
    <bp-dropdown trigger="hover" @select="handleSelect">
      <bp-button status="gray" type="secondary">hover 触发</bp-button>

      <template #content>
        <bp-doption value="edit">编辑</bp-doption>
        <bp-doption value="copy">复制</bp-doption>
        <bp-doption value="delete">删除</bp-doption>
      </template>
    </bp-dropdown>

    <bp-dropdown trigger="click" position="bottom-right" style="margin-left: 16px" @select="handleSelect">
      <bp-button status="gray" type="secondary">click 触发 (右对齐)</bp-button>

      <template #content>
        <bp-doption value="1">选项一</bp-doption>
        <bp-doption value="2">选项二</bp-doption>
        <bp-doption value="3" disabled>禁用项</bp-doption>
      </template>
    </bp-dropdown>
  </bp-space>
</template>

<script setup lang="ts">
const handleSelect = (value: string) => {
  console.log(value);
};
</script>
