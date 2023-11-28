<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M23.911 11.318c.082-2.232.71-4.192 1.866-5.83 1.163-1.647 3.086-2.817 5.717-3.48l.055.243v.424c0 .961-.233 2.064-.693 3.276-.483 1.174-1.237 2.28-2.238 3.277-.936.879-1.803 1.46-2.569 1.723-.252.076-.599.15-1.018.217-.372.058-.745.108-1.12.15Z" fill="#333"></path><path d="M24.35 14.629c-2.973 0-5.036-2.63-7.969-2.63-2.932 0-8.973 2.696-8.973 12 0 9.306 5.365 15.3 5.965 16 .6.701 1.987 2.5 4.137 2.5 2.15 0 4.503-1.709 6.84-1.709 2.337 0 5.279 1.71 7.2 1.71 1.92 0 2.71-.783 4.016-2.134 1.307-1.35 3.8-5.47 4.67-7.944-1.433-.854-5.234-3.17-5.234-8.422 0-3.5 1.28-6.41 3.838-8.725C37.161 13.092 35.215 12 33 12c-3.323 0-5.677 2.629-8.65 2.629Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconApple',
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

    const iconClass = computed(() => [name, `${name}-apple`, { [`${name}-spin`]: props.spin }]);

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
