<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><ellipse cx="24" cy="27" rx="18" ry="17" stroke="#333"></ellipse><ellipse cx="16.933" cy="24.64" rx="3" ry="4" transform="rotate(15 16.933 24.64)" stroke="#333"></ellipse><ellipse rx="3" ry="4" transform="scale(-1 1) rotate(15 -109.047 -105.16)" stroke="#333"></ellipse><path d="M41 20.999c3.124-3.124 3.438-8.219.313-11.343C38.19 6.532 32.124 6.876 29 10M7 21c-3.124-3.125-3.468-8.22-.344-11.343C9.781 6.532 15.876 6.875 19 10" stroke="#333"></path><path d="M20 35c.5 1.294 2.2 3.277 5 .862 2.8 2.415 4.5.431 5-.862" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPanda',
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

    const iconClass = computed(() => [name, `${name}-panda`, { [`${name}-spin`]: props.spin }]);

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
