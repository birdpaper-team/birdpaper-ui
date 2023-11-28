<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M21 19v2h-2v-2h2Zm-4 0v2h-2v-2h2Zm-4 0v2h-2v-2h2Zm-4 0v2H7v-2h2Zm-4 0v2H3v-2h2Zm16-4v2h-2v-2h2ZM5 15v2H3v-2h2Zm0-4v2H3v-2h2Zm11-8a5.002 5.002 0 0 1 4.995 4.783L21 8v5h-2V8a3.01 3.01 0 0 0-2.824-2.995L16 5h-5V3h5ZM5 7v2H3V7h2Zm0-4v2H3V3h2Zm4 0v2H7V3h2Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRoundedCorner',
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

    const iconClass = computed(() => [name, `${name}-rounded-corner`, { [`${name}-spin`]: props.spin }]);

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
