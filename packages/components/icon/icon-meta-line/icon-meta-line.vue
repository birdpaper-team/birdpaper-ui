<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M20.974 16.163c-.285.892-.775 1.337-1.47 1.337-.877 0-1.74-.526-2.587-1.58-.589-.73-1.414-2.12-2.477-4.168a58.288 58.288 0 0 0-1.269-2.33c.31-.488.586-.88.829-1.176.957-1.164 1.959-1.746 3.005-1.746.835 0 1.63.536 2.386 1.608.776 1.101 1.32 2.461 1.632 4.08.306 1.594.29 2.919-.049 3.975Zm-8.97-4.733c.21.385.43.8.66 1.242 1.125 2.167 2.023 3.668 2.695 4.503 1.248 1.55 2.63 2.325 4.146 2.325.856 0 1.588-.27 2.197-.81.525-.467.917-1.105 1.177-1.916.443-1.38.479-3.035.108-4.963-.366-1.901-1.02-3.52-1.962-4.856-1.154-1.637-2.494-2.455-4.02-2.455-1.676 0-3.193.825-4.55 2.476-.142.173-.292.37-.45.594a10.318 10.318 0 0 0-.45-.594C10.198 5.326 8.68 4.5 7.005 4.5c-1.526 0-2.866.818-4.02 2.455-.942 1.336-1.596 2.955-1.962 4.856-.37 1.928-.335 3.582.108 4.963.26.81.652 1.45 1.177 1.915.609.54 1.341.811 2.197.811 1.516 0 2.898-.775 4.146-2.325.672-.835 1.57-2.336 2.694-4.502.23-.444.45-.858.66-1.243Zm-1.166-2.008c-.39.674-.812 1.45-1.268 2.33C8.507 13.8 7.68 15.188 7.093 15.92c-.848 1.053-1.71 1.579-2.588 1.579-.694 0-1.184-.445-1.47-1.337-.338-1.056-.354-2.381-.048-3.974.311-1.62.855-2.98 1.632-4.081C5.375 7.036 6.17 6.5 7.005 6.5c1.046 0 2.048.582 3.005 1.746.243.296.519.688.828 1.176Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMetaLine',
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

    const iconClass = computed(() => [name, `${name}-meta-line`, { [`${name}-spin`]: props.spin }]);

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
