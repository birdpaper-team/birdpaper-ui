<template>
  <div class="color-group-grid">
    <div v-for="group in groups" :key="group.name" class="color-group-card">
      <div class="color-main" :style="{ background: group.mainHex }" @click="copy(group.mainHex)">
        <div class="color-main-info">
          <span class="color-main-name">{{ group.name }}</span>
          <span class="color-main-hex">{{ group.mainHex }}</span>
        </div>
      </div>
      <div class="color-steps">
        <div
          v-for="item in group.steps"
          :key="item.hex"
          class="color-step"
          :style="{ background: item.hex }"
          @click="copy(item.hex)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

interface ColorStep {
  step: number;
  hex: string;
}

interface ColorGroup {
  name: string;
  mainHex: string;
  steps: ColorStep[];
}

defineProps<{
  groups: ColorGroup[];
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
.color-group-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px 0;
}

.color-group-card {
  border-radius: 12px;
  overflow: visible;
  padding-top: 0;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
}

.color-main {
  height: 96px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  position: relative;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.08);
  }

  &:active {
    transform: scale(0.99);
  }
}

.color-main-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.color-main-name {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.color-main-hex {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  font-family: "SFMono-Regular", Consolas, monospace;
}

.color-steps {
  display: flex;
}

.color-step {
  flex: 1;
  height: 40px;
  cursor: pointer;
  position: relative;
  transition: height 0.25s, margin-top 0.25s, box-shadow 0.25s;

  &:first-child {
    border-radius: 0 0 0 12px;
  }

  &:last-child {
    border-radius: 0 0 12px 0;
  }

  &:hover {
    height: 50px;
    margin-top: -10px;
    z-index: 1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
  }
}

@media (max-width: 768px) {
  .color-group-grid {
    grid-template-columns: 1fr;
  }
}
</style>
