<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m18.364 15.535-1.414-1.414 1.414-1.414a5 5 0 0 0-7.07-7.071L9.878 7.05 8.465 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9l-1.415 1.413Zm-2.828 2.829-1.414 1.414a7 7 0 1 1-9.9-9.9l1.414-1.414 1.415 1.414-1.415 1.415a5 5 0 0 0 7.071 7.07l1.415-1.413 1.414 1.414Zm-.707-10.607 1.414 1.414-7.071 7.072-1.414-1.415 7.07-7.07Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLink',
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

    const iconClass = computed(() => [name, `${name}-link`, { [`${name}-spin`]: props.spin }]);

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
