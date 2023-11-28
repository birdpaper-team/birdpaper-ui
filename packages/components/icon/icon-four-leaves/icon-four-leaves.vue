<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M44 4S33.59 2.201 30 8c-2.672 4.317 1 9 1 9M44 4 31 17M44 4s1.799 10.41-4 14c-4.317 2.672-9-1-9-1m0 0-3 3M31 31l-3-3m16 16s-10.41 1.799-14-4c-2.672-4.317 1-9 1-9l13 13Zm0 0s1.799-10.41-4-14c-4.317-2.672-9 1-9 1l13 13Zm0 0L31 31l13 13ZM17.264 17l3 3m-16-16s10.41-1.799 14 4c2.672 4.317-1 9-1 9l-13-13Zm0 0s-1.8 10.41 4 14c4.316 2.672 9-1 9-1l-13-13Zm0 0 13 13-13-13ZM17.264 31l3-3m-16 16s10.41 1.799 14-4c2.672-4.317-1-9-1-9l-13 13Zm0 0s-1.8-10.41 4-14c4.316-2.672 9 1 9 1l-13 13Zm0 0 13-13-13 13Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFourLeaves',
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

    const iconClass = computed(() => [name, `${name}-four-leaves`, { [`${name}-spin`]: props.spin }]);

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
