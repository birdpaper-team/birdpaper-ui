<template>
  <div
    v-for="v in list"
    :key="v.value"
    class="color-item"
    :style="`background-color:${v.value}`"
    @click="handleCopy(v)"
  >
    <span class="left" :style="`color:${v.color}`">{{ v.name }}</span>
    <span class="right" :style="`color:${v.color}`">{{ v.value }}</span>
  </div>
</template>

<script setup lang="ts" name="colorBlock">
import * as useClipboard from "vue-clipboard3/dist/esm/index";
import { Message } from "birdpaper-ui";
import { ColorThemeItem } from "../color";
import { PropType } from "vue";

const props = defineProps({
  list: { type: Array as PropType<ColorThemeItem[]>, required: true },
});

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async (item: ColorThemeItem) => {
  try {
    await toClipboard(item.value);
    Message.success(`已复制到剪贴板: ${item.name}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};
</script>
