<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M19.102 10.894c.424.775.641 1.629.67 2.512a28.24 28.24 0 0 1 3.728-.245c1.63 0 3.212.138 4.725.397a5.597 5.597 0 0 1 .673-2.664c1.76-3.209 6.415-3.846 10.4-1.423 3.983 2.422 5.787 6.988 4.028 10.198a5.233 5.233 0 0 1-1.745 1.877C42.496 23.1 43 24.8 43 26.58 43 33.99 34.27 40 23.5 40S4 33.992 4 26.58c0-1.98.624-3.861 1.744-5.554a5.196 5.196 0 0 1-1.07-1.357c-1.76-3.21.045-7.776 4.029-10.198 3.984-2.423 8.64-1.786 10.399 1.423Z" stroke="#333"></path><circle cx="12" cy="17" r="2" fill="#333"></circle><circle cx="20.156" cy="28.576" r="2" fill="#333"></circle><circle cx="28.156" cy="28.576" r="2" fill="#333"></circle><circle cx="36" cy="17" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFrog',
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

    const iconClass = computed(() => [name, `${name}-frog`, { [`${name}-spin`]: props.spin }]);

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
