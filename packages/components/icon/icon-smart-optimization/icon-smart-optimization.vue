<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="M24 45c3.22 0 8.728-4.2 8.728-21S27.22 3 24 3c-3.22 0-8.727 4.483-8.727 21S20.78 45 24 45Z" stroke="#333"></path><path clip-rule="evenodd" d="M5.105 35c1.61 2.812 8.143 5.421 23.259-3.379s16.142-15.809 14.531-18.62c-1.61-2.813-8.397-5.274-23.258 3.378C4.775 25.031 3.495 32.188 5.105 35Z" stroke="#333"></path><path clip-rule="evenodd" d="M5.105 13c-1.61 2.812-.585 9.821 14.532 18.621 15.116 8.8 21.648 6.191 23.258 3.38 1.61-2.813.33-9.97-14.531-18.622C13.502 7.727 6.715 10.188 5.105 13Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSmartOptimization',
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

    const iconClass = computed(() => [name, `${name}-smart-optimization`, { [`${name}-spin`]: props.spin }]);

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
