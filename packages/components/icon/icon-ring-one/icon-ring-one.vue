<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 11.273A3.636 3.636 0 1 0 24 4a3.636 3.636 0 0 0 0 7.273ZM24 44a3.636 3.636 0 1 0 0-7.273A3.636 3.636 0 0 0 24 44ZM7.636 27.636a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272ZM40.364 27.636a3.636 3.636 0 1 0 0-7.273 3.636 3.636 0 0 0 0 7.273Z" stroke="#333"></path><path d="M32.734 10.16a16.45 16.45 0 0 1 5.107 5.106M37.84 32.734a16.45 16.45 0 0 1-5.106 5.106M15.267 37.84a16.45 16.45 0 0 1-5.107-5.106M10.16 15.266a16.45 16.45 0 0 1 5.107-5.106" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRingOne',
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

    const iconClass = computed(() => [name, `${name}-ring-one`, { [`${name}-spin`]: props.spin }]);

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
