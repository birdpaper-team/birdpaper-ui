<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m20.995 36-1.901-4.01 5.11-.417a3.782 3.782 0 0 0 0-7.565h-8.207C12.61 24.008 9 27.584 9 31.042c0 3.458.787 5.439 1.647 7.297.859 1.858 3.15 5.661 9.355 5.661h8.953c5.248 0 9.045-4.855 9.032-11-.008-3.83-.006-9.497.007-17a2.99 2.99 0 0 0-2.985-2.996h-.005a2.99 2.99 0 0 0-2.99 2.99V16c.01 5.141.015 8.158.015 9.051 0 2.894-1.34 3.891-4.022 2.992M25.955 24l.04-17a2.993 2.993 0 0 0-2.986-3h-.007a3 3 0 0 0-3 3v16.04" stroke="#333"></path><path d="M14.006 24V10a2.996 2.996 0 0 1 2.996-2.996h.004c1.657.003 3 1.347 3 3.005V24M26.007 20.02v-1a3 3 0 0 1 6 0v1" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMayuraGesture',
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

    const iconClass = computed(() => [name, `${name}-mayura-gesture`, { [`${name}-spin`]: props.spin }]);

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
