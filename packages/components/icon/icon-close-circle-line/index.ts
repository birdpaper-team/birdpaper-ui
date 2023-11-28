import type { App } from 'vue';
import _IconCloseCircleLine from './icon-close-circle-line.vue';

const IconCloseCircleLine = Object.assign(_IconCloseCircleLine, {
  install: (app: App) => {
    app.component(_IconCloseCircleLine.name, _IconCloseCircleLine);
  }
});

export default IconCloseCircleLine;