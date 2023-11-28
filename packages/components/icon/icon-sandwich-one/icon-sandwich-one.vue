<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)" stroke="#333"><path d="M17.799 40.142s4.16 4.16 8.652 2.995c4.492-1.165 15.805-12.479 16.97-16.97 1.165-4.493-2.995-8.652-2.995-8.652M7.9 30.243s-4.16-4.16-2.995-8.652c1.164-4.492 12.478-15.806 16.97-16.97 4.492-1.165 8.652 2.994 8.652 2.994"></path><rect x="5.071" y="33.071" width="40" height="14" rx="7" transform="rotate(-45 5.071 33.071)"></rect><path d="m15.678 33.779.563-1.689a5.996 5.996 0 0 1 3.326-3.615l.42-.18a4.98 4.98 0 0 0 2.762-3.002v0a4.98 4.98 0 0 1 2.762-3.002l.95-.407a4.712 4.712 0 0 0 2.614-2.84v0a4.712 4.712 0 0 1 2.98-2.981l2.008-.67"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSandwichOne',
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

    const iconClass = computed(() => [name, `${name}-sandwich-one`, { [`${name}-spin`]: props.spin }]);

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
