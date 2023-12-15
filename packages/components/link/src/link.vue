<template>
  <a @click="handleClick" :disabled="disabled" :class="clsName" :href="href" :target="target">
    <IconLoader4Line v-if="loading" class="left-icon bp-icon-loading" size="14px"/>
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";
import { LinkStatus } from "./types";
import { IconLoader4Line } from "birdpaper-icon";

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
  components: { IconLoader4Line },
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
