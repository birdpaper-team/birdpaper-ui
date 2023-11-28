<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><rect x="4" y="18" width="40" height="24" rx="2" stroke="#333"></rect><circle cx="14" cy="24" r="2" fill="#333"></circle><circle cx="16" cy="30" r="2" fill="#333"></circle><circle cx="10" cy="30" r="2" fill="#333"></circle><circle cx="20" cy="24" r="2" fill="#333"></circle><circle cx="22" cy="30" r="2" fill="#333"></circle><circle cx="26" cy="24" r="2" fill="#333"></circle><circle cx="28" cy="30" r="2" fill="#333"></circle><circle cx="32" cy="24" r="2" fill="#333"></circle><circle cx="34" cy="30" r="2" fill="#333"></circle><circle cx="38" cy="24" r="2" fill="#333"></circle><path d="M17 36h14M33 18v-4.875a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1V6" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconKeyboardOne',
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

    const iconClass = computed(() => [name, `${name}-keyboard-one`, { [`${name}-spin`]: props.spin }]);

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
