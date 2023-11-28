<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m17 10-2-5c-2.167.833-6.8 5.8-6 13M31 10l2-5c2.167.833 6.8 5.8 6 13" stroke="#333"></path><path d="M42 28.5C42 38.165 33.941 43 24 43S6 38.165 6 28.5 14.059 9 24 9s18 9.835 18 19.5Z" stroke="#333"></path><circle cx="20" cy="17" r="2" fill="#333"></circle><circle cx="28" cy="17" r="2" fill="#333"></circle><path d="M24 26c0 1.657.5 5.5-3 5.5a3 3 0 0 1-3-3" stroke="#333"></path><path d="M24.025 26c0 1.657-.5 5.5 3 5.5a3 3 0 0 0 3-3" stroke="#333"></path><path d="M26 25.75c0 .69-2 1.75-2 1.75s-2-1.06-2-1.75.5-1.25 2-1.25 2 .56 2 1.25Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDog',
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

    const iconClass = computed(() => [name, `${name}-dog`, { [`${name}-spin`]: props.spin }]);

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
