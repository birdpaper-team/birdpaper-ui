<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M4.999 32.314 20.034 5.943C20.958 3.98 22.627 3 25.04 3c3.62 0 5.977 4.987 5.977 4.987L35 8.58c-4.01.065-6.33.872-6.957 2.42-.94 2.322 2.456 4.731 2.975 8.004.52 3.273-1.55 8.801-6.529 11.563-3.319 1.841-7.462 2.32-12.43 1.433l-6.1 11" stroke="#333"></path><path clip-rule="evenodd" d="M14.942 26.978c2.58-4.65 4.275-7.635 5.087-8.956 1.219-1.982 6.245-1.385 4.44 3.563-1.204 3.298-4.38 5.096-9.527 5.393ZM32.968 32.984c1.142-2.737 2.81-4.395 5.003-4.975 2.193-.58 4.193-.227 6 1.06-1.125 2.595-2.794 4.26-5.005 4.992-2.211.733-4.21.373-5.998-1.077Z" stroke="#333"></path><path clip-rule="evenodd" d="M26.985 35.114c.757 2.722 2.762 4.543 6.014 5.461 3.253.92 5.93.394 8.033-1.575-2.6-3.03-4.944-4.694-7.03-4.99-2.087-.296-4.426.072-7.017 1.104Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconNests',
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

    const iconClass = computed(() => [name, `${name}-nests`, { [`${name}-spin`]: props.spin }]);

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
