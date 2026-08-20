<template>
  <bp-space :size="16">
    <bp-trigger trigger="click">
      <bp-button>Click trigger</bp-button>
      <template #content><div class="popup">Click trigger content</div></template>
    </bp-trigger>
    <bp-trigger trigger="hover">
      <bp-button>Hover trigger</bp-button>
      <template #content><div class="popup">Hover trigger content</div></template>
    </bp-trigger>
  </bp-space>
</template>

<style lang="scss" scoped>
.popup {
  width: 140px;
  padding: 8px 12px;
  font-size: 13px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
