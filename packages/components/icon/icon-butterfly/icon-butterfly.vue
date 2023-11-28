<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M5 12c3.664-4.294 14.081 6.82 19 13 4.92-6.18 15.337-17.294 19-13 .679.65 1.443 2.877-1 6-.678.976-1.814 3.706-1 8 0 1.139-1.115 2.952-6 1 2.375 1.627 6.85 6.096 4 10-2.714 3.416-9.035 7.457-13-2l-2-4-2 4c-3.964 9.457-10.286 5.416-13 2-2.85-3.904 1.626-8.373 4-10-4.885 1.952-6 .139-6-1 .814-4.294-.321-7.024-1-8-2.442-3.123-1.678-5.35-1-6Z" stroke="#333"></path><path d="M24.032 23C23.534 17.864 28.913 7 33 7" stroke="#333"></path><path d="M23.968 23C24.466 17.864 19.087 7 15 7" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconButterfly',
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

    const iconClass = computed(() => [name, `${name}-butterfly`, { [`${name}-spin`]: props.spin }]);

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
