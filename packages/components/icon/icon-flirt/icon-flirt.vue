<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M26 21c-2-.5-4.753-1.638-8.83 1.092-3.03 2.03-4.305 5.148-4.735 7.438-.205 1.089.72 1.967 1.82 1.836.796-.094 1.68-.24 2.347-.467 1.97-.667 1.712-1.93 2.717-3.453 1.006-1.522 3.533-2.04 5.613-.885 2.08 1.154 2.746 3.125 2.298 4.797-.448 1.671-1.453 3.194-3.98 3.711-2.528.517-3.344-.896-5.981-2.2-1.374-.68-3.166.202-4.249.899a1.514 1.514 0 0 0-.61 1.822c.175.463.415 1.005.729 1.548.816 1.413 4.378 5.951 8.985 6.588 4.607.638 9.404-1.66 12.12-5.114 2.718-3.452 2.798-8.209.907-12.299" stroke="#333"></path><path d="M35.046 26.42 32.001 14l-9.293-9.293c-.39-.39-1.02-.384-1.335.07-.753 1.085-1.751 3.154-.372 5.223.487.731 4 5 4 5s2.097 12.574 2.472 14.567" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFlirt',
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

    const iconClass = computed(() => [name, `${name}-flirt`, { [`${name}-spin`]: props.spin }]);

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
