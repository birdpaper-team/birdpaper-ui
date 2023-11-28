<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M15 20.612c-1.424 6.15 6.493 7.715 4.624 12.048-1.87 4.332-6.055 3.466-5.588 7.798.468 4.333 6.006 4.394 11.048 1.784 10.083-5.221 12.187-16.625 7.624-21.63-5.608-6.15-16.284-6.15-17.708 0Z" stroke="#333"></path><ellipse cx="34.535" cy="13.535" rx="2" ry="3" transform="rotate(40 34.535 13.535)" fill="#333"></ellipse><ellipse cx="29.381" cy="10.603" rx="2" ry="3" transform="rotate(25 29.38 10.603)" fill="#333"></ellipse><ellipse cx="23.381" cy="9.603" rx="2" ry="3" transform="rotate(6 23.38 9.603)" fill="#333"></ellipse><ellipse cx="14" cy="8" rx="3" ry="4" transform="rotate(-20 14 8)" stroke="#333"></ellipse><ellipse cx="38.535" cy="17.536" rx="2" ry="3" transform="rotate(50 38.535 17.536)" fill="#333"></ellipse></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBabyFeet',
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

    const iconClass = computed(() => [name, `${name}-baby-feet`, { [`${name}-spin`]: props.spin }]);

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
