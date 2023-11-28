<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path><path d="M14 10a4 4 0 0 1-4 4m4-4a4 4 0 1 0-4 4m4-4h6m-10 4v6" stroke="#333"></path><path d="M14 38a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"></path><path d="M14 38a4 4 0 0 0-4-4m4 4a4 4 0 1 1-4-4m4 4h6m-10-4v-6" stroke="#333"></path><path d="M34 38a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path><path d="M34 38a4 4 0 0 1 4-4m-4 4a4 4 0 1 0 4-4m-4 4h-6m10-4v-6" stroke="#333"></path><path d="M34 10a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path><path d="M34 10a4 4 0 0 0 4 4m-4-4a4 4 0 1 1 4 4m-4-4h-6m10 4v6M17 24h14M24 31V17" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLensAlignment',
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

    const iconClass = computed(() => [name, `${name}-lens-alignment`, { [`${name}-spin`]: props.spin }]);

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
