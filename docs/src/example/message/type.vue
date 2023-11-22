<template>
  <bp-space type="vertical" size="small">
    <div>
      <p class="demo-text">无背景和边框</p>
      <bp-space>
        <bp-button type="plain" @click="handleClick('success', true)">成功提示</bp-button>
        <bp-button type="plain" @click="handleClick('warning', true)">警告提示</bp-button>
        <bp-button type="plain" @click="handleClick('error', true)">错误提示</bp-button>
      </bp-space>
    </div>
    <div>
      <p class="demo-text">带背景和边框</p>
      <bp-space>
        <bp-button type="plain" status="success" @click="handleClick('success')">成功提示</bp-button>
        <bp-button type="plain" status="warning" @click="handleClick('warning')">警告提示</bp-button>
        <bp-button type="plain" status="danger" @click="handleClick('error')">错误提示</bp-button>
      </bp-space>
    </div>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = (type: "success" | "warning" | "error", plain: boolean = false) => {
  Message[type]({ content: `这是 ${type} 类型的消息提示`, plain });
};
</script>

<style lang="less" scoped>
.demo-text {
  color: #595959;
  font-size: 13px;
  margin: 0 0 4px 0;
}
</style>
