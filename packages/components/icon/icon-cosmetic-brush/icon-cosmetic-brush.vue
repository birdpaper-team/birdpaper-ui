<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)" stroke="#333"><path d="m16.1 25.829 22.627-19.8s2.12-2.12 4.242 0c2.121 2.122 0 4.243 0 4.243L23.17 32.9l-7.07-7.071Z"></path><path d="m22.464 20.879 5.657 5.657"></path><path d="m5.493 30.778 10.607-4.95L23.17 32.9l-4.95 10.606s-4.95.707-9.192-3.535c-4.243-4.243-3.536-9.193-3.536-9.193Z"></path><path d="m6.908 36.435 4.95-2.121M12.565 42.092l1.415-2.828"></path><path d="m18.93 23.354 2.828-2.475 2.828-2.475M30.596 24.414l-2.475 2.828-2.475 2.829"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCosmeticBrush',
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

    const iconClass = computed(() => [name, `${name}-cosmetic-brush`, { [`${name}-spin`]: props.spin }]);

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
