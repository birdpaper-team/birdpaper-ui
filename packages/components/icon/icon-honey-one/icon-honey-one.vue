<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><rect x="4.929" y="13.224" width="11" height="5" rx="2" transform="rotate(-46.025 4.929 13.224)" stroke="#333"></rect><rect x="19.321" y="27.111" width="11" height="5" rx="2" transform="rotate(-46.025 19.321 27.11)" stroke="#333"></rect><rect x="6.443" y="18.855" width="17" height="5" rx="2" transform="rotate(-46.025 6.443 18.855)" stroke="#333"></rect><rect x="13.641" y="25.798" width="17" height="5" rx="2" transform="rotate(-46.025 13.64 25.798)" stroke="#333"></rect><rect x="7.265" y="25.205" width="25" height="5" rx="2" transform="rotate(-46.025 7.265 25.205)" stroke="#333"></rect><path d="m25.003 28.424 4.166-4.318 14.407 13.9-4.166 4.318-14.407-13.9Z" stroke="#333"></path><path d="M21 40.25c0 2.071-1.79 3.75-4 3.75s-4-1.679-4-3.75c0-2.071 4-6.25 4-6.25s4 4.179 4 6.25Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHoneyOne',
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

    const iconClass = computed(() => [name, `${name}-honey-one`, { [`${name}-spin`]: props.spin }]);

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
