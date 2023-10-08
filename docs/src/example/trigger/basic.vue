<template>
  <bp-space align="center">
    <bp-trigger>
      <bp-button>点击触发</bp-button>
      <template #content>
        <div class="demo">暂无内容</div>
      </template>
    </bp-trigger>

    <bp-trigger trigger="hover">
      <bp-link>鼠标移入</bp-link>
      <template #content>
        <div class="demo">暂无内容</div>
      </template>
    </bp-trigger>
  </bp-space>
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
