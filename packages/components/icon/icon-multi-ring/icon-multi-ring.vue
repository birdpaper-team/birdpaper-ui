<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M30 10a6 6 0 0 0-12 0v14a6 6 0 0 0 12 0V10Z" stroke="#333"></path><path d="M38.142 18.343a6 6 0 0 0-8.485-8.485l-9.9 9.9a6 6 0 1 0 8.486 8.485l9.9-9.9Z" stroke="#333"></path><path d="M38 30a6 6 0 0 0 0-12H24a6 6 0 0 0 0 12h14Z" stroke="#333"></path><path d="M29.657 38.142a6 6 0 1 0 8.485-8.485l-9.9-9.9a6 6 0 1 0-8.485 8.486l9.9 9.9Z" stroke="#333"></path><path d="M18 38a6 6 0 0 0 12 0V24a6 6 0 0 0-12 0v14Z" stroke="#333"></path><path d="M9.858 29.657a6 6 0 1 0 8.485 8.485l9.9-9.9a6 6 0 1 0-8.486-8.485l-9.9 9.9Z" stroke="#333"></path><path d="M10 18a6 6 0 0 0 0 12h14a6 6 0 0 0 0-12H10Z" stroke="#333"></path><path d="M18.343 9.858a6 6 0 0 0-8.485 8.485l9.9 9.9a6 6 0 1 0 8.485-8.485l-9.9-9.9Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMultiRing',
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

    const iconClass = computed(() => [name, `${name}-multi-ring`, { [`${name}-spin`]: props.spin }]);

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
