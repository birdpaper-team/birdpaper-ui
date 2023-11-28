<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)" stroke="#333"><path d="M9.438 42h3.185a2 2 0 0 0 1.868-1.286l2.2-5.753.025-5.526c0-.116.011-.233.032-.348L20.152 10.3a2 2 0 0 0-1.968-2.357h-7.321a2 2 0 0 0-2 2.056l.523 18.871-1.77 3.33a2 2 0 0 0 .269 2.266l.561.633-.963 4.48A2 2 0 0 0 9.438 42ZM16.717 29.26l-7.331-.39M38.578 42h-3.18a2 2 0 0 1-1.878-1.313l-2.093-5.726-.025-5.526c0-.117-.011-.233-.032-.348L27.965 10.3a2 2 0 0 1 1.968-2.357h7.322a2 2 0 0 1 2 2.055l-.523 18.872 1.771 3.33a2 2 0 0 1-.27 2.266l-.561.633.87 4.523A2 2 0 0 1 38.578 42ZM31.4 29.26l7.331-.39"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEmpty',
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

    const iconClass = computed(() => [name, `${name}-empty`, { [`${name}-spin`]: props.spin }]);

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
