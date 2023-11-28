<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="M24 41.02c2.431 0 3.431 1.31 4.734 1.601 1.303.292 2.397.372 3.517-.121 2.219-.978 3.571-2.142 5.212-3.881C40.505 35.395 42 30.964 42 25.029s-1.6-9.003-4.067-11.009c-2.466-2.006-3.896-2.39-6.878-2.006-2.982.384-4.606 3.588-7.047 3.588-2.44 0-5.415-3.159-8.002-3.588-2.588-.43-4.006 0-6.246 2.006S6 19.15 6 25.03c0 5.878 1.552 10.236 4.593 13.46 1.64 1.739 2.937 3.033 5.155 4.01 1.12.494 2.279.414 3.536.122 1.258-.29 2.258-1.6 4.716-1.6Z" stroke="#333"></path><path d="M24.009 15.602C24.794 7.868 28.128 4 34.01 4c.54 1.628.68 3.203.418 4.726-.123.724-.508 1.756-1.153 3.096M14.229 26c-.277 1.346-.277 2.731 0 4.157.276 1.425.865 2.525 1.767 3.3" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAppleOne',
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

    const iconClass = computed(() => [name, `${name}-apple-one`, { [`${name}-spin`]: props.spin }]);

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
