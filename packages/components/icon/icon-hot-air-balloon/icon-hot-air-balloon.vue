<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M39 18.352C39 27.855 31 36 24 36S9 27.855 9 18.352C9 10.654 14.893 4 24 4s15 6.654 15 14.352Z" stroke="#333"></path><path d="M25 4c3.7 3.819 7 10.12 7 16 0 5.807-3.38 12.192-7 16M23 4c-4.317 4.087-7 9.706-7 16 0 6.215 2.777 11.924 7 16" stroke="#333" stroke-miterlimit="2"></path><path d="M22 16.018s5.065 1.017 9 0C34.935 15 38 13 38 13M9 20s5 2.5 9 3.5 8 .5 8 .5" stroke="#333"></path><path d="m18 35 1.4 7.095S22.125 44 24 44c1.875 0 4.6-1.905 4.6-1.905l1.394-7.065L24 36l-6-1Z"></path><path d="m30 35-.006.03m0 0L28.6 42.095S25.875 44 24 44c-1.875 0-4.6-1.905-4.6-1.905L18 35l6 1 5.994-.97Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHotAirBalloon',
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

    const iconClass = computed(() => [name, `${name}-hot-air-balloon`, { [`${name}-spin`]: props.spin }]);

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
