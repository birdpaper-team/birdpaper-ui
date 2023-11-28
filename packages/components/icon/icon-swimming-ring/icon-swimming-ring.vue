<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M28 33.168A10.036 10.036 0 0 0 33.168 28M14.832 28A10.037 10.037 0 0 0 20 33.168M20 14.832A10.038 10.038 0 0 0 14.832 20M28 14.832A10.037 10.037 0 0 1 33.168 20M30 40.976A18.05 18.05 0 0 0 40.976 30M7.024 30A18.05 18.05 0 0 0 18 40.976M18 7.024A18.05 18.05 0 0 0 7.024 18M30 7.024A18.05 18.05 0 0 1 40.976 18" stroke="#333"></path><path d="M27 17h-6L18 7l2-3h8l2 3-3 10ZM17 21v6L7 30l-3-2v-8l3-2 10 3ZM21 31h6l3 10-2 3h-8l-2-3 3-10ZM31 27v-6l10-3c1.08.8 1.92 1.2 3 2v8c-1.08.8-1.92 1.2-3 2l-10-3Z" stroke="#333" stroke-miterlimit="2"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSwimmingRing',
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

    const iconClass = computed(() => [name, `${name}-swimming-ring`, { [`${name}-spin`]: props.spin }]);

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
