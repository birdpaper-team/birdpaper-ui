<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m29.003 18.373 1.105-1.105.53-.53a5.5 5.5 0 0 0 0-7.778v0a5.5 5.5 0 0 0-7.778 0L9.172 22.648a.143.143 0 0 0 0 .202l6.97 6.97a1 1 0 0 0 1.414 0l3.713-3.713 1.105-1.105" stroke="#333"></path><path d="m28.163 6.485 1.768-1.767a3.5 3.5 0 0 1 4.95 4.95l-1.768 1.767-4.95-4.95ZM10.485 24.163l-4.242 4.243 4.95 4.95 4.242-4.243-4.95-4.95Z" stroke="#333"></path><circle cx="26.041" cy="22.042" r="4.5" transform="rotate(45 26.041 22.042)" stroke="#333"></circle><path d="m6 20 12.728 12.728M10 44h32M31 22c4 0 8 4 8 10 0 6.4-5.167 9.833-8 12" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMicroscopeOne',
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

    const iconClass = computed(() => [name, `${name}-microscope-one`, { [`${name}-spin`]: props.spin }]);

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
