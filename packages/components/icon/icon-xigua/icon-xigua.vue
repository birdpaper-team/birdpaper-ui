<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 42.333c10.126 0 18.334-8.208 18.334-18.333 0-10.125-8.209-18.333-18.334-18.333S5.667 13.875 5.667 24c0 2.486 1.14 3.687 2.947 4.745 1.807 1.057 5.206.882 7.519 2.956 2.312 2.075 2.468 5.45 2.947 7.09.479 1.64 2.435 3.542 4.92 3.542Z" stroke="#333"></path><path d="M19.526 18.541c-.538 1.308-.807 2.846-.807 4.612 0 1.68.178 3.343.535 4.99a3.056 3.056 0 0 0 3.812 2.294c1.8-.505 3.367-1.166 4.701-1.983 1.248-.764 2.41-1.729 3.489-2.894a3.056 3.056 0 0 0-.278-4.413 32.764 32.764 0 0 0-3.977-2.87c-1.446-.885-2.863-1.42-4.25-1.602a3.056 3.056 0 0 0-3.225 1.866Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconXigua',
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

    const iconClass = computed(() => [name, `${name}-xigua`, { [`${name}-spin`]: props.spin }]);

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
