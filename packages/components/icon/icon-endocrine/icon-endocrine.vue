<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path clip-rule="evenodd" d="M23.147 44C31.293 44 40 43.01 40 30.18c0-6.216-1.492-11.276-4.474-15.18-2.787 4.667-4.852 7-6.196 7-2.016 0 0-6.09-2.331-10.709-1.554-3.08-4.311-5.51-8.27-7.291.55 4.437.431 7.655-.357 9.655-1.184 3-11.22 8.255-10.314 17.28C8.965 39.96 15 44 23.147 44Z" stroke="#333"></path><path d="M21.708 24.008c-3.805 3.459-5.427 6.66-4.865 9.603.483 2.534 2.406 3.765 3.854 4.163 1.123.307 3.067.48 4.803-1.067 1.84-1.639 1.107-3.968-1.56-6.85-1.126-1.215-1.87-3.165-2.232-5.849Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEndocrine',
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

    const iconClass = computed(() => [name, `${name}-endocrine`, { [`${name}-spin`]: props.spin }]);

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
