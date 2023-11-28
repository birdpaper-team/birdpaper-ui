<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M18.244 22.263c-.292-4.955-1.467-7.521-3.523-7.698-3.32-.284-8.41 5.144-9.92 12.772-1.509 7.628-.764 13.092 1.211 13.46 1.975.37 4.844-1.78 6.205-1.78 1.361 0 6.079 1.04 6.079-.844V30.07M29.624 22.37c.281-5.025 1.458-7.627 3.53-7.805 3.32-.284 8.41 5.144 9.919 12.772 1.509 7.628.764 13.092-1.21 13.46-1.975.37-4.845-1.78-6.206-1.78-1.36 0-6.079 1.04-6.079-.844V30.07" stroke="#333"></path><path d="M20.556 5v14.91c-.044 2.292-1.956 3.438-5.737 3.438M27.292 5v14.91c.043 2.292 1.956 3.438 5.736 3.438" stroke="#333"></path><path d="M15 30.07c3.955 0 6.955-.939 9-2.818 2.06 1.88 5.069 2.818 9.029 2.818" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLung',
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

    const iconClass = computed(() => [name, `${name}-lung`, { [`${name}-spin`]: props.spin }]);

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
