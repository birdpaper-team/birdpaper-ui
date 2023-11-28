<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><g clip-path="url(#a)"><path d="M15.38 32.844C9.725 31.429.532 34.965 9.725 38.501c3.535 9.192 7.07 0 5.657-5.657ZM22.482 10.248c-4.903-.014-11.232 1.536-12.029 3.727-.577 1.589 2.425 3.702 6.25 4.818M37.978 25.742c.013 4.904-1.537 11.232-3.728 12.03-1.589.577-3.702-2.425-4.818-6.251" stroke="#333"></path><path d="M38 25.765C44.662 19.7 40.124 8.09 40.124 8.09S28.108 4.56 22.45 10.216c-5.657 5.657-7.071 22.628-7.071 22.628s15.956-1.015 22.62-7.08Z" stroke="#333"></path><path d="M38.008 25.773s-6.718-1.06-10.607-4.95c-3.89-3.889-4.95-10.606-4.95-10.606" stroke="#333"></path><circle cx="33.766" cy="14.459" r="2" transform="rotate(45 33.766 14.46)" fill="#333"></circle><path d="M41 20.945c-.54 1.76-1.478 3.434-3 4.82-1.648 1.5-3.864 2.69-6.266 3.633M27 7.656c-1.697.489-3.282 1.294-4.549 2.56-1.184 1.186-2.183 2.867-3.022 4.784" stroke="#333"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFish',
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

    const iconClass = computed(() => [name, `${name}-fish`, { [`${name}-spin`]: props.spin }]);

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
