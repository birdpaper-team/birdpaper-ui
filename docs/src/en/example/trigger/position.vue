<template>
  <div class="position-grid">
    <div class="row">
      <bp-trigger position="top-left">
        <bp-button size="small">Top Left</bp-button>
        <template #content><div class="popup">top-left</div></template>
      </bp-trigger>
      <bp-trigger position="top">
        <bp-button size="small">Top</bp-button>
        <template #content><div class="popup">top</div></template>
      </bp-trigger>
      <bp-trigger position="top-right">
        <bp-button size="small">Top Right</bp-button>
        <template #content><div class="popup">top-right</div></template>
      </bp-trigger>
    </div>
    <div class="row">
      <bp-trigger position="left">
        <bp-button size="small">Left</bp-button>
        <template #content><div class="popup">left</div></template>
      </bp-trigger>
      <bp-trigger position="right">
        <bp-button size="small">Right</bp-button>
        <template #content><div class="popup">right</div></template>
      </bp-trigger>
    </div>
    <div class="row">
      <bp-trigger position="bottom-left">
        <bp-button size="small">Bottom Left</bp-button>
        <template #content><div class="popup">bottom-left</div></template>
      </bp-trigger>
      <bp-trigger position="bottom">
        <bp-button size="small">Bottom</bp-button>
        <template #content><div class="popup">bottom</div></template>
      </bp-trigger>
      <bp-trigger position="bottom-right">
        <bp-button size="small">Bottom Right</bp-button>
        <template #content><div class="popup">bottom-right</div></template>
      </bp-trigger>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.position-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 0;

  .row {
    display: flex;
    gap: 12px;
  }
}

.popup {
  width: 120px;
  padding: 8px 12px;
  font-size: 13px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
