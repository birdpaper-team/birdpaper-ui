<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M7 32c3 5 8 8 13 9s10.808.144 15-3c6-4.5 8-12 8-17s-2-10.5-3-12-3-2-3-2" stroke="#333"></path><path d="M21 13c-4.355 1.604-9 0-13 3-4.696 3.523-6 9-3 14 2.352 3.92 6 6 12 6s9.764-1.765 14-6c6-6 8-15.5 8-19s-2.5-5.5-6-5-6.427 4.947-12 7Z" stroke="#333"></path><path d="M21.945 20.117c-1.223.48-2.527 0-3.65.898-1.32 1.054-1.686 2.693-.843 4.19.66 1.172 1.685 1.795 3.37 1.795s2.742-.528 3.931-1.796C26.438 23.41 27 20.566 27 19.52c0-1.047-.702-1.646-1.685-1.496-.983.15-1.805 1.48-3.37 2.094Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAvocadoOne',
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

    const iconClass = computed(() => [name, `${name}-avocado-one`, { [`${name}-spin`]: props.spin }]);

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
