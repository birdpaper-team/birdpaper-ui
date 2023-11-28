<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M9.583 27.182C7.867 28.354 7.009 30.293 7.009 33c0 4.06 4.991 11 9.492 11h11.515c4.405 0 7.08-3.85 7.08-6.94V24.6a3.253 3.253 0 0 0-3.243-3.253 3.235 3.235 0 0 0-3.245 3.226v.11" stroke="#333"></path><path d="M10.981 29.445V7.662a3.217 3.217 0 0 1 6.435 0v15.986" stroke="#333"></path><path d="M17.416 24v-4.192a2.804 2.804 0 0 1 5.608 0v4.62" stroke="#333"></path><path d="M23 24.658v-2.85a2.804 2.804 0 0 1 5.608 0v3.195" stroke="#333"></path><path d="M11 8h30" stroke="#333"></path><path d="m36 12.5 1.667-1.5L41 8l-3.333-3L36 3.5" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandDrag',
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

    const iconClass = computed(() => [name, `${name}-hand-drag`, { [`${name}-spin`]: props.spin }]);

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
