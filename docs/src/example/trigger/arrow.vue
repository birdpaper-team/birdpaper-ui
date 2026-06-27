<template>
  <bp-space :size="16">
    <bp-trigger show-arrow>
      <bp-button>带箭头</bp-button>
      <template #content><div class="popup">显示箭头指向触发元素</div></template>
    </bp-trigger>
    <bp-trigger>
      <bp-button>无箭头</bp-button>
      <template #content><div class="popup">默认无箭头</div></template>
    </bp-trigger>
  </bp-space>
</template>

<style lang="scss" scoped>
.popup {
  width: 180px;
  padding: 8px 12px;
  font-size: 13px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
