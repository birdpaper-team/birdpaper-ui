<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M36 27c0 7.217-5.373 17-12 17s-12-9.783-12-17c0-7.216 1.5-11 12-11s12 3.784 12 11Z" stroke="#333"></path><ellipse rx="5" ry="3.5" transform="scale(1 -1) rotate(45 40.625 38.327)" stroke="#333"></ellipse><ellipse cx="9" cy="17.5" rx="5" ry="3.5" transform="rotate(45 9 17.5)" stroke="#333"></ellipse><path d="M12 4c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="#333"></path><path d="M18 7c0 4.97 2.686 9 6 9s6-4.03 6-9" stroke="#333"></path><circle cx="20" cy="26" r="2" fill="#333"></circle><circle cx="24" cy="34" r="2" fill="#333"></circle><circle cx="28" cy="26" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDeer',
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

    const iconClass = computed(() => [name, `${name}-deer`, { [`${name}-spin`]: props.spin }]);

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
