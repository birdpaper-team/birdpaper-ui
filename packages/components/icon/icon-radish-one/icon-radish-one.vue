<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M39 15c2.183.555 4 1.5 4 4s-3 3-5 3M26 10c0-3 1.749-5 4-5 2 0 3.048.62 4 3M31 12s.951-2.132 2.123-2.91c1.87-1.243 4.377-1.372 5.748 0a4.057 4.057 0 0 1 0 5.748C37.28 16.43 35.997 17 35.997 17" stroke="#333"></path><path d="M10 14c-5.084 5.085-6.417 12.913-3.41 19.103C6.59 33.103 5 41 6 42s8.862-.592 8.862-.592A15.96 15.96 0 0 0 21.802 43c4.334 0 8.97-1.853 12.199-5 3.184-3.184 4.607-7.298 4.607-11.764 0-4.507-1.607-8.236-4.953-11.711-3.346-3.476-7.254-5.213-11.766-5.213-4.507 0-8.704 1.504-11.888 4.688Z" stroke="#333"></path><path d="M5 28s5-1 7 3M18 42s1-4-1-6M21.803 43c-2.388 0-4.73-.532-6.94-1.592" stroke="#333"></path><path d="M6.59 33.103C3.582 26.913 4.915 19.085 10 14" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRadishOne',
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

    const iconClass = computed(() => [name, `${name}-radish-one`, { [`${name}-spin`]: props.spin }]);

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
