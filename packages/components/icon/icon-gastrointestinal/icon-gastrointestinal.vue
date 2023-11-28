<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M23 5c-1.146 4.46-1.146 7.773 0 9.938 1.719 3.247 5.7 5.042.574 9.373-5.126 4.332-10.323.697-13.532.697-3.208 0-6.02 3.613-6.02 8.992 0 3.586.66 6.586 1.978 9" stroke="#333"></path><path d="M29.984 5c-1.441 5.329-1.113 8.709.985 10.14 3.148 2.145 3.389-2.336 9.172.33 5.783 2.666 4.28 11.961.953 16.746C37.768 37 30.667 41.835 24.008 41c-6.659-.835-9.135-8.98-9.992-8.98-.857 0-2.668.025-3.022 3.397-.236 2.248.435 4.776 2.01 7.583" stroke="#333"></path><path d="M35.645 28.29c-.578 1.712-1.555 3.048-2.93 4.01-1.375.962-3.12 1.528-5.237 1.7" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGastrointestinal',
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

    const iconClass = computed(() => [name, `${name}-gastrointestinal`, { [`${name}-spin`]: props.spin }]);

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
