<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M11.505 3.043a.917.917 0 0 1 .795-.459c1.547 0 3.09.049 4.637.153 2.51.172 3.7 1.591 4.18 2.431.596.092 1.388.088 1.571.806.14.552-.217.834-.554 1.149-.483.45-1.133 1.176-.954 1.887.055.222.159.438.316.765l.002.004c.318.667.684 1.51.742 3.115.156 4.34-3.596 6.896-7.252 7.079-2.41 1.816-6.345 3.025-12.557 1.957a1.328 1.328 0 0 1-.945-.708 1.245 1.245 0 0 1-.12-.736c.039-.275.165-.51.33-.699 3.228-3.675 6.635-7.246 9.654-11.098.526-.671.96-1.28 1.15-1.648.309-.92-.009-1.444-.625-2.463-.282-.467-.69-.978-.37-1.535Zm1.989 5.844c.874.005 1.85.248 2.885.875 2.124 1.287 2.334 3.996 1.625 6.157a7.62 7.62 0 0 1-.836 1.726c1.936-.796 3.319-2.483 3.24-4.685-.047-1.28-.317-1.872-.564-2.39l-.03-.06c-.132-.277-.31-.646-.412-1.054-.271-1.08.175-2.039.614-2.677a.917.917 0 0 1-.387-.493v-.002a2.578 2.578 0 0 0-.58-.816c-.407-.394-1.094-.824-2.236-.902a65.316 65.316 0 0 0-2.89-.13c.452.879.758 1.941.289 3.268-.151.425-.46.819-.718 1.183Zm-.832 1.944c-.719.203-1.214.63-1.378.815-2.717 3.057-5.881 6.69-7.576 8.627 5.45.748 8.601-.49 10.378-1.921 1.295-1.044 1.925-2.24 2.176-3.005.434-1.323.537-3.186-.834-4.017-1.153-.7-2.088-.69-2.766-.499Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconYuqueLine',
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

    const iconClass = computed(() => [name, `${name}-yuque-line`, { [`${name}-spin`]: props.spin }]);

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
