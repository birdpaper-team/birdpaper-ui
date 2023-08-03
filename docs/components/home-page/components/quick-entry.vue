<template>
  <div :class="name">
    <div :class="`${name}-item`" v-for="(v, k) in quickEntryList" :key="`item-${k}`">
      <div :class="`${name}-header`">
        <h3>{{ v.title }}</h3>

        <div class="header-icon">
          <i :class="v.icon"></i>
        </div>
      </div>

      <div :class="`${name}-body`">
        <p>{{ v.intro }}</p>
      </div>

      <div :class="`${name}-footer`">
        <bp-button
          type="text"
          :disabled="v.action.disabled"
          :status="v.action.disabled ? 'normal' : 'primary'"
          @click="handleClick(v)"
        >
          {{ v.action.btnName }}
        </bp-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, withBase } from "vitepress";
import { quickEntryList } from "../core";

const name = "quick-entry";

const router = useRouter();
/**
 * 底部按钮点击触发
 * @param v
 */
const handleClick = (v: any) => {
  router.go(withBase(v.action.link));
};
</script>
