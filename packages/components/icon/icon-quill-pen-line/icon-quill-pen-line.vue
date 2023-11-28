<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6.94 14.033a29.79 29.79 0 0 0-.606 1.782c.96-.696 2.101-1.138 3.418-1.303 2.513-.314 4.746-1.974 5.876-4.059L14.172 9l1.413-1.415 1-1.002c.43-.429.915-1.224 1.428-2.367-5.593.867-9.018 4.291-11.074 9.818ZM17 8.997l1 1c-1 3-4 6-8 6.5-2.669.333-4.336 2.166-5.002 5.5H3c1-6 3-20 18-20-1 2.997-1.998 4.996-2.997 5.997L17 8.997Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconQuillPenLine',
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

    const iconClass = computed(() => [name, `${name}-quill-pen-line`, { [`${name}-spin`]: props.spin }]);

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
