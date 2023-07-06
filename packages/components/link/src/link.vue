<template>
  <div :class="clsName" @click.stop="handleClick">
    <a :disabled="disabled" :class="`${name}-inner`" :href="href">
      <span v-if="loading" class="left-icon">
        <i class="bp-icon-loading ri-loader-4-line"></i>
      </span>
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts" name="Link">
import { PropType, computed } from "vue";
import { LinkStatus } from "./types";

const props = defineProps({
  /** 链接地址 */
  href: { type: String, default: "javascript:;" },
  /** 链接状态 */
  status: { type: String as PropType<LinkStatus>, default: "primary" },
  /** 是否禁用 */
  disabled: { type: Boolean, default: false },
  /** 是否加载状态 */
  loading: { type: Boolean, default: false },
});
const emits = defineEmits<{
  click: [];
}>();
const name = "bp-link";

const clsName = computed(() => {
  let cls = [name, `${name}-status-${props.status}`];
  if (props.disabled || props.loading) cls.push(`${name}-disabled`);

  return cls;
});

const handleClick = () => {
  if (props.disabled) return;

  emits("click");
};
</script>
