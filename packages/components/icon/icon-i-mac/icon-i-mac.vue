<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M4 6h40v22H4V6Z" stroke="#333"></path><path d="M44 28v8H4v-8" stroke="#333"></path><path d="M13.09 18h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91ZM13.09 12h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91ZM21.09 18h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91ZM21.09 12h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91ZM29.09 18h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91ZM29.09 12h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91ZM37.09 12h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Z" fill="#333"></path><path d="M20.846 36 16 42h16l-4.846-6" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconIMac',
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

    const iconClass = computed(() => [name, `${name}-i-mac`, { [`${name}-spin`]: props.spin }]);

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
