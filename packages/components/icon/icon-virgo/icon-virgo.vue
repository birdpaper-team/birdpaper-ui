<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M30 17c4 0 11.088-.112 11.959 6.64C42.417 27.192 39.238 32.674 24 43" stroke="#333"></path><path d="M16 11a2 2 0 1 0 4 0h-4ZM4 11a2 2 0 1 0 4 0H4Zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8h4Zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8v4Z" fill="#333"></path><path d="M28 11a2 2 0 1 0 4 0h-4Zm-12 0a2 2 0 1 0 4 0h-4Zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8h4Zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8v4Z" fill="#333"></path><path d="M6 11v18M18 11v18" stroke="#333"></path><path d="M30 11v18c0 5 2.5 10 12 10" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconVirgo',
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

    const iconClass = computed(() => [name, `${name}-virgo`, { [`${name}-spin`]: props.spin }]);

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
