<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M20.987 34.552 12 29h27a3 3 0 1 1 0 6H22.564a3 3 0 0 1-1.577-.448Z" stroke="#333"></path><path d="M30 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="#333" stroke-miterlimit="2"></path><path d="M34 32c4-3 2.5-9.566 1.5-11.5-1-1.934-2.95-4.5-2.95-4.5s-1.05 0-2.05 1c-2.678 2.679-4.5 6-7 6s-6-2-6-2" stroke="#333" stroke-miterlimit="2"></path><path d="M20 15c-3.596-4.496-6.385-6.566-12-6.938C6.899 7.989 6 8.895 6 10v18M7 43c4 0 2.938-2 6-2 3.063 0 2 2 5.5 2s2.5-2 6-2 2.938 2 6 2c3.063 0 1.5-2 5-2s2.563 2 6.5 2" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFishing',
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

    const iconClass = computed(() => [name, `${name}-fishing`, { [`${name}-spin`]: props.spin }]);

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
