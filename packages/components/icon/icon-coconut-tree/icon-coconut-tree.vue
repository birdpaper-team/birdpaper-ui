<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M22 14s-2.7 5.293-4 12c-1.3 6.707-1 16-1 16M33.953 23.272c.346.23.893.391 1.428.503.932.194 1.792-.446 1.768-1.397-.045-1.774-.737-4.675-4.258-7.014-3.325-2.207-6.626-2.238-8.708-1.92-1.187.18-1.66 1.478-.978 2.467.608.883 1.316 1.774 1.795 1.945 1 .355 2.203-.582 3.08 0 .876.581.615 1.925 1.492 2.507.876.582 2.013-.18 2.89.402.875.582.615 1.925 1.491 2.507Z" stroke="#333"></path><path d="M20 17c.858-.286 1.389-1.226 1.686-1.979.246-.622.026-1.308-.55-1.648-1.295-.766-4.06-1.814-8.374-.561-4.265 1.238-5.39 4.056-5.677 5.715a1.33 1.33 0 0 0 1.178 1.565c.56.063 1.176.035 1.544-.277.807-.685 1.025-1.582 1.927-1.824.901-.241 1.679.858 2.58.616.902-.241 1.026-1.582 1.927-1.824.902-.241 2.26.717 3.76.217ZM27 6c-2.5 1-5 6-5 8l13-6c-1.38-2.391-5.5-3-8-2Z" stroke="#333"></path><path d="M20 5c4 1.422 3.38 6.609 2 9L10 5.922C11 4 16 3.579 20 5Z" stroke="#333"></path><path d="M26 35c8.284 0 13 1.79 13 4s-6.716 4-15 4c-8.284 0-15-1.79-15-4 0-.54.4-1.053 1.125-1.523" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCoconutTree',
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

    const iconClass = computed(() => [name, `${name}-coconut-tree`, { [`${name}-spin`]: props.spin }]);

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
