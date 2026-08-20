<template>
  <div class="usage-block">
    <div class="demo-area">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot name="demo" />
      </div>
    </div>
    <div class="config-area">
      <div class="title">{{ configTitle }}</div>
      <div class="content">
        <slot name="config" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const props = defineProps({
  title: { type: String },
});

const { lang } = useData();
const configTitle = computed(() => (lang.value === "en" ? "Options" : "配置项"));
</script>
