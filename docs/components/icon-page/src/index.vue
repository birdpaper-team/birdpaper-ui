<template>
  <div class="icon-page">
    <div class="icon-page-inner">
      <template v-for="item in icons">
        <div class="icon-item" @click="handleCopy(item)">
          <component :is="item"></component>
          <span>{{ item.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="icon-page">
import * as icons from "birdpaper-icon";
import * as useClipboard from "vue-clipboard3/dist/esm/index";
import { Message } from "birdpaper-ui";

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async (item: any) => {
  try {
    const str = `<${item.name} />`;
    await toClipboard(str);
    Message.success(`已复制到剪贴板: ${str}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};
</script>
