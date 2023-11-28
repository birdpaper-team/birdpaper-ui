<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="M24 43.6c8.432 0 15.56-6.68 17.894-14.35C42.418 27.526 46 27.526 46 23.8s-3.616-3.94-4.201-5.752C39.372 10.535 32.32 4 24 4 15.675 4 8.62 10.54 6.197 18.06 5.615 19.87 2 20.01 2 23.8s3.592 3.79 4.135 5.542C8.497 36.964 15.602 43.6 24 43.6Z" stroke="#333"></path><path d="M41.799 18.048C39.372 10.535 32.32 4 24 4" stroke="#333"></path><path d="M19.1 21.6c0 .826-.224 1.552-.56 2.056-.339.508-.752.744-1.14.744-.388 0-.8-.236-1.14-.744-.336-.504-.56-1.23-.56-2.056 0-.827.224-1.552.56-2.056.34-.508.752-.744 1.14-.744.389 0 .801.236 1.14.744.336.504.56 1.23.56 2.056ZM32.3 21.6c0 .826-.224 1.552-.56 2.056-.339.508-.752.744-1.14.744-.388 0-.801-.236-1.14-.744-.336-.504-.56-1.23-.56-2.056 0-.827.224-1.552.56-2.056.339-.508.752-.744 1.14-.744.388 0 .801.236 1.14.744.336.504.56 1.23.56 2.056Z" fill="#333" stroke="#333"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.498 31.75c1.93 1.3 3.768 1.95 5.511 1.95 1.742 0 3.469-.649 5.18-1.945" fill="#333"></path><path d="M18.498 31.75c1.93 1.3 3.768 1.95 5.511 1.95 1.742 0 3.469-.649 5.18-1.945M31.728 6.2c.268 1.934-.321 3.347-1.769 4.239-1.447.892-3.799 1.31-7.055 1.254" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBaby',
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

    const iconClass = computed(() => [name, `${name}-baby`, { [`${name}-spin`]: props.spin }]);

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
