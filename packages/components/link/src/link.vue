<template>
  <div :class="clsName" @click="handleClick">
    <a :disabled="disabled" :class="`${name}-inner`" :href="href" :target="target">
      <span v-if="loading" class="left-icon">
        <i class="bp-icon-loading ri-loader-4-line"></i>
      </span>
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";
import { LinkStatus } from "./types";

export default defineComponent({
  name: "Link",
  props: {
    /** 链接地址 */
    href: { type: String, default: "javascript:;" },
    /** 链接状态 */
    status: { type: String as PropType<LinkStatus>, default: "primary" },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
    /** 是否加载状态 */
    loading: { type: Boolean, default: false },
    /** 跳转链接方式 */
    target: { type: String, default: "_self" },
  },
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const name = "bp-link";
    const clsName = computed(() => {
      let cls = [name, `${name}-status-${props.status}`];
      if (props.disabled || props.loading) cls.push(`${name}-disabled`);

      return cls;
    });

    const handleClick = (e: MouseEvent) => {
      if (props.disabled) return;

      emit("click", e);
    };

    return {
      name,
      clsName,
      handleClick,
    };
  },
});
</script>
