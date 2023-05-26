<template>
  <div class="icon-page">
    <div class="icon-page-inner">
      <template v-for="v in iconList">
        <div class="icon-item" @click="handleCopy(v)">
          <i :class="v"></i>
          <span v-text="v"></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="icon-page">
import useClipboard from "vue-clipboard3";
import { Message } from "birdpaper-ui";
import iconList from "./icon";

/** 复制到剪贴板 */
const { toClipboard } = useClipboard();
const handleCopy = async (item: any) => {
  try {
    await toClipboard(item);
    Message.success(`已复制到剪贴板: ${item}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};
</script>
