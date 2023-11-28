<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M5 13.06c0 2.48 1.292 4.461 3 5.94-1.076 2.146-2 4.474-2 7 0 9.221 8.124 17 18 17s18-7.779 18-17c0-2.526-.924-4.854-2-7 1.708-1.479 3-3.521 3-6 0-4.452-3.68-8-8-8-3.273 0-5.833 2.06-7 5a19.831 19.831 0 0 0-4-.394c-1.351 0-2.735.129-4 .394-1.167-2.94-3.727-5-7-5-4.32 0-8 3.609-8 8.06Z" stroke="#333"></path><circle cx="20" cy="19" r="2" fill="#333"></circle><circle cx="28" cy="19" r="2" fill="#333"></circle><circle cx="24" cy="26" r="3" fill="#333"></circle><path d="M24 26v8" stroke="#333"></path><path d="M28 33c-2.276 2.276-5.724 2.276-8 0" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBear',
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

    const iconClass = computed(() => [name, `${name}-bear`, { [`${name}-spin`]: props.spin }]);

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
