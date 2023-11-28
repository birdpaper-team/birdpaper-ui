<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" stroke="#333"></path><path clip-rule="evenodd" d="M31 7v17V7Z"></path><path d="M31 7v17" stroke="#333"></path><path clip-rule="evenodd" d="m16.636 6.636 14.142 14.142L16.636 6.636Z"></path><path d="m16.636 6.636 14.142 14.142" stroke="#333"></path><path clip-rule="evenodd" d="M7 17h17H7Z"></path><path d="M7 17h17" stroke="#333"></path><path clip-rule="evenodd" d="M20.364 17.636 6.222 31.778l14.142-14.142Z"></path><path d="M20.364 17.636 6.222 31.778" stroke="#333"></path><path clip-rule="evenodd" d="M17 25v17-17Z"></path><path d="M17 25v17" stroke="#333"></path><path clip-rule="evenodd" d="m17.636 27.636 14.142 14.142-14.142-14.142Z"></path><path d="m17.636 27.636 14.142 14.142" stroke="#333"></path><path clip-rule="evenodd" d="M24 31h18-18Z"></path><path d="M24 31h18" stroke="#333"></path><path clip-rule="evenodd" d="M42.364 16.636 28.222 30.778l14.142-14.142Z"></path><path d="M42.364 16.636 28.222 30.778M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFriendsCircle',
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

    const iconClass = computed(() => [name, `${name}-friends-circle`, { [`${name}-spin`]: props.spin }]);

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
