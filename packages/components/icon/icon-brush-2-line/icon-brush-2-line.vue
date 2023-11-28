<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m16.536 15.947 2.121-2.122-3.182-3.182 3.536-3.535-2.122-2.122-3.535 3.536-3.182-3.182L8.05 7.461l8.486 8.486ZM15.12 17.36 6.636 8.876l-2.828 2.828 8.485 8.485 2.829-2.828ZM13.354 5.694l2.828-2.829a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.414L13 22.311a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.779-7.778a1 1 0 0 1 1.414 0l2.475 2.475Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBrush2Line',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-brush-2-line`, { [`${name}-spin`]: props.spin }]);

    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
        props.size && (styles.width = props.size);
        props.size && (styles.height = props.size);
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
