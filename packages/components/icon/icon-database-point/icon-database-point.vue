<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 36v-6M20 40H6M28 40h14M28 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM39 9v16c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5V9" stroke="#333"></path><path d="M39 17c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5" stroke="#333"></path><path d="M39 9c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z"></path><path d="M39 9c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z"></path><path d="M39 9c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z" stroke="#333"></path><path d="M39 9c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDatabasePoint',
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

    const iconClass = computed(() => [name, `${name}-database-point`, { [`${name}-spin`]: props.spin }]);

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
