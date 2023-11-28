<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m9 44 15-22M39 44 24 22" stroke="#333"></path><path d="M9.132 24A15.14 15.14 0 0 1 9 22a14.95 14.95 0 0 1 1.5-6.546M11.156 29.753A15.018 15.018 0 0 0 21 36.7M27 36.7a15.02 15.02 0 0 0 9.911-7.06M38.868 24c.087-.654.132-1.322.132-2a14.94 14.94 0 0 0-1.5-6.546M27 7.3a14.955 14.955 0 0 1 7 3.52M21 7.3a14.955 14.955 0 0 0-7.614 4.101" stroke="#333"></path><circle cx="10" cy="27" r="3" stroke="#333"></circle><circle cx="24" cy="37" r="3" stroke="#333"></circle><circle cx="24" cy="7" r="3" stroke="#333"></circle><circle cx="12" cy="13" r="3" stroke="#333"></circle><circle cx="36" cy="13" r="3" stroke="#333"></circle><circle cx="38" cy="27" r="3" stroke="#333"></circle><circle cx="24" cy="22" r="4" fill="#333"></circle><path d="M6 44h8M34 44h8" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFerrisWheel',
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

    const iconClass = computed(() => [name, `${name}-ferris-wheel`, { [`${name}-spin`]: props.spin }]);

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
