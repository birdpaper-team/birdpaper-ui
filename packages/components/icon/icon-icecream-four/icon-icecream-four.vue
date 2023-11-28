<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)" stroke="#333"><path d="m18.843 13.723 13.435 13.435L11.679 40.5l-6.045-6.045 13.209-20.732ZM38.773 19.51c-1.06 1.061-1.76 1.07-2.812 1.431-.033 2.796.006 5.61-3.542 6.304L18.603 13.429s-.009-1.37 1.396-2.085c.495-.232 1.499-.123 2.097-.025 1.406-3.025 3.535-3.536 5.903-2.558 1.135-1.718 3.94-2.45 6.028-1.775 2.089.675 2.072 2.073 3.462 2.755 1.39.683 2.804-.731 2.812-1.43.008-.7-.114-2.036.828-1.794.575.156 1.038.715 1.596 3.044.31 1.308.13 3.242-.987 4.429-.686.729-2.217 1.11-2.916 1.327.066.19 1.012 3.133-.05 4.193Z"></path><path d="M38.822 15.316c-2.813 1.43-4.901.756-6.974-1.316"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconIcecreamFour',
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

    const iconClass = computed(() => [name, `${name}-icecream-four`, { [`${name}-spin`]: props.spin }]);

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
