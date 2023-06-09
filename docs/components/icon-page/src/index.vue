<template>
  <div class="icon-page">
    <div class="icon-page-inner">
      <template v-for="item in iconList">
        <div class="icon-item" @click="handleCopy(item)">
          <i :class="item"></i>
          <span v-text="item"></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="icon-page">
import * as useClipboard from "vue-clipboard3/dist/esm/index";
import { Message } from "../../../../packages/components/index";
import iconList from "./icon";

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async (item: any) => {
  try {
    await toClipboard(item);
    Message.success(`已复制到剪贴板: ${item}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};
</script>
