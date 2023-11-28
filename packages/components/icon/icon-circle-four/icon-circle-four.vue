<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="M24 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 44a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM41 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#333"></path><path d="M24.197 15.744a8.99 8.99 0 0 0 7.438-3.931 14.528 14.528 0 0 1 4.686 4.498A8.995 8.995 0 0 0 32 24a8.997 8.997 0 0 0 4.527 7.811 14.53 14.53 0 0 1-4.426 4.532 8.998 8.998 0 0 0-7.905-4.694c-3.4 0-6.36 1.885-7.89 4.668a14.528 14.528 0 0 1-4.494-4.683 8.99 8.99 0 0 0 3.93-7.438 8.99 8.99 0 0 0-3.907-7.422 14.526 14.526 0 0 1 4.94-4.938 8.99 8.99 0 0 0 7.42 3.907Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCircleFour',
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

    const iconClass = computed(() => [name, `${name}-circle-four`, { [`${name}-spin`]: props.spin }]);

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
