<template>
  <div :class="name">
    <slot></slot>

    <div :class="`${name}-mask`" v-if="slots.default && loading">
      <div :class="`${name}-loading`">
        <i class="bp-icon-loading ri-loader-4-line"></i>
        <p :class="`${name}-tip`">{{ tip }}</p>
      </div>
    </div>

    <div v-else-if="loading" :class="`${name}-loading`">
      <i class="bp-icon-loading ri-loader-4-line"></i>
    </div>
  </div>
</template>

<script setup lang="ts" name="Spin">
import { useSlots } from "vue";

const props = defineProps({
  /** 是否开启加载 Loading or not */
  loading: { type: Boolean, default: false },
  /** 加载提示文字 The loading tip text */
  tip: { type: String, default: "" },
});

const name = "bp-spin";
const slots = useSlots();
</script>
