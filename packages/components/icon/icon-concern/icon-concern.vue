<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M10.858 9.858A19.937 19.937 0 0 0 5 24a19.937 19.937 0 0 0 5.858 14.142M39.142 38.142A19.937 19.937 0 0 0 45 24a19.937 19.937 0 0 0-5.858-14.142M34.9 33.9A13.956 13.956 0 0 0 39 24c0-3.866-1.567-7.366-4.1-9.9M15.1 14.1A13.956 13.956 0 0 0 11 24c0 3.866 1.567 7.366 4.1 9.9" stroke="#333"></path><path d="M28.182 20C30.29 20 32 21.612 32 23.6c0 2.588-2.546 4.8-3.818 6-.849.8-1.91 1.6-3.182 2.4-1.273-.8-2.333-1.6-3.182-2.4-1.273-1.2-3.818-3.412-3.818-6 0-1.988 1.71-3.6 3.818-3.6 1.328 0 2.498.64 3.182 1.61.684-.97 1.854-1.61 3.182-1.61Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconConcern',
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

    const iconClass = computed(() => [name, `${name}-concern`, { [`${name}-spin`]: props.spin }]);

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
