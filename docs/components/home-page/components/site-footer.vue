<template>
  <div :class="name">
    <div :class="`${name}-container`">
      <div :class="`${name}-menu`">
        <div :class="`${name}-menu-group`" v-for="item in footerRouteList">
          <div :class="`${name}-menu-group-title`">
            <p>{{ item.title }}</p>
          </div>
          <div :class="`${name}-menu-group-list`">
            <ul>
              <li :class="`${name}-menu-group-list-item`" v-for="v in item.children">
                <bp-link status="normal" :href="v.path" :target="v.target">{{ v.title }}</bp-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="`${name}-mp`">
        <div :class="`${name}-mp-inner`">
          <img src="/qrcode_mp.jpg" alt="扫码关注" />
          <p :class="`${name}-mp-inner-title`">联系作者</p>
          <p :class="`${name}-mp-inner-intro`">扫码关注公众号-小纸鹤</p>
        </div>
      </div>
    </div>
    <div :class="`${name}-info`">
      <div :class="`${name}-info-content`">
        <div class="power-area">
          <div class="power-tag">
            <span>Birdpaper Design</span>
          </div>
          <span class="copyright-text"
            >BirdpaperUI author by
            <bp-link status="normal" href="https://github.com/liluanhui" target="_blank">木亦Sam</bp-link> 2023</span
          >
        </div>
        <div class="number">
          <bp-link status="normal" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备17015354号</bp-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";

const name = "site-footer";

interface FooterRouteItem {
  title: string;
  children: {
    title: string;
    path: string;
    target: string;
  }[];
}

const footerRouteList: FooterRouteItem[] = [
  {
    title: "设计",
    children: [
      { title: "价值观", path: withBase("/design/values"), target: "_self" },
      { title: "设计原则", path: withBase("/design/philosophy"), target: "_self" },
    ],
  },
  {
    title: "开发指南",
    children: [
      { title: "快速上手", path: withBase("/guide/easystart"), target: "_self" },
      { title: "更新日志", path: withBase("/guide/changelog"), target: "_self" },
    ],
  },
  {
    title: "社区",
    children: [
      { title: "Github", path: "https://github.com/birdpaper-team/birdpaper-ui", target: "_blank" },
      // { title: "Moya", path: "https://moya.plus", target: "_blank" },
      { title: "语雀", path: "https://www.yuque.com/birdpaper.design", target: "_blank" },
    ],
  },
];
</script>
