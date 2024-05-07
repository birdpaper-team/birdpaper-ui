<template>
  <div :style="{ width: '100%', height: '140px', overflowY: 'scroll' }">
    <div :style="{ height: '300px', background: '#fafafa' }">
      <bp-space style="margin: 100px 0 0 0" align="center">
        <bp-trigger update-at-scroll>
          <bp-button type="plain">Click me</bp-button>
          <template #content>
            <div class="demo">
              <bp-empty description="No content."></bp-empty>
            </div>
          </template>
        </bp-trigger>
      </bp-space>
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 100px;
  padding: 10px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
