<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M18 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v32c0 1.886 0 2.828.586 3.414C5.172 44 6.114 44 8 44h4l4-4 4 4h20c1.886 0 2.828 0 3.414-.586C44 42.828 44 41.886 44 40v-7.525c0-4.992 0-7.488-1.48-9.183-1.48-1.696-3.953-2.033-8.899-2.707l-1.242-.17c-4.946-.674-7.42-1.011-8.9-2.707C22 16.013 22 13.518 22 8.525V8c0-1.886 0-2.828-.586-3.414C20.828 4 19.886 4 18 4ZM44 34H4M4 11.5h18" stroke="#333"></path><circle cx="15" cy="23" r="3" stroke="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconClothesSkates',
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

    const iconClass = computed(() => [name, `${name}-clothes-skates`, { [`${name}-spin`]: props.spin }]);

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
