<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M16.64 12.746a8.081 8.081 0 0 1 14.72 0l3.061 6.754 3.686 6.322a9.88 9.88 0 0 1-1.652 12.063l-1.19 1.156a8.013 8.013 0 0 1-10.634.472 1.002 1.002 0 0 0-1.262 0 8.013 8.013 0 0 1-10.634-.472l-1.19-1.156a9.88 9.88 0 0 1-1.652-12.063L13.58 19.5l3.06-6.754Z" stroke="#333"></path><path d="M21.5 4c.667.5 2.1 1.9 2.5 3.5.4 1.6.167 3.333 0 4" stroke="#333"></path><circle cx="16" cy="28" r="2" fill="#333"></circle><circle cx="18" cy="34" r="2" fill="#333"></circle><circle cx="23" cy="30" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPear',
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

    const iconClass = computed(() => [name, `${name}-pear`, { [`${name}-spin`]: props.spin }]);

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
