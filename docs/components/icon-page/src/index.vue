<template>
  <div class="icon-page">
    <div class="icon-page-container">
      <img class="icon-page-logo" src="https://cos.birdpaper.com/assets/bp%2Bremix.png" />
      <p align="center" class="icon-page-tag">
        <a href="https://www.npmjs.com/package/birdpaper-icon" target="_blank">
          <img class="tag" src="https://img.shields.io/npm/v/birdpaper-icon.svg?style=badge" />
        </a>
        <a href="https://npmcharts.com/compare/birdpaper-icon?minimal=true">
          <img class="tag" src="http://img.shields.io/npm/dm/birdpaper-icon.svg" />
        </a>
        <a href="https://icon.birdpaper.design">
          <img class="tag" src="https://img.shields.io/badge/platform-Vue3-059669.svg" />
        </a>
        <a href="https://icon.birdpaper.design">
          <img class="tag" src="https://img.shields.io/badge/license-MIT-red.svg" />
        </a>
      </p>
      <p class="icon-page-text">
        图标组件已独立开源为 <a :href="homeUrlMap.bpIcon" target="_blank">Birdpaper Icon</a>，它基于优秀的开源图标库
        <a :href="homeUrlMap.remix">RemixIcon</a> 实现。
      </p>
      <bp-space justify="center">
        <bp-button type="primary" size="small" status="primary" :icon="IconGithubFill" @click="linkTo('github')"> Github </bp-button>
        <bp-button :icon="IconNpmjsFill" size="small" @click="linkTo('npm')">npm</bp-button>
      </bp-space>
    </div>
  </div>
</template>

<script setup lang="ts" name="icon-page">
import { IconGithubFill, IconNpmjsFill } from "birdpaper-icon";

const homeUrlMap = {
  bpIcon: "https://icon.birdpaper.design",
  remix: "https://remixicon.cn",
  github: "https://github.com/birdpaper-team/birdpaper-icon",
  npm: "https://www.npmjs.com/package/birdpaper-icon",
};
const linkTo = (type: string) => window.open(homeUrlMap[type]);
</script>
