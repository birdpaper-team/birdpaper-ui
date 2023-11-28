<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M24 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z" stroke="#333"></path><path d="M11 29c1.509.624 4 1 5.259-.468 1.258-1.469.136-3.78 1.53-4.564 1.528-.86 2.631 2.064 5.502 1.548S28 21 28 19s-1.715-2-1.838-3.946C26 12.5 28 11 28 11M28 37c-1.086-.909-2-1.5-2-3s1-1 2-2 .5-3 1.5-3.5 4.108.556 6.5 2.5" stroke="#333"></path><circle cx="24" cy="4" r="2" fill="#333"></circle><circle cx="24" cy="44" r="2" fill="#333"></circle><circle cx="44" cy="24" r="2" fill="#333"></circle><circle cx="38" cy="10" r="2" fill="#333"></circle><circle cx="10" cy="38" r="2" fill="#333"></circle><circle cx="4" cy="24" r="2" fill="#333"></circle><circle cx="10" cy="10" r="2" fill="#333"></circle><circle cx="38" cy="38" r="2" fill="#333"></circle><path d="M10 24c0 3.815 1.526 7.273 4 9.798M24 38c7.732 0 14-6.268 14-14M24 10c3.815 0 7.273 1.526 9.798 4" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconUniversal',
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

    const iconClass = computed(() => [name, `${name}-universal`, { [`${name}-spin`]: props.spin }]);

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
