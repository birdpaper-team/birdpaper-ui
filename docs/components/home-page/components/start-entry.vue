<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <p :class="`${name}-header-inner`">快速上手体验</p>
    </div>

    <div :class="`${name}-container`">
      <div :class="`${name}-container-item designer`">
        <div class="title">
          <p><i class="ri-brush-2-fill"></i>设计师</p>
        </div>
        <div class="intro">
          <p>了解设计指引和规范，获取第一手组件库设计资源，帮助设计师快速输出视觉效果</p>
        </div>
        <div class="option">
          <bp-button type="dashed" size="large" block disabled>稍晚推出</bp-button>
        </div>
      </div>

      <div :class="`${name}-container-item developer`">
        <div class="title">
          <p><i class="ri-terminal-box-fill"></i>开发者</p>
        </div>
        <div class="intro">
          <p>推荐使用 Npm 安装，快速构建你的 Web 应用</p>
        </div>
        <div class="option">
          <div class="shell-box">
            <div class="content">
              <p>$ npm install <span>birdpaper-ui</span> -S</p>
            </div>
            <div class="copy-btn" @click="handleCopy">
              <i class="ri-file-copy-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";
import * as useClipboard from "vue-clipboard3/dist/esm/index";
const name = "start-entry";

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async () => {
  try {
    await toClipboard(`npm install birdpaper-ui -S`);
    Message.success(`已复制到剪贴板`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};
</script>
