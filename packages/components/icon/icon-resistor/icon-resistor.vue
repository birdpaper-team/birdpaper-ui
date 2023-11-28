<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M9.858 31.071a2 2 0 0 1 0-2.829l2.95-2.95a2 2 0 0 1 1.414-.585h2.585a2 2 0 0 0 1.415-.586l5.899-5.9a2 2 0 0 0 .586-1.413v-2.586a2 2 0 0 1 .586-1.415l2.95-2.95a2 2 0 0 1 2.828 0l7.07 7.072a2 2 0 0 1 0 2.828l-2.949 2.95a2 2 0 0 1-1.414.586h-2.586a2 2 0 0 0-1.414.586l-5.9 5.9a2 2 0 0 0-.585 1.413v2.586a2 2 0 0 1-.586 1.414l-2.95 2.95a2 2 0 0 1-2.828 0l-7.071-7.071Z" stroke="#333"></path><path d="m7.03 40.97 6.363-6.364M34.607 13.393l6.364-6.364" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconResistor',
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

    const iconClass = computed(() => [name, `${name}-resistor`, { [`${name}-spin`]: props.spin }]);

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
