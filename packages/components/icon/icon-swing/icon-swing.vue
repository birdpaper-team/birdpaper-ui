<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)" stroke="#333"><path d="M10 36c-2-3.5-2.001-10-2-19 0-3 4-4 6-1 1.107 1.662 1.816 6.264 1.816 6.264l6.495-11.25a2.52 2.52 0 1 1 4.365 2.52l.388-.67a2.52 2.52 0 1 1 4.366 2.52l-.388.671a2.52 2.52 0 1 1 4.365 2.52l-1.552 2.69a2.523 2.523 0 0 1 4.373 2.518l-9.17 15.962c-.097.17-.197.337-.32.489C28.167 40.94 26.143 43 22 43c-4.66 0-9.522-2.661-12-7ZM37 5c1.379.733 3.505 1.758 5 4 1 1.5 1.5 3.5 1.79 6"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSwing',
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

    const iconClass = computed(() => [name, `${name}-swing`, { [`${name}-spin`]: props.spin }]);

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
