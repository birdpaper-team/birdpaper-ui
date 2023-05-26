<template>
  <div class="color-page">
    <div class="color-block-item" v-for="item in colorList">
      <div class="header">
        <p class="color-block-item-title">{{ colorThemes[item].title }}</p>
      </div>
      <color-block :list="colorThemes[item].list"> </color-block>
    </div>
  </div>
</template>

<script setup lang="ts">
import { colorList, colorThemes } from "./color";
import colorBlock from "./components/color-block.vue";
</script>
