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
                <bp-link status="normal">{{ v.title }}</bp-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="`${name}-mp`">
        <div :class="`${name}-mp-inner`">
          <img :src="qrcodeMp" alt="扫码关注" />
          <p :class="`${name}-mp-inner-title`">联系我们</p>
          <p :class="`${name}-mp-inner-intro`">扫码关注公众号-小纸鹤</p>
        </div>
      </div>
    </div>
    <div :class="`${name}-info`">
      <div :class="`${name}-info-content`">
        <div class="power-area">
          <div class="power-tag">
            <span>Powered by Birdpaper Design</span>
          </div>
          <span class="copyright-text">BirdpaperUI author by <bp-link status="normal">木亦Sam</bp-link> 2023</span>
        </div>
        <div class="number">
          <bp-link status="normal">粤ICP备17015354号</bp-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import qrcodeMp from "../../../src/public/qrcode_mp.jpg";

const name = "site-footer";

interface FooterRouteItem {
  title: string;
  children: {
    title: string;
    path: string;
  }[];
}

const footerRouteList: FooterRouteItem[] = [
  {
    title: "设计",
    children: [
      { title: "价值观", path: "#" },
      { title: "设计原则", path: "#" },
    ],
  },
  {
    title: "开发指南",
    children: [
      { title: "安装", path: "#" },
      { title: "快速上手", path: "#" },
      { title: "更新日志", path: "#" },
    ],
  },
  {
    title: "社区",
    children: [
      { title: "Github", path: "#" },
      { title: "Moya", path: "#" },
      { title: "语雀", path: "#" },
    ],
  },
];
</script>
