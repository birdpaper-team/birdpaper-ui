<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M19.5 44c2.49 0 4.5-2.01 4.5-4.5V19h-4l-5 20.5c0 2.49 2.01 4.5 4.5 4.5Z" stroke="#333" stroke-miterlimit="2"></path><path d="M20 19h-4L6.68 37.9c-1.11 2.61.48 5.74 3.3 6.07A4.494 4.494 0 0 0 15 39.5M28.5 44c-2.49 0-4.5-2.01-4.5-4.5V19h4l5 20.5c0 2.49-2.01 4.5-4.5 4.5Z" stroke="#333" stroke-miterlimit="2"></path><path d="M28 19h4l9.32 18.9c1.11 2.61-.48 5.74-3.3 6.07A4.494 4.494 0 0 1 33 39.5M16.06 13c-.04-.33-.06-.66-.06-1 0-4.42 3.58-8 8-8s8 3.58 8 8c0 .34-.02.67-.06 1H16.06Z" stroke="#333" stroke-miterlimit="2"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBadminton',
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

    const iconClass = computed(() => [name, `${name}-badminton`, { [`${name}-spin`]: props.spin }]);

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
