<template>
  <div class="home-page-banner">
      <div class="left">
        <p class="app-name">BirdpaperUI</p>
        <p class="app-intro">
          一个通用的 <span style="color:#059669">Vue3</span> 组件库
          <p class="text-en"> A common UI component library for Vue3. </p>
        </p>
        <div class="btn-area">
          <bp-space>
            <bp-button status="primary" size="large" type="primary">快速上手</bp-button>
            <bp-button status="normal" size="large" type="normal">在 Github 查看</bp-button>
          </bp-space>
        </div>
      </div>
      <div class="right">
        <img :src="logoShadow" alt="" />
      </div>
    </div>
</template>

<script setup lang="ts">
import logoShadow from "/logo-shadow.png";

</script>
