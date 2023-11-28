<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.16 33.56c-4.316-1.52-8.95-2.315-13.718-2.315-5.06 0-9.967.895-14.502 2.6.399 1.102.92 2.156 1.557 3.142L6.455 40.24A21.69 21.69 0 0 1 3 28.45C3 16.619 12.385 7 24 7s21 9.62 21 21.449a21.68 21.68 0 0 1-3.753 12.24l-4.959-3.378a15.548 15.548 0 0 0 1.873-3.751Zm.44-8.676C37.034 18.061 31.08 13 24 13c-7.172 0-13.188 5.192-14.657 12.15-.237 1.33.123 2.486 1.11 2.181a47.457 47.457 0 0 1 13.989-2.086c4.657 0 9.212.665 13.532 1.949.854.253.981-.817.641-2.226a.82.82 0 0 1-.016-.084Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDongchedi',
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

    const iconClass = computed(() => [name, `${name}-dongchedi`, { [`${name}-spin`]: props.spin }]);

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
