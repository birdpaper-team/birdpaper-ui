<template>
  <bp-space :size="16">
    <bp-trigger show-arrow>
      <bp-button>With arrow</bp-button>
      <template #content><div class="popup">Show arrow pointing to the trigger</div></template>
    </bp-trigger>
    <bp-trigger>
      <bp-button>No arrow</bp-button>
      <template #content><div class="popup">No arrow by default</div></template>
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
