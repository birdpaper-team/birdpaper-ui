<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M32 15H16c0 3.47-5.78 7.903-9.317 10.291C5.123 26.345 4 27 4 27s1 3 3.5 8c1.894 3.788 4.075 5.854 5.02 6.633.306.25.69.367 1.085.367h21.693c.455 0 .894-.154 1.217-.474.86-.852 2.672-2.9 4.485-6.526 2.5-5 3-8 3-8s-1.278-.639-3-1.709c-3.554-2.207-9-6.25-9-10.291ZM32 15l2-9h8M16 15l-2-9H6" stroke="#333"></path><path d="M4 27s2 4 8 4h24c5 0 8-4 8-4" stroke="#333"></path><path d="M7.5 35C5 30 4 27 4 27s1.124-.655 2.683-1.709M41 35c2.5-5 3-8 3-8s-1.278-.639-3-1.709" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBoosterCarSeat',
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

    const iconClass = computed(() => [name, `${name}-booster-car-seat`, { [`${name}-spin`]: props.spin }]);

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
