<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="M36.997 21.711C36.843 13.008 29.74 6 21 6 12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21 7.115-3.055c3.135 1.042 6.093 1.303 8.875.782"></path><path d="M36.997 21.711C36.843 13.008 29.74 6 21 6 12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21 7.115-3.055c3.135 1.042 6.093 1.303 8.875.782" stroke="#333"></path><path d="M15.125 20.467a2.258 2.258 0 0 0 2.25-2.267 2.258 2.258 0 0 0-2.25-2.267 2.258 2.258 0 0 0-2.25 2.267 2.258 2.258 0 0 0 2.25 2.267ZM24.125 20.467a2.258 2.258 0 0 0 2.25-2.267 2.258 2.258 0 0 0-2.25-2.267 2.258 2.258 0 0 0-2.25 2.267 2.258 2.258 0 0 0 2.25 2.267Z" fill="#333"></path><path clip-rule="evenodd" d="M38.762 39.93A10.453 10.453 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21 43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473"></path><path d="M38.762 39.93A10.453 10.453 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21 43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473" stroke="#333"></path><path clip-rule="evenodd" d="M42.002 35.973 43 42l-4.238-2.07"></path><path d="M42.002 35.973 43 42l-4.238-2.07" stroke="#333"></path><path d="M35.688 30.8A1.694 1.694 0 0 1 34 29.1c0-.939.755-1.7 1.688-1.7.931 0 1.687.761 1.687 1.7s-.755 1.7-1.688 1.7ZM28.938 30.8a1.694 1.694 0 0 1-1.688-1.7c0-.939.756-1.7 1.688-1.7.931 0 1.687.761 1.687 1.7s-.756 1.7-1.688 1.7Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWechat',
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

    const iconClass = computed(() => [name, `${name}-wechat`, { [`${name}-spin`]: props.spin }]);

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
