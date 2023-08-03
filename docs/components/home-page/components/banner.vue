<template>
  <div class="home-page-banner">
    <div class="left">
      <div class="app-name">
        {{ _data.name }}
        <div class="brage-version" v-if="_data.version">
          <div class="brage-version-inner">
            {{ _data.version }}
          </div>
        </div>
      </div>
      <p class="app-intro" v-html="_data.intro_cn + _data.intro_en"></p>

      <div class="btn-area">
        <bp-space>
          <bp-button @click="handleClick('start')" status="primary" type="primary">
            {{ _data.btn_text.start }}
          </bp-button>
          <bp-button @click="handleClick('git')" status="normal" type="normal">
            {{ _data.btn_text.git }}
          </bp-button>
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
import { bannerInfo as _data } from "../core";
import { useRouter, withBase } from "vitepress";

const router = useRouter();
const handleClick = (type: string) => {
  if (type === "start") {
    return router.go(withBase("/guide/easystart"));
  }
  if (type === "git") {
    window.open("https://github.com/birdpaper-team/birdpaper-ui");
  }
};
</script>
