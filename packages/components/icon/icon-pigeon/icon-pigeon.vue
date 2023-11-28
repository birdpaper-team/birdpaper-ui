<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M14 26c-1.04-1.793-2.15-5.551 2.008-10.244 1.213-1.141 2.806-2.64 5.716-3.423C24.842 10.867 26.401 8.52 24.323 5 25.882 5.978 29 9.693 29 16.733" stroke="#333"></path><path d="M16.253 27.93C8 23.57 4.51 30.195 4 33.755c4 0 8.679 2.911 10.721 5.823 3.676 4.66 9.36 3.56 11.742 2.427 7.352-3.883 9.87-3.56 10.21-2.912.41 3.106 1.532 3.883 2.043 3.883 3.676.388 4.935-4.045 5.105-6.31.817-9.319-1.361-9.707-2.552-8.736-4.902 5.824-7.829 6.957-8.68 6.795-3.675-.777-3.233-2.265-2.552-2.913C36.572 26.377 36.504 14.34 35.653 9c-2.45 5.825-6.467 8.251-8.169 8.737-10.21 2.718-11.742 7.928-11.231 10.193Z" stroke="#333"></path><circle cx="12" cy="31.412" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPigeon',
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

    const iconClass = computed(() => [name, `${name}-pigeon`, { [`${name}-spin`]: props.spin }]);

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
