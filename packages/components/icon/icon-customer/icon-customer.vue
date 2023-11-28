<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.609 36.987C5.32 33.378 3.32 28.614 3.32 23.39c0-11.264 9.297-20.395 20.765-20.395 11.467 0 20.764 9.131 20.764 20.395 0 7.965-4.65 14.86-11.427 18.218a29.984 29.984 0 0 1-13.898 3.387c-6.152 0-11.868-1.839-16.608-4.987 0 0 3.179-.347 5.69-3.022h.002Zm25.23-3.502c5.373-5.371 5.373-14.08 0-19.453a13.703 13.703 0 0 0-8.96-4.007c-.098-2.447 1.219-4.099 1.225-4.107h-.001l.001-.001a19.71 19.71 0 0 0-10.228 5.439 19.721 19.721 0 0 0-4.755 7.641c.138-.366.293-.728.463-1.084-.196.5-.373 1.01-.533 1.532-1.573 4.776-.463 10.242 3.335 14.04 5.372 5.372 14.082 5.372 19.454 0Z" fill="#333"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.13 22.345v2.847a2.057 2.057 0 1 0 4.114 0v-2.847a2.057 2.057 0 1 0-4.114 0ZM27.313 22.345v2.847a2.057 2.057 0 0 0 4.114 0v-2.847a2.057 2.057 0 0 0-4.114 0Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCustomer',
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

    const iconClass = computed(() => [name, `${name}-customer`, { [`${name}-spin`]: props.spin }]);

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
