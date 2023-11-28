<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)"><rect x="6" y="6" width="36" height="36" rx="3" stroke="#333"></rect><path d="m23.293 10.565-3.243 3.242c-.63.63-.183 1.708.707 1.708h6.486c.89 0 1.337-1.078.707-1.708l-3.243-3.242a1 1 0 0 0-1.414 0ZM10.565 24.707l3.242 3.243c.63.63 1.708.183 1.708-.707v-6.486c0-.89-1.078-1.337-1.708-.707l-3.242 3.243a1 1 0 0 0 0 1.414ZM24.707 37.435l3.243-3.242c.63-.63.183-1.708-.707-1.708h-6.486c-.89 0-1.337 1.078-.707 1.708l3.243 3.242a1 1 0 0 0 1.414 0ZM37.435 23.293l-3.242-3.243c-.63-.63-1.708-.183-1.708.707v6.486c0 .89 1.078 1.337 1.708.707l3.242-3.243a1 1 0 0 0 0-1.414Z" fill="#333"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDirection',
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

    const iconClass = computed(() => [name, `${name}-direction`, { [`${name}-spin`]: props.spin }]);

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
