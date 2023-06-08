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
import { quickEntryList } from "../core";

const name = "quick-entry";

/**
 * 底部按钮点击触发
 * @param v
 */
const handleClick = (v: unknown) => {};
</script>
