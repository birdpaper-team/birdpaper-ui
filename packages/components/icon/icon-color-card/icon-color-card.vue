<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6Z"></path><path d="M10 44a6 6 0 0 0 6-6V23.515M10 44a6 6 0 0 1-6-6V4h12v19.515M10 44h34V32H24.485M5.757 42.243a6 6 0 0 0 8.486 0L24.485 32M16 23.515 35.015 4.5l.47-.5 8.5 8.5-19.5 19.5" stroke="#333"></path><path d="M14.243 42.243 43.985 12.5l-8.5-8.5L16 23.515" stroke="#333"></path><path d="M24.485 32H44v12H12.5" stroke="#333"></path><path d="M24.485 32H44v12H12.5" stroke="#333"></path><path d="M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconColorCard',
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

    const iconClass = computed(() => [name, `${name}-color-card`, { [`${name}-spin`]: props.spin }]);

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
