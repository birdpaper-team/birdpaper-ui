<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M18 16h12s2.424 2.672 4.5 3.429c1.301.474 3.5.571 3.5.571s-1.242.775-2.1 1.143C34.815 21.608 33 22 33 22H15s-1.815-.392-2.9-.857C11.242 20.775 10 20 10 20s2.199-.098 3.5-.571C15.576 18.673 18 16 18 16ZM17 28h14s2.627 2.672 5 3.429c1.487.474 4 .571 4 .571s-1.42.775-2.4 1.143C36.36 33.608 34 34 34 34H14s-2.36-.392-3.6-.857C9.42 32.775 8 32 8 32s2.513-.098 4-.571C14.373 30.673 17 28 17 28ZM18 7.429C20.45 6.299 24 4 24 4s3.55 2.298 6 3.429c.772.356 2 .857 2 .857s-.726.556-1.2.857C30.183 9.535 29 10 29 10H19s-1.183-.465-1.8-.857c-.474-.301-1.2-.857-1.2-.857s1.228-.501 2-.857Z" stroke="#333"></path><path d="M21 10v6M27 10v6M19 22v6M29 22v6M16 34v10h16V34" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPagoda',
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

    const iconClass = computed(() => [name, `${name}-pagoda`, { [`${name}-spin`]: props.spin }]);

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
