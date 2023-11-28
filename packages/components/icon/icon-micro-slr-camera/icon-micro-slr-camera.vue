<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M44 26c0 2.64-.73 5.108-2 7.215A14.073 14.073 0 0 1 37.215 38c-2.107 1.27-4.576 2-7.215 2-2.64 0-5.108-.73-7.215-2C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12c2.107-1.27 4.576-2 7.215-2 2.64 0 5.108.73 7.215 2A14.073 14.073 0 0 1 42 18.785c1.27 2.107 2 4.576 2 7.215Z"></path><path d="M4 14v24h18.785C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12H4Z"></path><path d="M37.215 14c-2.107-1.27-4.576-2-7.215-2-2.64 0-5.108.73-7.215 2m14.43 0H42v4.785M37.215 14A14.073 14.073 0 0 1 42 18.785M22.785 14H4v24h18.785m0-24C18.719 16.45 16 20.907 16 26s2.72 9.55 6.785 12m14.43 0c-2.107 1.27-4.576 2-7.215 2-2.64 0-5.108-.73-7.215-2m14.43 0H42v-4.785M37.215 38A14.073 14.073 0 0 0 42 33.215m0-14.43c1.27 2.107 2 4.576 2 7.215 0 2.64-.73 5.108-2 7.215M8 9h9v5H8zM10 22v8M36 26a6 6 0 0 1-6 6m-6-6a6 6 0 0 1 6-6" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMicroSlrCamera',
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

    const iconClass = computed(() => [name, `${name}-micro-slr-camera`, { [`${name}-spin`]: props.spin }]);

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
