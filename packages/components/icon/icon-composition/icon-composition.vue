<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="m39.828 21.786-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058"></path><path d="m39.828 21.786-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058M8.734 27.424l26.144-.688" stroke="#333"></path><path d="M29.393 20.907a2 2 0 1 0-2.828-2.829 2 2 0 0 0 2.828 2.829ZM23.736 23.735a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Z" fill="#333"></path><path d="m23.564 5.522 19.8 19.8" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconComposition',
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

    const iconClass = computed(() => [name, `${name}-composition`, { [`${name}-spin`]: props.spin }]);

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
