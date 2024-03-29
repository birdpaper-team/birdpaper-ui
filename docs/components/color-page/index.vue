<template>
  <div class="color-page">
    <div class="color-page-inner">
      <div class="color-block-item" v-for="item in garyList">
        <div class="header">
          <p class="color-block-item-title">{{ colorThemes[item].title }}</p>
        </div>
        <color-block :list="colorThemes[item].list"> </color-block>
      </div>
    </div>
    <div class="color-page-inner">
      <div class="color-block-item" v-for="item in colorList">
        <div class="header">
          <p class="color-block-item-title">{{ colorThemes[item].title }}</p>
        </div>
        <color-block :list="colorThemes[item].list"> </color-block>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { garyList, colorList, colorThemes } from "./color";
import colorBlock from "./components/color-block.vue";
</script>
