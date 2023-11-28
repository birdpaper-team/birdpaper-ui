<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 44a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM40 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#333"></path><path d="M12 24h24M24 12v24M37.305 15.11a16.073 16.073 0 0 0-4.415-4.415m-17.78 0a16.074 16.074 0 0 0-4.415 4.415l4.415-4.415ZM10.696 32.89a16.08 16.08 0 0 0 4.415 4.415l-4.415-4.415Zm22.195 4.415a16.079 16.079 0 0 0 4.415-4.415l-4.415 4.415Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCrossRing',
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

    const iconClass = computed(() => [name, `${name}-cross-ring`, { [`${name}-spin`]: props.spin }]);

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
