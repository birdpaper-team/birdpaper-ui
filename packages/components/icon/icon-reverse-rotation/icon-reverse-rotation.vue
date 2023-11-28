<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M34 6.676C39.978 10.134 44 16.597 44 24M34 6.676V14m0-7.324h7.324m0 27.324C37.866 39.978 31.403 44 24 44m17.324-10H34m7.324 0v7.324m-27.324 0C8.022 37.866 4 31.403 4 24m10 17.324V34m0 7.324H6.676m0-27.324C10.134 8.022 16.597 4 24 4M6.676 14H14m-7.324 0V6.676" stroke="#333"></path><path d="M41.324 34C37.866 39.978 31.403 44 24 44m17.324-10H34m7.324 0v7.324M14 41.324C8.022 37.866 4 31.403 4 24m10 17.324V34m0 7.324H6.676M6.676 14C10.134 8.022 16.597 4 24 4M6.676 14H14m-7.324 0V6.676M34 6.676C39.978 10.134 44 16.597 44 24M34 6.676V14m0-7.324h7.324" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconReverseRotation',
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

    const iconClass = computed(() => [name, `${name}-reverse-rotation`, { [`${name}-spin`]: props.spin }]);

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
