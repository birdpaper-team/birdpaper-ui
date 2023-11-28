<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M5.615 22.585a3 3 0 0 1 0-4.242L18.343 5.615a3 3 0 0 1 4.242 0l19.8 19.799a3 3 0 0 1 0 4.242L29.657 42.384a3 3 0 0 1-4.243 0L5.615 22.585Z" stroke="#333"></path><circle cx="14.808" cy="20.465" r="2" transform="rotate(-45 14.808 20.465)" fill="#333"></circle><circle cx="23.293" cy="28.949" r="2" transform="rotate(-45 23.293 28.95)" fill="#333"></circle><circle cx="19.05" cy="24.707" r="2" transform="rotate(-45 19.05 24.707)" fill="#333"></circle><circle cx="27.536" cy="33.193" r="2" transform="rotate(-45 27.536 33.193)" fill="#333"></circle><circle cx="20.464" cy="14.807" r="2" transform="rotate(-45 20.464 14.807)" fill="#333"></circle><circle cx="28.95" cy="23.293" r="2" transform="rotate(-45 28.95 23.293)" fill="#333"></circle><circle cx="24.707" cy="19.051" r="2" transform="rotate(-45 24.707 19.05)" fill="#333"></circle><circle cx="33.193" cy="27.535" r="2" transform="rotate(-45 33.193 27.535)" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPill',
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

    const iconClass = computed(() => [name, `${name}-pill`, { [`${name}-spin`]: props.spin }]);

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
