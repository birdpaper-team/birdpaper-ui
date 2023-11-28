<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M9 8.84c0-.933.438-1.807 1.271-2.225C12.246 5.625 16.613 4 24 4c7.388 0 11.754 1.625 13.728 2.615C38.563 7.033 39 7.907 39 8.839V36a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V8.84Z" stroke="#333"></path><path d="M34 38v4M14 38v4" stroke="#333"></path><path d="M20.5 32a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM30.5 32a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#333" stroke="#333"></path><path d="M20 44h8" stroke="#333"></path><path stroke="#333" d="M9 12h30v14H9z"></path><path d="M24 12v14M20 12h8M20 26h8" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTrain',
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

    const iconClass = computed(() => [name, `${name}-train`, { [`${name}-spin`]: props.spin }]);

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
