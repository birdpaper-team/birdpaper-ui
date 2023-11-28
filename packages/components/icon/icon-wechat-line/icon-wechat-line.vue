<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10.001 14.676v-.062c0-2.508 2.017-4.618 4.753-5.233-.364-2.302-2.794-4.18-5.853-4.18-3.32 0-5.9 2.213-5.9 4.779 0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 0 1 1.002 2.238 3.613 3.613 0 0 1 2.363-.442c.166.026.302.046.405.06a7.253 7.253 0 0 0 2.038-.023Zm.457 1.951a9.204 9.204 0 0 1-2.753.055 18.997 18.997 0 0 1-.454-.066 1.613 1.613 0 0 0-1.08.211l-1.904 1.148a.806.806 0 0 1-.49.117.791.791 0 0 1-.729-.851l.15-1.781a1.565 1.565 0 0 0-.439-1.223 5.558 5.558 0 0 1-.241-.262c-.954-1.12-1.517-2.502-1.517-3.995 0-3.745 3.537-6.78 7.9-6.78 4.06 0 7.403 2.627 7.85 6.008 3.371.154 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 0 0-.356.977l.121 1.422a.635.635 0 0 1-.59.68.66.66 0 0 1-.396-.094l-1.544-.917a1.322 1.322 0 0 0-.874-.169c-.147.023-.27.04-.368.053-.316.04-.64.062-.969.062-2.694 0-4.998-1.408-5.943-3.4Zm6.977 1.31a3.326 3.326 0 0 1 1.675.174 3.25 3.25 0 0 1 .842-1.501c.05-.051.087-.09.106-.113.489-.565.743-1.213.743-1.883 0-1.804-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414a5.6 5.6 0 0 0 .714-.045c.08-.01.188-.026.32-.046Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWechatLine',
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

    const iconClass = computed(() => [name, `${name}-wechat-line`, { [`${name}-spin`]: props.spin }]);

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
