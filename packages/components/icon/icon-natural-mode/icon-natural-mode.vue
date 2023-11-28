<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 27c-5.657 0-9.935-4.343-9.935-10L14 7l5 4 5-6 5 6 5-4v10c0 5.657-4.342 10-10 10ZM23.486 43.314c1.562-1.562-.337-5.995-4.242-9.9-3.906-3.905-8.338-5.805-9.9-4.242-1.562 1.562.337 5.994 4.243 9.9 3.905 3.904 8.337 5.804 9.9 4.242Z" stroke="#333" stroke-miterlimit="10"></path><path d="M24.829 42.97c1.562 1.563 5.994-.337 9.9-4.242 3.905-3.905 5.804-8.338 4.242-9.9-1.562-1.562-5.994.338-9.9 4.243-3.905 3.905-5.804 8.337-4.242 9.9Z" stroke="#333" stroke-miterlimit="10"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconNaturalMode',
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

    const iconClass = computed(() => [name, `${name}-natural-mode`, { [`${name}-spin`]: props.spin }]);

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
