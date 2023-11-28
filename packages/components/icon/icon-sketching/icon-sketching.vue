<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M10.036 7.698c-1.651 1.861-3.523 4.546-5.141 7.784a1 1 0 1 1-1.79-.895c1.692-3.383 3.66-6.215 5.434-8.216.886-.999 1.74-1.81 2.506-2.38.382-.285.76-.523 1.123-.693.351-.166.753-.298 1.166-.298a1.24 1.24 0 0 1 1.116.69c.157.312.174.645.17.87-.008.477-.135 1.073-.298 1.68-.335 1.243-.923 2.891-1.507 4.518l-.082.228c-.566 1.574-1.123 3.123-1.485 4.36-.098.334-.177.633-.239.895.694-.557 1.55-1.396 2.457-2.288l.03-.029c.881-.866 1.814-1.782 2.6-2.411.391-.312.812-.609 1.218-.78.34-.145 1.12-.38 1.727.227.384.384.49.884.518 1.256.03.39-.016.81-.087 1.21-.14.8-.424 1.733-.683 2.575l-.041.135c-.232.751-.438 1.422-.555 1.96.26-.26.58-.674.954-1.285a1 1 0 1 1 1.706 1.045c-.543.886-1.105 1.606-1.701 2.053-.624.468-1.44.732-2.266.319-.608-.305-.746-.91-.777-1.246-.033-.363.02-.759.089-1.115.13-.673.385-1.497.625-2.276l.055-.178c.267-.868.51-1.679.625-2.334l.024-.145a8.35 8.35 0 0 0-.181.14c-.698.559-1.561 1.405-2.478 2.306l-.03.03c-.881.865-1.814 1.782-2.6 2.41-.391.313-.813.61-1.218.781-.34.145-1.12.38-1.727-.227-.309-.309-.388-.699-.413-.936a3.488 3.488 0 0 1 .023-.803c.068-.528.226-1.17.426-1.85.38-1.298.955-2.9 1.512-4.449l.092-.255c.593-1.652 1.149-3.214 1.457-4.36l.074-.286a6.896 6.896 0 0 0-.224.16c-.623.464-1.377 1.17-2.204 2.103Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSketching',
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

    const iconClass = computed(() => [name, `${name}-sketching`, { [`${name}-spin`]: props.spin }]);

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
