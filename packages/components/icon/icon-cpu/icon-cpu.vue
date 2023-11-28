<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M38 8H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" stroke="#333"></path><path d="M30 18H18v12h12V18Z" stroke="#333"></path><path clip-rule="evenodd" d="M14.91 2v6-6Z"></path><path d="M14.91 2v6" stroke="#333"></path><path clip-rule="evenodd" d="M14.91 40v6-6Z"></path><path d="M14.91 40v6" stroke="#333"></path><path clip-rule="evenodd" d="M24 2v6-6Z"></path><path d="M24 2v6" stroke="#333"></path><path clip-rule="evenodd" d="M24 40v6-6Z"></path><path d="M24 40v6" stroke="#333"></path><path clip-rule="evenodd" d="M33.09 2v6-6Z"></path><path d="M33.09 2v6" stroke="#333"></path><path clip-rule="evenodd" d="M33.09 40v6-6Z"></path><path d="M33.09 40v6" stroke="#333"></path><path clip-rule="evenodd" d="M2 14.91h6-6Z"></path><path d="M2 14.91h6" stroke="#333"></path><path clip-rule="evenodd" d="M40 14.91h6-6Z"></path><path d="M40 14.91h6" stroke="#333"></path><path clip-rule="evenodd" d="M2 24h6-6Z"></path><path d="M2 24h6" stroke="#333"></path><path clip-rule="evenodd" d="M40 24h6-6Z"></path><path d="M40 24h6" stroke="#333"></path><path clip-rule="evenodd" d="M2 33.09h6-6Z"></path><path d="M2 33.09h6" stroke="#333"></path><path clip-rule="evenodd" d="M40 33.09h6-6Z"></path><path d="M40 33.09h6" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCpu',
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

    const iconClass = computed(() => [name, `${name}-cpu`, { [`${name}-spin`]: props.spin }]);

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
