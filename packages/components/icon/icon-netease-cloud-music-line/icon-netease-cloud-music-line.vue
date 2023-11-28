<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10.422 11.375c-.294 1.028.012 2.065.784 2.653 1.061.81 2.565.3 2.874-.995.08-.337.103-.722.027-1.056-.23-1.001-.521-1.988-.792-2.996-1.33.154-2.543 1.172-2.893 2.394Zm5.548-.287c.273 1.012.285 2.017-.127 3-1.128 2.69-4.722 3.14-6.573.826-1.302-1.627-1.28-3.961.06-5.734.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224-.176-1.317.512-2.503 1.744-3.04 1.226-.535 2.708-.216 3.53.76.406.479.395 1.08-.025 1.464-.412.377-.997.346-1.435-.09-.247-.246-.51-.44-.877-.436-.525.006-.987.418-.945.937.037.468.172.93.3 1.386.022.078.216.135.338.153 1.333.197 2.504.731 3.472 1.676 2.558 2.493 2.861 6.531.672 9.44-1.529 2.032-3.61 3.169-6.127 3.409-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498.232.537-.019 1.086-.61 1.35-2.368 1.06-3.817 2.855-4.215 5.423-.533 3.434 1.656 6.777 5 7.722 2.723.769 5.658-.167 7.308-2.33 1.586-2.08 1.4-5.1-.427-6.874A3.978 3.978 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconNeteaseCloudMusicLine',
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

    const iconClass = computed(() => [name, `${name}-netease-cloud-music-line`, { [`${name}-spin`]: props.spin }]);

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
