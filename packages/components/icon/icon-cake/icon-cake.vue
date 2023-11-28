<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 12v5M8 27v13a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V27M4 21.97A4.97 4.97 0 0 1 8.97 17h30.06A4.969 4.969 0 0 1 44 21.97v.278a4.557 4.557 0 0 1-2.864 4.231 3.038 3.038 0 0 1-2.544-.132l-.342-.18a3.4 3.4 0 0 0-3.167 0 3.4 3.4 0 0 1-3.166 0 3.4 3.4 0 0 0-3.167 0 3.4 3.4 0 0 1-3.167 0 3.4 3.4 0 0 0-3.166 0 3.4 3.4 0 0 1-3.167 0 3.4 3.4 0 0 0-3.167 0 3.4 3.4 0 0 1-3.166 0 3.4 3.4 0 0 0-3.167 0l-.342.18a3.038 3.038 0 0 1-2.543.132A4.557 4.557 0 0 1 4 22.25v-.28Z" stroke="#333"></path><path d="M27 8c-.8-4-3-4-3-4s-2.2 0-3 4c-1 5 7 5 6 0Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCake',
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

    const iconClass = computed(() => [name, `${name}-cake`, { [`${name}-spin`]: props.spin }]);

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
