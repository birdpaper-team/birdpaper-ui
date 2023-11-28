<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M11 41c4.167-1.79 8.092-2.757 11.775-2.898 3.682-.142 8.424.49 14.225 1.898" stroke="#333"></path><path d="M23.045 44c-.767-9.44-.449-16.773.955-22" stroke="#333"></path><path clip-rule="evenodd" d="M24 23.176c1.59-6.018 4.39-9.607 8.4-10.766 4.009-1.16 7.876-.629 11.6 1.594.019 4.892-2.105 8.476-6.37 10.751-4.266 2.276-8.81 1.75-13.63-1.579ZM23.792 22.114c.833-7.187-.837-12.248-5.01-15.185C14.61 3.992 9.776 3.336 4.284 4.96c-.959 6.63.508 11.643 4.399 15.039 3.892 3.396 8.928 4.101 15.109 2.114Z" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPureNatural',
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

    const iconClass = computed(() => [name, `${name}-pure-natural`, { [`${name}-spin`]: props.spin }]);

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
