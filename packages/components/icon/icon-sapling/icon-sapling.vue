<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M27 8c-4.686 4.686-3.965 13.035-3.965 13.035S31.314 21.686 36 17s4.006-12.965 4.006-12.965S31.686 3.314 27 8Z"></path><path d="M23.035 21.035 31 13.07m-7.965 7.965S22.314 12.686 27 8s13.006-3.965 13.006-3.965S40.686 12.314 36 17s-12.965 4.035-12.965 4.035Z" stroke="#333"></path><path d="M20 21c3.85 3.843 2.971 10.971 2.971 10.971s-7.122.872-10.97-2.971c-3.85-3.843-2.969-10.971-2.969-10.971S16.151 17.157 20 21Z"></path><path d="M22.971 31.971 16.001 25m6.97 6.971s.878-7.128-2.97-10.971c-3.85-3.843-10.969-2.971-10.969-2.971S8.151 25.157 12 29c3.85 3.843 10.971 2.971 10.971 2.971ZM23 4v40" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSapling',
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

    const iconClass = computed(() => [name, `${name}-sapling`, { [`${name}-spin`]: props.spin }]);

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
