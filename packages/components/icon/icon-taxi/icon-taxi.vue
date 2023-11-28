<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M4 35v-7.29a6 6 0 0 1 3.319-5.368l.682-.34 2.31-7.91A4 4 0 0 1 14.205 11h19.688a4 4 0 0 1 3.904 3.128l2.205 7.873.68.34A6 6 0 0 1 44 27.709V35a3 3 0 0 1-3 3h-1.997v1a4 4 0 0 1-4 4A4 4 0 0 1 31 39v-1H17v1a4 4 0 1 1-8 0v-1H7a3 3 0 0 1-3-3Z" stroke="#333"></path><path d="M13.5 33a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM34.5 33a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#333"></path><path clip-rule="evenodd" d="M18 11h12l-.991-4.956C28.887 5.434 28.399 5 27.837 5h-7.674c-.563 0-1.05.434-1.172 1.044L18 11Z" stroke="#333"></path><path d="M15 23h18" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTaxi',
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

    const iconClass = computed(() => [name, `${name}-taxi`, { [`${name}-spin`]: props.spin }]);

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
