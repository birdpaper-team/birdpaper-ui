<template>
  <div>
    <bp-space :size="16" style="margin-bottom: 16px">
      <bp-button @click="loading = !loading">切换加载状态</bp-button>
    </bp-space>
    <bp-spin :spinning="loading" description="数据加载中...">
      <div class="content-box">
        <p>这里是一些内容区域</p>
        <p>Spin 组件会在此内容上方显示加载遮罩</p>
        <p>点击上方按钮切换加载状态</p>
      </div>
    </bp-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(true);
</script>

<style lang="scss" scoped>
.content-box {
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;

  p {
    margin: 0;
    line-height: 2;
    font-size: 13px;
    color: #595959;
  }
}
</style>
