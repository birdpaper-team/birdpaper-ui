<template>
  <bp-space :size="16">
    <bp-button @click="showHeader = true">自定义头部</bp-button>
    <bp-button @click="showContent = true">自定义内容</bp-button>
  </bp-space>

  <bp-modal v-model="showHeader" title="自定义头部">
    <template #header>
      <div class="custom-header">
        <IconStarFill size="20" style="color: #f7ba2a" />
        <span>自定义标题区域</span>
      </div>
    </template>
    <p>头部区域使用了自定义插槽。</p>
  </bp-modal>

  <bp-modal v-model="showContent" title="自定义内容">
    <div class="custom-content">
      <p>这里可以放置任意自定义内容：</p>
      <ul>
        <li>表单</li>
        <li>表格</li>
        <li>图片</li>
      </ul>
    </div>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconStarFill } from "birdpaper-icon";

const showHeader = ref(false);
const showContent = ref(false);
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.custom-content {
  ul {
    padding-left: 20px;
    line-height: 2;
  }
}
</style>
