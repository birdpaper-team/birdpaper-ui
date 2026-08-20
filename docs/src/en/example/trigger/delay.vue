<template>
  <bp-space :size="16">
    <bp-trigger trigger="hover" :open-delay="300">
      <bp-button>Open after 300ms delay</bp-button>
      <template #content><div class="popup">Delayed open</div></template>
    </bp-trigger>
    <bp-trigger trigger="hover" :close-delay="500">
      <bp-button>Close after 500ms delay</bp-button>
      <template #content><div class="popup">Delayed close</div></template>
    </bp-trigger>
  </bp-space>
</template>

<style lang="scss" scoped>
.popup {
  width: 150px;
  padding: 8px 12px;
  font-size: 13px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
