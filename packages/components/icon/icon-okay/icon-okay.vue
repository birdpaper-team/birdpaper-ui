<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M15.114 24.946c-2.403 2.746-2.827 6.087-2.65 8.41.085 1.105 1.205 1.713 2.234 1.303.744-.297 1.56-.668 2.146-1.06 1.731-1.153 1.154-2.307 1.731-4.038.577-1.73 3.117-3.138 5.425-2.561s3.229 2.561 3.229 4.292c0 1.73-.729 3.708-2.885 4.615-2.378 1.001-3.461 0-6.346-.577-1.503-.3-3.006 1.015-3.871 1.968a1.514 1.514 0 0 0-.118 1.918c.289.402.661.863 1.105 1.306 1.154 1.154 5.769 4.616 10.384 4.039s8.653-4.038 10.384-8.077c1.73-4.038.577-8.653-2.307-12.115-2.885-3.461-8.077-4.038-9.23-4.038-1.155 0-5.193 0-9.231 4.615Z" stroke="#333"></path><path d="M31.562 22.639 12.643 8.17c-.398-.304-.967-.271-1.264.133-.713.97-1.386 2.507-.303 3.95 1.384 1.846 6.73 6.539 9.23 8.654" stroke="#333"></path><path d="M35 26 23.142 4.198c-.239-.44-.772-.641-1.208-.394-1.046.594-2.289 1.723-1.89 3.483.51 2.25 2.539 6.261 3.957 9.213" stroke="#333"></path><path d="m36 28-.95-20.308c-.023-.5-.414-.913-.914-.882-1.201.077-2.813.55-3.223 2.307-.524 2.247-.9 5.608-.913 8.883" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconOkay',
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

    const iconClass = computed(() => [name, `${name}-okay`, { [`${name}-spin`]: props.spin }]);

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
