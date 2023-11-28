<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M19.036 44c-.98-3.195-2.458-5.578-4.435-7.147-2.965-2.353-7.676-.89-9.416-3.318-1.74-2.428 1.219-6.892 2.257-9.526 1.039-2.634-3.98-3.565-3.394-4.313.39-.499 2.927-1.937 7.609-4.316C12.987 7.794 17.9 4 26.398 4 39.144 4 44 14.806 44 21.68c0 6.872-5.88 14.276-14.256 15.873-.749 1.09.331 3.24 3.24 6.447" stroke="#333"></path><path clip-rule="evenodd" d="M19.5 14.5c-.654 2.534-.46 4.314.583 5.339 1.042 1.024 2.818 1.695 5.328 2.01-.57 3.269.125 4.802 2.083 4.6 1.958-.201 3.135-1.015 3.53-2.44 3.06.86 4.719.14 4.976-2.16.385-3.45-1.475-6.201-2.238-6.201-.762 0-2.738-.093-2.738-1.148s-2.308-1.65-4.391-1.65-.83-1.405-3.69-.85c-1.907.37-3.055 1.203-3.443 2.5Z" stroke="#333"></path><path d="M30.5 25.5c-1.017.631-2.412 1.68-3 2.5-1.469 2.05-2.66 3.298-2.92 4.608" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBrain',
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

    const iconClass = computed(() => [name, `${name}-brain`, { [`${name}-spin`]: props.spin }]);

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
