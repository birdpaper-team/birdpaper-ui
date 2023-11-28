<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M42.336 16C39.249 8.936 32.2 4 24 4 15.799 4 8.75 8.936 5.664 16" stroke="#333"></path><path d="M24 14a19.94 19.94 0 0 0-6 14.283c0 .5.018.996.055 1.488A19.938 19.938 0 0 1 24 44a19.938 19.938 0 0 1 5.945-14.23A19.94 19.94 0 0 0 24 14Z" stroke="#333"></path><path d="M4 24c0 11.046 8.954 20 20 20a19.938 19.938 0 0 0-5.945-14.23A19.936 19.936 0 0 0 4 24Z" stroke="#333"></path><path d="M44 24c0 11.046-8.954 20-20 20a19.938 19.938 0 0 1 5.945-14.23A19.936 19.936 0 0 1 44 24Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGreenNewEnergy',
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

    const iconClass = computed(() => [name, `${name}-green-new-energy`, { [`${name}-spin`]: props.spin }]);

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
