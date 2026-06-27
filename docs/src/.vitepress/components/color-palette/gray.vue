<template>
  <div class="color-gray-strip">
    <div
      v-for="item in colors"
      :key="item.hex"
      class="color-gray-item"
      :style="{ background: item.hex }"
      @click="copy(item.hex)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

interface GrayItem {
  step: number;
  hex: string;
}

defineProps<{
  colors: GrayItem[];
}>();

const copy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
  Message.success({ content: `已复制 ${text}`, duration: 2000 });
};
</script>

<style lang="scss" scoped>
.color-gray-strip {
  display: flex;
  margin: 20px 0;
  padding-top: 0;
  border-radius: 12px;
  overflow: visible;
}

.color-gray-item {
  flex: 1;
  height: 56px;
  cursor: pointer;
  position: relative;
  transition: height 0.25s, margin-top 0.25s, box-shadow 0.25s;

  &:first-child {
    border-radius: 12px 0 0 12px;
  }

  &:last-child {
    border-radius: 0 12px 12px 0;
  }

  &:hover {
    height: 66px;
    margin-top: -10px;
    z-index: 1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
}
</style>
