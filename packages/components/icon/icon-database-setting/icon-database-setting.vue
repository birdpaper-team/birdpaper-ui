<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M34 12v9a9.975 9.975 0 0 0-7.442 3.32A9.963 9.963 0 0 0 24 31a10.01 10.01 0 0 0 5.074 8.705C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12" stroke="#333"></path><path d="M44 31c0 5.523-4.477 10-10 10-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.975 9.975 0 0 1 34 21c5.523 0 10 4.477 10 10ZM34 12c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z" stroke="#333"></path><path d="M4 28c0 2.761 6.716 5 15 5 1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5 2.756 0 5.339-.248 7.558-.68M34 27l3.464 2v4L34 35l-3.464-2v-4L34 27Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDatabaseSetting',
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

    const iconClass = computed(() => [name, `${name}-database-setting`, { [`${name}-spin`]: props.spin }]);

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
