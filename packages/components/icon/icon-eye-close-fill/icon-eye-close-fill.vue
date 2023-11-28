<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m10.13 15.842-.787 2.94-1.932-.517.787-2.94a10.988 10.988 0 0 1-3.237-1.871l-2.153 2.153-1.414-1.414 2.153-2.154a10.957 10.957 0 0 1-2.371-5.07l.9-.164A16.923 16.923 0 0 0 12 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.958 10.958 0 0 1-2.37 5.071l2.153 2.154-1.414 1.414-2.154-2.153a10.989 10.989 0 0 1-3.237 1.872l.788 2.939-1.932.517-.788-2.94a11.078 11.078 0 0 1-3.74 0Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEyeCloseFill',
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

    const iconClass = computed(() => [name, `${name}-eye-close-fill`, { [`${name}-spin`]: props.spin }]);

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
