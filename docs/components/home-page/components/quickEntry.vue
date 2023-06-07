<template>
  <div class="home-page-quick-entry">
    <div class="quick-entry-item" v-for="(v, k) in list" :key="`item-${k}`">
      <div class="quick-entry-header">
        <h3>{{ v.title }}</h3>
        <div class="header-icon">
          <i :class="v.icon"></i>
        </div>
      </div>
      <div class="quick-entry-body">
        <p>{{ v.intro }}</p>
      </div>
      <div class="quick-entry-footer">
        <bp-button type="text" :disabled="v.action.disabled" status="primary">{{ v.action.btnName }}</bp-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  {
    title: "指南",
    icon: "ri-compass-3-line",
    intro: "查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",
    action: {
      btnName: "查看详情",
      link: "",
      disabled: false,
    },
  },
  {
    title: "组件",
    icon: "ri-shape-line",
    intro: "查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",
    action: {
      btnName: "查看详情",
      link: "",
      disabled: false,
    },
  },
  {
    title: "设计资源",
    icon: "ri-palette-line",
    intro: "查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",
    action: {
      btnName: "稍晚推出",
      link: "",
      disabled: true,
    },
  },
  {
    title: "更新日志",
    icon: "ri-file-list-3-line",
    intro: "查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",
    action: {
      btnName: "稍晚推出",
      link: "",
      disabled: true,
    },
  },
];
</script>
