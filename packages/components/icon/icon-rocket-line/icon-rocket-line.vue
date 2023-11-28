<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M5 13c0-5.088 2.902-9.437 7-11.182C16.097 3.563 19 7.912 19 13c0 .823-.076 1.626-.221 2.403l1.94 1.832a.5.5 0 0 1 .096.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.235-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.235 2.234a.5.5 0 0 1-.792-.114l-2.496-4.575a.5.5 0 0 1 .096-.603l1.94-1.832C5.076 14.626 5 13.823 5 13Zm1.475 6.695.817-.817A3 3 0 0 1 9.414 18h5.171a3 3 0 0 1 2.122.878l.817.817.982-1.8-1.1-1.038a2 2 0 0 1-.593-1.82A11.11 11.11 0 0 0 17 13c0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.186 2.036a2 2 0 0 1-.593 1.82l-1.1 1.04.982 1.8ZM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRocketLine',
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

    const iconClass = computed(() => [name, `${name}-rocket-line`, { [`${name}-spin`]: props.spin }]);

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
