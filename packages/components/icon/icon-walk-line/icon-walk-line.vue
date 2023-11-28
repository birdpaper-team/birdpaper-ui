<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m7.617 8.712 3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.181A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.401-2.547l-.698 3.956 2.061 1.729 2.223 6.108-1.88.684-2.039-5.604-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7l.017.012ZM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10.53 18.681l-3.214 3.83-1.532-1.285 2.975-3.546.746-2.18 1.791 1.5-.766 1.681Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWalkLine',
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

    const iconClass = computed(() => [name, `${name}-walk-line`, { [`${name}-spin`]: props.spin }]);

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
