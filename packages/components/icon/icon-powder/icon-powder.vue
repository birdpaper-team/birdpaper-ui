<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M44 40V20a3 3 0 0 0-3-3h-5.285c-1.541 0-2.892 1.243-3.924 2.388C30.633 20.674 28.377 22 24 22c-4.377 0-6.633-1.326-7.791-2.612C15.177 18.243 13.826 17 12.285 17H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3Z" stroke="#333"></path><path d="M33 17c0 2.761-4.03 5-9 5s-9-2.239-9-5" stroke="#333"></path><ellipse cx="24" cy="10" rx="9" ry="5" stroke="#333"></ellipse><path d="M33 17v-7M15 17v-7" stroke="#333"></path><ellipse cx="27" cy="10" rx="2" ry="1" fill="#333"></ellipse><ellipse cx="21" cy="10" rx="2" ry="1" fill="#333"></ellipse></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPowder',
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

    const iconClass = computed(() => [name, `${name}-powder`, { [`${name}-spin`]: props.spin }]);

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
