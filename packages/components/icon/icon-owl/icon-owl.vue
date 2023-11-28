<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M6.358 7.31c2.662 3.848 6.186 5.092 7.86 5.215 2.855-1.398 6.203-2.202 9.782-2.202 3.58 0 6.927.804 9.782 2.201 1.674-.122 5.198-1.366 7.86-5.214.757-.821 3.03-.439 2.164 6.573-.289 1.756-1.087 5.585-1.616 7.49.488 1.361.75 2.8.75 4.289C42.94 34.132 34.46 41 24 41S5.06 34.133 5.06 25.662c0-1.489.262-2.928.75-4.289-.529-1.905-1.327-5.735-1.616-7.49C3.328 6.871 5.6 6.49 6.358 7.31Z" stroke="#333"></path><path d="M25 31.25c0 .69-1 3.75-1 3.75s-1-3.06-1-3.75.448-1.25 1-1.25 1 .56 1 1.25Z" stroke="#333"></path><circle cx="17" cy="22" r="4" stroke="#333"></circle><circle cx="31" cy="22" r="4" stroke="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconOwl',
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

    const iconClass = computed(() => [name, `${name}-owl`, { [`${name}-spin`]: props.spin }]);

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
