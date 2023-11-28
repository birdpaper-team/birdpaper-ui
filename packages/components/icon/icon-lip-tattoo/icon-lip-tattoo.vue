<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M25 19.89c-1.5-2.52-5.5-2.52-7 0-1.115 1.874-5 4.61-6 5.053C13.667 27.295 19.5 32 25 32c6.5 0 11.167-4.704 13-7.057-1-.443-3.164-2.123-5.5-5.053-2-2.508-6-2.508-7.5 0Z" stroke="#333"></path><path d="M12 25c3.79.755 14.296 1.811 26 0" stroke="#333"></path><path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4" stroke="#333"></path><path d="m39 8.472.343 1.056h1.11l-.898.652.343 1.056-.898-.652-.898.652.343-1.056-.898-.652h1.11L39 8.472Z" stroke="#333"></path><path d="M35 22.656c1.294 1.248 2.374 2.01 3 2.287A20.974 20.974 0 0 1 33.763 29M16.098 22c-1.543 1.374-3.442 2.652-4.098 2.943.941 1.329 3.211 3.407 6 4.965" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLipTattoo',
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

    const iconClass = computed(() => [name, `${name}-lip-tattoo`, { [`${name}-spin`]: props.spin }]);

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
