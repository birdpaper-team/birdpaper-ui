<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m12 19.164 6.207-6.207-1.414-1.414L12 16.336l-4.793-4.793-1.414 1.414L12 19.164Zm0-5.65 6.207-6.207-1.414-1.414L12 10.686 7.207 5.893 5.793 7.307 12 13.514Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconArrowDownDoubleLine',
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

    const iconClass = computed(() => [name, `${name}-arrow-down-double-line`, { [`${name}-spin`]: props.spin }]);

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
