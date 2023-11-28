<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M14.054 9.644a9.115 9.115 0 0 1 1.414 1.845 15.95 15.95 0 0 1 8.483-2.426c3.146 0 6.08.906 8.555 2.471.4-.691.886-1.337 1.44-1.89 2.521-2.516 6.946-3.624 8.991-1.583 2.045 2.04.934 6.456-1.587 8.972a9.358 9.358 0 0 1-2.638 1.824 15.89 15.89 0 0 1 1.24 6.175c0 8.819-7.164 15.968-16 15.968C15.113 41 7.95 33.85 7.95 25.032c0-2.204.447-4.304 1.256-6.214a9.34 9.34 0 0 1-2.556-1.785c-2.522-2.516-3.632-6.932-1.587-8.972 2.045-2.04 6.47-.933 8.99 1.583Z" stroke="#333"></path><ellipse cx="24" cy="29" rx="8" ry="7" stroke="#333"></ellipse><circle cx="17" cy="18" r="2" fill="#333"></circle><circle cx="21" cy="29" r="2" fill="#333"></circle><circle cx="31" cy="18" r="2" fill="#333"></circle><circle cx="27" cy="29" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPig',
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

    const iconClass = computed(() => [name, `${name}-pig`, { [`${name}-spin`]: props.spin }]);

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
