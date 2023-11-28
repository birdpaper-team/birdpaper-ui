<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M34.517 13.846 34 11l-6.87-3.435a7 7 0 0 0-6.26 0L17.38 9.31m18.31 10.996L37 27.5 39.09 39M36 44H8l.956-5.258m1.68-9.242 2.936-16.145" stroke="#333"></path><path d="M39.293 8.707a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l8.586-8.586Z" stroke="#333"></path><path d="m27 21 4-4" stroke="#333"></path><path d="M39.293 39.293a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0l8.586 8.586Z" stroke="#333"></path><path d="m27 27 4 4" stroke="#333"></path><path d="M8.707 39.293a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-8.586 8.586Z" stroke="#333"></path><path d="m21 27-4 4" stroke="#333"></path><path d="M8.707 8.707a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0L8.707 8.707Z" stroke="#333"></path><path d="m21 21-4-4" stroke="#333"></path><circle cx="24" cy="24" r="4" stroke="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWindmillOne',
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

    const iconClass = computed(() => [name, `${name}-windmill-one`, { [`${name}-spin`]: props.spin }]);

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
