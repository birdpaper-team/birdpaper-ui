<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M9 26s8-12 13-18c3.13-3.757 9-5.25 14-3s7 7 5 11-10 19-10 19" stroke="#333"></path><path d="M31 33.188c0 3.152-1.756 5.97-4.514 7.838-2.166 1.468-4.95.841-7.986.841-3.201 0-6.122.528-8.333-1.085C7.609 38.917 6 36.206 6 33.188 6 26.812 11.596 23 18.5 23S31 27.561 31 33.188Z" stroke="#333"></path><path d="M23 33.217c0 .996-.632 1.885-1.625 2.476-.78.463-1.782.265-2.875.265-1.152 0-2.204.167-3-.343-.92-.589-1.5-1.445-1.5-2.398C14 31.204 16.015 30 18.5 30s4.5 1.44 4.5 3.217ZM15 18s3.5-1 8 0M20 11s3.5-1.5 7 0" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBreadOne',
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

    const iconClass = computed(() => [name, `${name}-bread-one`, { [`${name}-spin`]: props.spin }]);

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
