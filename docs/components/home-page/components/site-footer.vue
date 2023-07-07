<template>
  <div :class="name">
    <div :class="`${name}-container`">
      <div :class="`${name}-menu`">
        <div :class="`${name}-menu-group`">
          <div :class="`${name}-menu-group-title`">
            <p>设计</p>
          </div>
          <div :class="`${name}-menu-group-list`">
            <ul>
              <li :class="`${name}-menu-group-list-item`">设计指引</li>
              <li :class="`${name}-menu-group-list-item`">设计资源</li>
            </ul>
          </div>
        </div>
        <div :class="`${name}-menu-group`">
          <div :class="`${name}-menu-group-title`">
            <p>设计</p>
          </div>
          <div :class="`${name}-menu-group-list`">
            <ul>
              <li :class="`${name}-menu-group-list-item`">设计指引</li>
              <li :class="`${name}-menu-group-list-item`">设计资源</li>
              <li :class="`${name}-menu-group-list-item`">设计资源</li>
              <li :class="`${name}-menu-group-list-item`">设计资源</li>
              <li :class="`${name}-menu-group-list-item`">设计资源</li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="`${name}-mp`">
        <div :class="`${name}-mp-inner`"></div>
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
const name = "site-footer";
</script>
