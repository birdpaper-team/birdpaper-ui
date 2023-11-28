<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M15.778 8.208c-.473-.037-.98.076-1.758.373.065-.025-.742.29-.969.37-.502.175-.915.271-1.378.271-.458 0-.88-.091-1.365-.255-.156-.052-.312-.11-.505-.186l-.449-.177c-.648-.254-1.012-.35-1.315-.342-1.153.015-2.243.68-2.877 1.782-1.292 2.244-.576 6.299 1.313 9.031 1.005 1.444 1.556 1.96 1.777 1.953.222-.01.386-.057.784-.225l.166-.071c1.006-.429 1.71-.618 2.771-.618 1.021 0 1.703.186 2.669.602l.168.072c.397.17.54.208.792.202.357-.005.798-.417 1.777-1.854.268-.391.505-.803.71-1.22a7.375 7.375 0 0 1-.391-.347c-1.29-1.228-2.087-2.884-2.109-4.93A6.625 6.625 0 0 1 17 8.46a4.124 4.124 0 0 0-1.221-.25Zm.155-1.994c.708.048 2.736.264 4.056 2.196-.108.06-2.424 1.404-2.4 4.212.036 3.36 2.94 4.476 2.976 4.488-.024.084-.468 1.596-1.536 3.156-.924 1.356-1.884 2.7-3.396 2.724-1.488.036-1.968-.876-3.66-.876-1.704 0-2.232.852-3.636.912-1.464.048-2.568-1.464-3.504-2.808-1.908-2.76-3.36-7.776-1.404-11.172.972-1.692 2.7-2.76 4.584-2.784 1.428-.036 2.784.96 3.66.96.864 0 2.412-1.152 4.26-1.008Zm-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572-.168-1.272.456-2.604 1.176-3.432.804-.936 2.148-1.632 3.264-1.68.144 1.296-.372 2.604-1.152 3.54Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAppleLine',
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

    const iconClass = computed(() => [name, `${name}-apple-line`, { [`${name}-spin`]: props.spin }]);

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
