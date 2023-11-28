<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m14.15 33.82-1.413 9.9-8.486-8.486 9.9-1.414Z" stroke="#333"></path><path d="m24.05 6.95-9.9 9.9c-4.686 4.686-4.686 12.284 0 16.97v0c4.687 4.687 12.285 4.687 16.97 0l9.9-9.9" stroke="#333"></path><ellipse cx="32.535" cy="15.435" rx="12" ry="7" transform="rotate(45 32.535 15.435)" stroke="#333"></ellipse><circle cx="30.061" cy="11.398" r="2" transform="rotate(45 30.06 11.398)" fill="#333"></circle><circle cx="37.132" cy="18.469" r="2" transform="rotate(45 37.132 18.47)" fill="#333"></circle><circle cx="31.475" cy="17.055" r="2" transform="rotate(45 31.475 17.055)" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDrumstick',
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

    const iconClass = computed(() => [name, `${name}-drumstick`, { [`${name}-spin`]: props.spin }]);

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
