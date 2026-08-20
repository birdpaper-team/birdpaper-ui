<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-group`" v-for="(item, index) in list" :key="`group-${index}`">
      <div :class="`${clsBlockName}-group-head`">
        <div :class="`${clsBlockName}-group-dot`"></div>
        <div :class="`${clsBlockName}-group-title`">{{ item.text }}</div>
        <div :class="`${clsBlockName}-group-count`">{{ item.items.length }}</div>
      </div>
      <div :class="`${clsBlockName}-group-list`">
        <a
          :class="`${clsBlockName}-group-item font-quick`"
          v-for="v in item.items"
          :key="`item-${v.link}`"
          :href="v.link"
          v-html="v.text"
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import sideBarCn from "../config/locales/zh-CN/sidebar";
import sideBarEn from "../config/locales/en/sidebar";
import { useData } from "vitepress";
import { computed } from "vue";

const clsBlockName = "catalog-index";
const { lang } = useData();

const list = computed(() => {
  const data = lang.value === "en" ? sideBarEn["/en/components/"] : sideBarCn["/components/"];
  return data.slice(1);
});
</script>
