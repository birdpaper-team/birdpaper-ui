<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><ellipse cx="14" cy="10" rx="10" ry="5" stroke="#333"></ellipse><path d="M4 10v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333"></path><path d="M4 17v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333"></path><path d="M4 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333"></path><path d="M4 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333"></path><ellipse cx="34" cy="24" rx="10" ry="5" stroke="#333"></ellipse><path d="M24 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333"></path><path d="M24 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFunds',
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

    const iconClass = computed(() => [name, `${name}-funds`, { [`${name}-spin`]: props.spin }]);

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
