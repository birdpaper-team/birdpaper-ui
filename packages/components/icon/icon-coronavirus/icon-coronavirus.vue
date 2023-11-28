<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M7.635 35.5A20.11 20.11 0 0 0 13 40.706M27.868 43.626A20.107 20.107 0 0 1 24 44c-1.324 0-2.617-.129-3.869-.374M43.55 28.243c.294-1.368.45-2.787.45-4.243 0-1.425-.15-2.816-.433-4.157M40.365 12.5A20.102 20.102 0 0 0 35 7.294M20.155 4.37A20.1 20.1 0 0 1 24 4c1.315 0 2.6.127 3.845.37M7.635 12.5A20.104 20.104 0 0 1 13 7.294M40.5 35.294a20.096 20.096 0 0 1-5.365 5.206M16 24H4M10 38l8.343-8.343M24 32v12M38 38l-8.343-8.343M32 24h12M38 10l-8.343 8.343M24 16V4M10 10l8.343 8.343M4.433 19.843A20.083 20.083 0 0 0 4 24c0 1.425.15 2.816.433 4.157M24 32a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCoronavirus',
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

    const iconClass = computed(() => [name, `${name}-coronavirus`, { [`${name}-spin`]: props.spin }]);

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
