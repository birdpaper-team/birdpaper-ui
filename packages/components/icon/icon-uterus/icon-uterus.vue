<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M32 18c-.923 6-3 11.5-7.5 11.5s-6-5-7.5-11.5 0-12 7.5-12 8.423 6 7.5 12Z" stroke="#333"></path><path d="M32.5 12.5c1.75-1.632 3.533-2.17 6.34-1.996 4.212.262 5.16 3.144 5.16 7.452m0 0c0 4.309-1.651 8.227-4.941 7.34-3.29-.886-2.83-4.386-1.291-6.027 1.538-1.641 4.23-2.31 6.232-1.313ZM16.5 12c-1.77-1.544-3.86-1.67-6.413-1.495C6.257 10.767 4 13.692 4 18m0 0c0 4.308 2.897 8.182 5.888 7.296 2.992-.887 2.574-4.387 1.175-6.028-1.4-1.64-5.242-2.266-7.063-1.268Z" stroke="#333"></path><path d="M20 27v16M29 27v16" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconUterus',
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

    const iconClass = computed(() => [name, `${name}-uterus`, { [`${name}-spin`]: props.spin }]);

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
