<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m35 26.614-19.854-19.3a2.928 2.928 0 0 0-4.259.188 3.334 3.334 0 0 0 .18 4.544l10.024 9.93" stroke="#333"></path><path d="M21.09 21.976 10.178 11.155a3.486 3.486 0 0 0-4.735-.161 3.032 3.032 0 0 0-.18 4.417l10.993 11.203" stroke="#333"></path><path d="M16.255 26.614 10 20.5a3.299 3.299 0 0 0-4.633-.08 3.233 3.233 0 0 0-.093 4.588c9.23 9.536 14.02 14.04 15.817 15.545C24 42.99 29.735 44 32.73 42c2.995-2 5.702-4.846 6.987-7.671.765-1.683 2.25-6.87 4.458-15.561a3.305 3.305 0 0 0-2.46-4.034 3.5 3.5 0 0 0-4.166 2.493L35 26.614M31.716 12.666a19.597 19.597 0 0 0-8.752-7.187M5.194 33.776a19.599 19.599 0 0 0 8.364 7.635" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBye',
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

    const iconClass = computed(() => [name, `${name}-bye`, { [`${name}-spin`]: props.spin }]);

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
