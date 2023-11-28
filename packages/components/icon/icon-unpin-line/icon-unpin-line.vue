<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m20.97 17.172-1.414 1.414-3.535-3.535-.073.074-.707 3.535-1.415 1.415-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243L5.34 8.761l3.536-.707.073-.074-3.536-3.536 1.414-1.415L20.97 17.172ZM10.365 9.394l-.502.502-2.822.565 6.5 6.5.564-2.822.502-.502-4.242-4.243Zm8.411.074-1.34 1.34 1.414 1.415 1.34-1.34.707.706 1.415-1.414-8.486-8.485-1.414 1.414.707.707-1.34 1.34 1.414 1.415 1.34-1.34 4.243 4.242Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconUnpinLine',
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

    const iconClass = computed(() => [name, `${name}-unpin-line`, { [`${name}-spin`]: props.spin }]);

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
