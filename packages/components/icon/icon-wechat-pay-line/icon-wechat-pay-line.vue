<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m19.146 8.993-9.799 5.608-.07.046a.647.647 0 0 1-.3.069.655.655 0 0 1-.58-.345l-.046-.092-1.831-3.95c-.023-.046-.023-.092-.023-.138 0-.183.139-.321.324-.321.07 0 .139.023.209.069l2.155 1.515c.162.092.347.161.556.161a.938.938 0 0 0 .348-.069l8.274-3.648C16.935 6.273 14.635 5.2 12.001 5.2c-4.421 0-7.9 3.023-7.9 6.6 0 1.366.5 2.673 1.431 3.781.049.058.12.137.215.235a4 4 0 0 1 1.1 3.102l-.024.298.715-.437a4 4 0 0 1 2.706-.536c.211.033.385.059.52.077.406.053.819.08 1.237.08 4.42 0 7.9-3.022 7.9-6.6 0-.996-.27-1.95-.755-2.807ZM6.193 21.943a1 1 0 0 1-1.527-.931l.189-2.26a2 2 0 0 0-.55-1.551 6.935 6.935 0 0 1-.303-.332C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6 5.467 0 9.9 3.85 9.9 8.6s-4.433 8.6-9.9 8.6c-.51 0-1.01-.033-1.5-.098-.152-.02-.342-.048-.568-.084a2 2 0 0 0-1.353.269l-2.387 1.456Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWechatPayLine',
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

    const iconClass = computed(() => [name, `${name}-wechat-pay-line`, { [`${name}-spin`]: props.spin }]);

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
