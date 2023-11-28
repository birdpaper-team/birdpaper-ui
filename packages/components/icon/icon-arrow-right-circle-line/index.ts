import type { App } from 'vue';
import _IconArrowRightCircleLine from './icon-arrow-right-circle-line.vue';

const IconArrowRightCircleLine = Object.assign(_IconArrowRightCircleLine, {
  install: (app: App) => {
    app.component(_IconArrowRightCircleLine.name, _IconArrowRightCircleLine);
  }
});

export default IconArrowRightCircleLine;