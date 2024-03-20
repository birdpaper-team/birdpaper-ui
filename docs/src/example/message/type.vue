<template>
  <bp-space type="vertical" size="small">
    <div>
      <p class="demo-text">No background or border.</p>
      <bp-space>
        <bp-button type="plain" @click="handleClick('success', true)">Success</bp-button>
        <bp-button type="plain" @click="handleClick('warning', true)">Warning</bp-button>
        <bp-button type="plain" @click="handleClick('error', true)">Error</bp-button>
      </bp-space>
    </div>
    <div>
      <p class="demo-text">With background and border.</p>
      <bp-space>
        <bp-button type="plain" status="success" @click="handleClick('success')">Success</bp-button>
        <bp-button type="plain" status="warning" @click="handleClick('warning')">Warning</bp-button>
        <bp-button type="plain" status="danger" @click="handleClick('error')">Error</bp-button>
      </bp-space>
    </div>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = (type: "success" | "warning" | "error", plain: boolean = false) => {
  Message[type]({ content: `This is a ${type} message.`, plain });
};
</script>

<style lang="less" scoped>
.demo-text {
  color: #595959;
  font-size: 13px;
  margin: 0 0 4px 0;
}
</style>
