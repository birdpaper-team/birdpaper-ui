<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)" stroke="#333"><circle cx="30.075" cy="15.562" r="11" transform="rotate(40 30.075 15.562)"></circle><path d="M21.648 8.491c-4.61.049-6.326-3.35-8.576-.67-2.032 2.423.493 5.636-1.435 7.934M25.302 25.917l-5.785 6.894c-1.607 1.915-1.682 5.116-3.61 7.414s-4.746 2.545-7.044.616c-2.298-1.928-2.545-4.746-.617-7.044 1.929-2.298 5.068-2.928 6.675-4.843 1.607-1.915 5.163-5.893 5.785-6.894"></path><circle cx="11.24" cy="19.339" r="3" transform="rotate(40 11.24 19.34)"></circle><circle cx="28.462" cy="37.707" r="3" transform="rotate(40 28.462 37.707)"></circle><path d="M37.216 24.165c.63 3.139 2.853 8.268.863 9.862-1.99 1.593-6.525-1.559-7.687 1.382"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRattle',
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

    const iconClass = computed(() => [name, `${name}-rattle`, { [`${name}-spin`]: props.spin }]);

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
