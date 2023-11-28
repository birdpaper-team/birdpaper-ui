<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M12.562 16.41c-3.344 3.25-10.399 12.736-5.2 19.522 5.2 6.785 19.92 4.168 25.997-.613 6.077-4.78 5.477-7.734 4.16-9.036-1.318-1.301-5.163.014-6.24-1.757-1.076-1.77 1.917-6.195-.634-7.595-2.55-1.4-6.954 3.65-8.944 2.338-1.989-1.312 2.19-5.596 0-6.83-2.189-1.235-5.795.722-9.14 3.972Z" stroke="#333"></path><path d="M43.379 16.516a12.954 12.954 0 0 0-3.642-8.073 12.963 12.963 0 0 0-7.723-3.84M37.292 16.931c-.13-1.64-.867-3.117-2-4.228a7.249 7.249 0 0 0-4.24-2.01" stroke="#333"></path><path d="M25 30c0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4 6 1.79 6 4Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWeibo',
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

    const iconClass = computed(() => [name, `${name}-weibo`, { [`${name}-spin`]: props.spin }]);

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
