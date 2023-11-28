<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M33 24c3.5 3 4.613 8.446 2.882 12.484-1.73 4.038-5.769 7.5-10.384 8.076-4.615.577-9.23-2.884-10.384-4.038a10.633 10.633 0 0 1-1.105-1.307 1.514 1.514 0 0 1 .118-1.917c.865-.954 2.368-2.269 3.871-1.968 2.885.577 3.968 1.578 6.346.577C26.5 35 27.23 33.023 27.23 31.292c0-1.73-1.154-3.462-3.462-4.038-2.307-.577-4.615.576-5.192 2.307-.577 1.73 0 2.885-1.73 4.038-.588.392-1.403.763-2.147 1.06-1.03.41-2.15-.199-2.234-1.303-.177-2.324.247-5.665 2.65-8.41 1.246-1.424 2.411-2.392 3.461-3.051" stroke="#333"></path><path d="M33 24 23.128 4.24c-.23-.46-.776-.677-1.222-.42-1.04.597-2.26 1.722-1.863 3.467.51 2.25 3.537 12.761 4.956 15.713M22.499 17l-6.87-6.52c-.36-.343-.925-.373-1.264-.009-.822.88-1.674 2.333-.764 3.895C14.763 16.36 17.761 20.61 20 23" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSpiderMan',
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

    const iconClass = computed(() => [name, `${name}-spider-man`, { [`${name}-spin`]: props.spin }]);

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
