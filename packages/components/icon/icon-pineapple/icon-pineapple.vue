<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M20.5 14.5C20 14 20 13.15 20 11c0-3.866 4-7 4-7s3 3.134 3 7c0 1.922 0 3-.5 3.5" stroke="#333"></path><path d="M17 17c-1.21-2.918-4.138-6.567-6-8 5.411-1.014 9.774 2.3 12 5M30 16c1.452-2.697 4.304-5.695 6-7-5.643-1.058-9.871 2.261-12 5" stroke="#333"></path><path d="M16.725 17.374A38.81 38.81 0 0 0 15 19c-4.19 4.19-4.898 11.864-4.997 15.28-.034 1.15-.026 2.322.409 3.387C10.879 38.81 11.875 40.406 14 42c4 3 16 3 20 0 2.116-1.587 3.112-3.175 3.581-4.318.441-1.074.45-2.258.415-3.419C37.896 30.838 37.184 23.183 33 19c-.6-.6-1.176-1.14-1.726-1.626-4.258-3.767-10.291-3.767-14.55 0ZM32 18 11 29M16 18l21 11M35 41 11 27M37 27 13 41" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPineapple',
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

    const iconClass = computed(() => [name, `${name}-pineapple`, { [`${name}-spin`]: props.spin }]);

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
