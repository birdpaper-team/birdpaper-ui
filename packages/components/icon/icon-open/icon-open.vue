<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="m27.947 16.828 12.81-9.09a1.832 1.832 0 0 1 2.451 2.686L41 13l-5.276 7.035a2 2 0 0 0-.207 2.056l7.13 15.053A2 2 0 0 1 40.84 40h-8.204a2 2 0 0 1-1.96-1.604L27.52 22.774l-.406-4.119a2 2 0 0 1 .833-1.827ZM28 23l7-2M19.936 17.103 7.209 8.196a1.812 1.812 0 0 0-2.405 2.675L7 13.39l5.232 6.636a2 2 0 0 1 .237 2.095L5.353 37.144A2 2 0 0 0 7.16 40h8.162a2 2 0 0 0 1.97-1.652L20 23l.753-3.878a2 2 0 0 0-.817-2.02ZM13 21l7 2" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconOpen',
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

    const iconClass = computed(() => [name, `${name}-open`, { [`${name}-spin`]: props.spin }]);

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
