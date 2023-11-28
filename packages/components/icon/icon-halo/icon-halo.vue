<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17.364 14a12.05 12.05 0 0 0-3.453 3.5M12.197 26.18a12.073 12.073 0 0 1 0-4.36M17.364 34a12.05 12.05 0 0 1-3.453-3.5M26.36 35.768a12.062 12.062 0 0 1-4.72 0M30.636 34a12.055 12.055 0 0 0 3.453-3.5M35.803 26.18a12.064 12.064 0 0 0 0-4.36M30.636 14a12.055 12.055 0 0 1 3.453 3.5M21.64 12.232a12.054 12.054 0 0 1 4.72 0M44 24a20.211 20.211 0 0 0-.4-4M4 24a20.239 20.239 0 0 1 .4-4m34.246 17.62a20.125 20.125 0 0 1-2.796 2.493M9.354 37.62a20.122 20.122 0 0 0 2.796 2.493m3.562-34.32a19.945 19.945 0 0 0-3.562 2.094m20.138-2.094a19.945 19.945 0 0 1 3.562 2.094m-9.604-3.762a20.215 20.215 0 0 0-4.492 0m4.492 39.75a19.926 19.926 0 0 0 4.254-.955m-8.747.955a19.926 19.926 0 0 1-4.253-.955M8.155 11.794a20.061 20.061 0 0 0-1.908 2.986m33.598-2.986a20.098 20.098 0 0 1 1.908 2.986M6.247 33.22a19.892 19.892 0 0 1-1.378-3.372m36.884 3.372a19.892 19.892 0 0 0 1.378-3.372" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHalo',
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

    const iconClass = computed(() => [name, `${name}-halo`, { [`${name}-spin`]: props.spin }]);

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
