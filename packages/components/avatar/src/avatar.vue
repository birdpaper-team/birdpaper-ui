<template>
  <div :class="cls">
    <bp-image v-if="imgSrc && !slots.default?.()" :fit="fit" :class="`${name}-image-inner`" :src="imgSrc"></bp-image>
    <span :class="`${name}-text`" v-if="slots.default?.()">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";
import { AvatarShape, AvatarSize } from "./types";
import { ImageFit } from "../../image/src/types";

export default defineComponent({
  name: "Avatar",
  props: {
    /** 头像图标资源地址 */
    imgSrc: { type: String, default: "" },
    /** 图片适应类型 */
    fit: { type: String as PropType<ImageFit>, default: "fill" },
    /** 头像形状 */
    shape: { type: String as PropType<AvatarShape>, default: "circle" },
    /** 头像尺寸 */
    size: { type: [String, Number] as PropType<AvatarSize>, default: "normal" },
  },
  emits: ["click"],
  setup(props, { emit, slots }) {
    const name = "bp-avatar";

    const cls = computed(() => {
      let clsName = [name, `${name}-shape-${props.shape}`, `${name}-size-${props.size}`];

      return clsName;
    });

    return {
      name,
      cls,
      slots,
    };
  },
});
</script>
