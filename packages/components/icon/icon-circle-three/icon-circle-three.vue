<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M32.904 13.927A10 10 0 0 1 24 19.37a10 10 0 0 1-8.904-5.443A14.979 14.979 0 0 0 9 26c0 .818.065 1.62.191 2.402.267-.02.537-.032.809-.032 5.523 0 10 4.477 10 10 0 .697-.071 1.376-.207 2.032 1.335.39 2.747.598 4.207.598s2.872-.209 4.207-.598A10.038 10.038 0 0 1 28 38.37c0-5.523 4.477-10 10-10 .272 0 .542.011.809.032A15.11 15.11 0 0 0 39 26c0-4.95-2.398-9.34-6.096-12.073Z" stroke="#333"></path><path clip-rule="evenodd" d="M24 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM9 43a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM39 43a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCircleThree',
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

    const iconClass = computed(() => [name, `${name}-circle-three`, { [`${name}-spin`]: props.spin }]);

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
