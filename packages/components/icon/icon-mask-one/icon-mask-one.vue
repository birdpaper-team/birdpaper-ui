<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M7.366 16.344A21.877 21.877 0 0 0 6 24c0 2.712.486 5.297 1.366 7.655m3.906 6.487c1.658 1.842 3.638 3.327 5.838 4.34a16.403 16.403 0 0 0 13.78 0c2.2-1.013 4.18-2.498 5.838-4.34m3.906-6.487A21.877 21.877 0 0 0 42 24c0-2.712-.486-5.298-1.366-7.656m-3.906-6.486C35.07 8.015 33.09 6.53 30.89 5.518A16.403 16.403 0 0 0 24 4c-4.97 0-9.47 2.238-12.728 5.858" stroke="#333"></path><path d="M18 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM30 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 35c2.761 0 5-1.343 5-3s-2.239-3-5-3-5 1.343-5 3 2.239 3 5 3Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMaskOne',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 线宽 */
    strokeWidth: { type: Number, default: 4 },
    /** 端点类型 */
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value: any) => {
        return ["butt", "round", "square"].includes(value);
      },
    },
    /** 拐角类型 */
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value: any) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      },
    },
    /** 旋转角度 */
    rotate: { type: Number },
    /** 是否旋转 */
    spin: { type: Boolean },
  },
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const name = 'bp-icon';

    const iconClass = computed(() => [name, `${name}-mask-one`, { [`${name}-spin`]: props.spin }]);

    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
        props.size && (styles.fontSize = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);

        return styles;
    });

    const onClick = (ev: MouseEvent) => {
      emit('click', ev);
    };

    return {
      iconClass,
      innerStyle,
      onClick,
    };
  }
});
</script>
