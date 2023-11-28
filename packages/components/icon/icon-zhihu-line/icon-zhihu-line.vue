<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m12.345 17.963-1.688 1.074-2.132-3.35c-.44 1.402-1.171 2.665-2.138 3.825-.402.483-.82.918-1.301 1.376-.155.146-.775.716-.878.82l-1.414-1.415c.139-.139.787-.735.914-.856.43-.408.796-.79 1.143-1.205C6.117 16.712 6.88 15.02 6.988 13H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.858L2.486 8.143c1.396-.838 2.426-2.603 3.039-5.36l1.952.434c-.14.633-.303 1.228-.489 1.783h4.513v2H9v4h2.5v2H9.186l3.159 4.963Zm3.838-.07L17.3 17h1.702V7h-4v10h.736l.446.893ZM13.001 5h8v14h-3l-2.5 2-1-2H13V5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconZhihuLine',
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

    const iconClass = computed(() => [name, `${name}-zhihu-line`, { [`${name}-spin`]: props.spin }]);

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
