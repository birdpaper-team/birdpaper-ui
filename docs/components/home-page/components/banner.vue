<template>
  <div class="home-page-banner">
    <div class="left">
      <div class="app-name">
        {{ _data.name }}
        <!-- <div class="brage-version">
          <div class="brage-version-inner">
            {{ _data.version }}
          </div>
        </div> -->
      </div>
      <p class="app-intro" v-html="_data.intro_cn + _data.intro_en"></p>
      <div class="btn-area">
        <bp-space>
          <bp-button status="primary" size="large" type="primary">{{ _data.btn_text.start }}</bp-button>
          <bp-button status="normal" size="large" type="normal">{{ _data.btn_text.git }}</bp-button>
        </bp-space>
      </div>
    </div>
    <div class="right">
      <img :src="logoShadow" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logoShadow from "/logo-shadow.jpg";

const _data = {
  name: "BirdpaperUI",
  intro_cn: `一个通用的 <span style="color:#059669">Vue3</span> 组件库`,
  intro_en: `<span class="text-en"> A common UI component library for Vue3.</span>`,
  btn_text: {
    start: "快速上手",
    git: "在 Github 上查看",
  },
  version: "v2.0.0",
};
</script>
