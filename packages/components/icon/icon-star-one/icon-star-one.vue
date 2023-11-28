<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path fill-rule="evenodd" clip-rule="evenodd" d="m16.871 33.044-.873 11.66c-.062.82.667 1.383 1.318 1.018 4.613-2.584 19.062-12.074 26.386-32.932.336-.957-.567-1.82-1.337-1.28-4.326 3.03-13.78 9.29-19.623 10.484 0 0 3.742-2.6 5.981-6.588.22-.392.201-.892-.043-1.245L20.513 2.389c-.484-.697-1.478-.408-1.652.481l-2.543 12.937L4.384 26.223c-.598.522-.476 1.577.215 1.856l12.272 4.965ZM37.974 28.448c-.755 1.055-2.383 3.224-3.886 4.55-.3.265-.26.709.084.925l7.943 4.986c.478.3 1.123-.056 1.043-.576-.37-2.383-1.434-7.351-4.125-9.959-.3-.29-.819-.26-1.059.074Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconStarOne',
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

    const iconClass = computed(() => [name, `${name}-star-one`, { [`${name}-spin`]: props.spin }]);

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
