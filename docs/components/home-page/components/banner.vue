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
import { bannerInfo as _data } from "../core";
</script>
