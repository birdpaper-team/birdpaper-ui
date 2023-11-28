<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M14 13.6c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6V13.6ZM40 13.6c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6V13.6ZM8 18.667C8 17.194 6.657 16 5 16s-3 1.194-3 2.667v10.666C2 30.806 3.343 32 5 32s3-1.194 3-2.667V18.667ZM46 18.667C46 17.194 44.657 16 43 16s-3 1.194-3 2.667v10.666C40 30.806 41.343 32 43 32s3-1.194 3-2.667V18.667ZM14 27h20v-6H14z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDumbbell',
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

    const iconClass = computed(() => [name, `${name}-dumbbell`, { [`${name}-spin`]: props.spin }]);

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
