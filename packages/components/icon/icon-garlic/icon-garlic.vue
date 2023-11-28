<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M27 21c0 8 3 6 4 11 1.024 5.123-3.262 10-8.5 10-5.239 0-9.5-4.775-9.5-10 0-4.61 2.5-7.5 5-9s5-3 5-7" stroke="#333"></path><path d="M33 23c1 0 5.5 2 6 7 .452 4.523-2.5 11.5-15 12" stroke="#333"></path><path d="M16.001 40c-7.847 0-11.999-4.703-12-10 0-5.705 8-11 10-12s3-2.952 3-5V9c0-1.38.62-2 2-2h9c1.14 0 2 1 2 2v3c0 2.051 1.27 3.673 3.087 4.578.76.38 1.561.742 2.38 1.077 3.31 1.354 8.533 3.49 8.533 9.345 0 4.881-3.403 9-6 9" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGarlic',
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

    const iconClass = computed(() => [name, `${name}-garlic`, { [`${name}-spin`]: props.spin }]);

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
