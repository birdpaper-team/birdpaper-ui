<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><rect x="6" y="22" width="20" height="20" rx="3" stroke="#333"></rect><path d="M30 6h12v12" stroke="#333"></path><circle cx="34" cy="42" r="1.5" fill="#333" stroke="#333"></circle><circle r="1.5" transform="matrix(1 0 0 -1 6 14)" fill="#333" stroke="#333"></circle><circle cx="42" cy="42" r="1.5" fill="#333" stroke="#333"></circle><circle r="1.5" transform="matrix(1 0 0 -1 6 6)" fill="#333" stroke="#333"></circle><circle cx="42" cy="34" r="1.5" fill="#333" stroke="#333"></circle><circle r="1.5" transform="matrix(1 0 0 -1 14 6)" fill="#333" stroke="#333"></circle><circle cx="42" cy="26" r="1.5" fill="#333" stroke="#333"></circle><circle r="1.5" transform="matrix(1 0 0 -1 22 6)" fill="#333" stroke="#333"></circle><path d="m6 34 6.12-4.59a3 3 0 0 1 3.7.078L25 37M42 6 30 18" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMovingPicture',
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

    const iconClass = computed(() => [name, `${name}-moving-picture`, { [`${name}-spin`]: props.spin }]);

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
