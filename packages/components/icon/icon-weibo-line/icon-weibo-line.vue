<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M20.195 14.197c0 3.362-4.53 6.424-9.926 6.424-4.95 0-9.268-2.432-9.268-6.087 0-1.947 1.18-4.087 3.24-6.088C7.072 5.7 10.47 4.413 12.098 5.998c.498.482.723 1.122.719 1.858 1.975-.576 3.65-.404 4.483.752.449.623.532 1.38.326 2.207 1.511.61 2.568 1.77 2.568 3.382Zm-4.44-2.07c-.386-.41-.4-.92-.198-1.41.208-.508.213-.812.12-.94-.264-.368-1.533-.363-3.194.311a2.101 2.101 0 0 1-.509.14c-.344.046-.671.001-.983-.265-.419-.359-.473-.855-.322-1.316.214-.67.18-1.076.037-1.215-.186-.18-.777-.191-1.659.143C7.978 7.98 6.75 8.799 5.633 9.88c-1.707 1.659-2.632 3.337-2.632 4.653 0 2.242 3.276 4.087 7.268 4.087 4.42 0 7.926-2.37 7.926-4.424 0-.738-.637-1.338-1.673-1.652-.394-.113-.536-.171-.767-.417Zm7.054-1.617a1 1 0 1 1-1.936-.502 4 4 0 0 0-4.693-4.924 1 1 0 0 1-.407-1.958 6 6 0 0 1 7.036 7.384Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWeiboLine',
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

    const iconClass = computed(() => [name, `${name}-weibo-line`, { [`${name}-spin`]: props.spin }]);

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
