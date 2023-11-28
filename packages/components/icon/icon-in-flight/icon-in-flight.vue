<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M12 40c0-7.18 5.373-13 12-13s12 5.82 12 13" stroke="#333"></path><path d="M13 37c0 1 2.5 2 4 1s1.96-3.505 3.5-3.074C22.04 35.357 22 38.5 24 40s5.5 1 7-1.5-.08-3.175 1.061-4.797c.76-1.081 1.73-.816 1.939-.703" stroke="#333"></path><path d="M23 21h2M32.151 22.47l1.696 1.06M14.151 23.53l1.697-1.06M39.059 28.134l1 1.732M8.059 29.866l1-1.732M41.895 37.006l.209 1.989M4.895 38.995l.209-1.99" stroke="#333"></path><path d="M42 10 9 18" stroke="#333"></path><path d="m16 7 13 6-12 3-5-7 4-2ZM9 18l-3-4" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconInFlight',
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

    const iconClass = computed(() => [name, `${name}-in-flight`, { [`${name}-spin`]: props.spin }]);

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
