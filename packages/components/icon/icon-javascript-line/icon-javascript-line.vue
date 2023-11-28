<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m13.334 16.055-.858 1.188c.814.726 1.826 1.089 3.036 1.089.924-.022 1.628-.26 2.112-.715.492-.462.737-1.012.737-1.65 0-.623-.172-1.137-.517-1.54-.344-.403-.924-.726-1.738-.968-.674-.205-1.15-.392-1.43-.561-.278-.176-.418-.389-.418-.638 0-.227.114-.41.341-.55.228-.14.532-.209.913-.209.28 0 .594.055.946.165.352.095.664.25.935.462l.77-1.199c-.674-.543-1.569-.814-2.684-.814-.799 0-1.455.205-1.969.616-.528.41-.792.92-.792 1.529.008.645.22 1.148.638 1.507.426.36 1.03.653 1.815.88.653.205 1.097.41 1.331.616a.971.971 0 0 1 .341.748.75.75 0 0 1-.34.66c-.235.161-.573.242-1.013.242-.718.007-1.437-.279-2.156-.858Zm-5.53.638a2.18 2.18 0 0 1-.616-.583l-1.034.847c.308.52.69.884 1.144 1.089.425.19.913.286 1.463.286.3 0 .612-.048.935-.143.323-.095.62-.257.891-.484.477-.381.726-1.005.748-1.87v-5.588H9.85v5.302c0 .506-.114.862-.34 1.067-.228.198-.514.297-.859.297-.33 0-.612-.073-.847-.22ZM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconJavascriptLine',
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

    const iconClass = computed(() => [name, `${name}-javascript-line`, { [`${name}-spin`]: props.spin }]);

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
