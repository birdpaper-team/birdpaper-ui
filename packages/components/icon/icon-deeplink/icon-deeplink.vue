<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M21 34.993v5.978c0 .569-.423 1.029-.944 1.029H4.944C4.423 42 4 41.54 4 40.971V7.03C4 6.46 4.423 6 4.944 6h15.112c.521 0 .944.46.944 1.029v5.978M27 13.007V7.03C27 6.46 27.423 6 27.944 6h15.112c.521 0 .944.46.944 1.029V40.97c0 .569-.423 1.029-.944 1.029H27.944c-.521 0-.944-.46-.944-1.029v-5.978" stroke="#333"></path><path d="M12.5 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM35.5 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#333"></path><path d="M16 23.5h16" stroke="#333"></path><path d="m27.223 28.273 1.591-1.591 3.182-3.182-3.182-3.182-1.59-1.591" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDeeplink',
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

    const iconClass = computed(() => [name, `${name}-deeplink`, { [`${name}-spin`]: props.spin }]);

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
