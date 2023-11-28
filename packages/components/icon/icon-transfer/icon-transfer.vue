<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M37 28.392v7.015C37 39.048 34.089 42 30.497 42s-6.503-2.952-6.503-6.593l.012-22.264C24.006 9.198 21.095 6 17.503 6 13.912 6 11 9.198 11 13.143v15.25" stroke="#333"></path><path d="m43 31-6-6-6 6M43 10.727C43 15.182 37 19 37 19s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.148 6.148 0 0 1 37 5c1.591 0 3.117.603 4.243 1.677A5.598 5.598 0 0 1 43 10.727ZM17 34.727C17 39.182 11 43 11 43s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.148 6.148 0 0 1 11 29c1.591 0 3.117.603 4.243 1.677A5.598 5.598 0 0 1 17 34.727Z" stroke="#333"></path><circle cx="37" cy="11" r="2" fill="#333"></circle><circle cx="11" cy="35" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTransfer',
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

    const iconClass = computed(() => [name, `${name}-transfer`, { [`${name}-spin`]: props.spin }]);

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
