<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M23.5 20.5c-1.154 0-4.348-.169-8.386 4.446-2.403 2.746-2.827 6.087-2.65 8.41.085 1.105 1.205 1.714 2.234 1.303.744-.297 1.56-.668 2.146-1.06 1.731-1.153 1.154-2.307 1.731-4.037.577-1.731 2.885-2.885 5.192-2.308 2.308.577 3.19 2.329 3.462 4.038C27.5 33 26.5 35 24.344 35.907c-2.378 1.001-3.461 0-6.346-.576-1.503-.301-3.006 1.014-3.871 1.967a1.514 1.514 0 0 0-.118 1.918c.289.402.661.863 1.105 1.307 1.154 1.153 5.769 4.615 10.384 4.038s8.653-4.038 10.384-8.077C37.612 32.446 37 27 33 24" stroke="#333"></path><path d="M33 24 23.129 4.24c-.23-.46-.776-.677-1.221-.42-1.041.597-2.26 1.722-1.864 3.467C20.553 9.537 25.581 27.048 27 30" stroke="#333"></path><path d="m36 27-.948-19.31c-.024-.499-.415-.911-.914-.88-1.201.077-2.814.548-3.225 2.307-.524 2.247-.9 5.608-.913 8.883" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRock',
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

    const iconClass = computed(() => [name, `${name}-rock`, { [`${name}-spin`]: props.spin }]);

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
