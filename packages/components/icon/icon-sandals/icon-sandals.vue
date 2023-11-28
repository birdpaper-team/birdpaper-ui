<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m11.2 6.854-.708.225c-3.487 1.104-5.536 4.71-4.898 8.312.73 4.115 1.291 8.04 2.095 11.661.785 3.537.447 6.689.25 10.032-.192 3.266 2.409 5.843 5.672 6.07 4.623.321 8.182-4.082 7.297-8.63-.684-3.516-1.202-7.318-.969-10.024.25-2.904.277-7.29.23-11.251-.055-4.616-4.568-7.788-8.968-6.395ZM34.81 5.723l-.77.144c-3.455.648-5.892 3.761-5.926 7.277C28.071 17.701 27.831 22.15 28 26c.156 3.553-.437 6.153-1.017 9.053-.627 3.13 1.443 6.044 4.54 6.815 4.485 1.116 8.712-2.698 8.577-7.318-.093-3.175.03-6.512.681-8.95.79-2.96 1.547-7.903 2.129-12.314.61-4.632-3.509-8.424-8.1-7.563Z" stroke="#333"></path><path d="M8 29c1-9 6-14 6-14 1.636 2 4 8 6 14M40 30c.5-8-5-16-5-16-1.636 2-7 5.278-7 11.5" stroke="#333" stroke-miterlimit="2"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSandals',
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

    const iconClass = computed(() => [name, `${name}-sandals`, { [`${name}-spin`]: props.spin }]);

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
