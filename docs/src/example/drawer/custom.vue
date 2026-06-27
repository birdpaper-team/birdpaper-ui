<template>
  <bp-space :size="16">
    <bp-button @click="showCustom = true">自定义内容</bp-button>
    <bp-button @click="showHeader = true">自定义头部</bp-button>
    <bp-button @click="showFooter = true">自定义底部</bp-button>
  </bp-space>

  <bp-drawer v-model="showCustom" title="用户详情">
    <div class="custom-content">
      <p><strong>姓名：</strong>张三</p>
      <p><strong>邮箱：</strong>zhangsan@example.com</p>
      <p><strong>部门：</strong>技术部</p>
    </div>
  </bp-drawer>

  <bp-drawer v-model="showHeader" title="自定义头部">
    <template #header>
      <div class="custom-header">
        <IconStarFill size="18" style="color: #f7ba2a" />
        <span>自定义标题区域</span>
      </div>
    </template>
    <p>头部区域使用了自定义插槽。</p>
  </bp-drawer>

  <bp-drawer v-model="showFooter" title="自定义底部">
    <p>底部使用了自定义插槽。</p>
    <template #footer>
      <bp-button type="secondary" @click="showFooter = false">关闭</bp-button>
      <bp-button status="danger" @click="showFooter = false">删除</bp-button>
    </template>
  </bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconStarFill } from "birdpaper-icon";

const showCustom = ref(false);
const showHeader = ref(false);
const showFooter = ref(false);
</script>

<style lang="scss" scoped>
.custom-content {
  p {
    line-height: 2.2;
    border-bottom: 1px solid #f0f0f0;
  }
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
</style>
