import type { App } from 'vue';
import _IconAddCircleLine from './icon-add-circle-line.vue';

const IconAddCircleLine = Object.assign(_IconAddCircleLine, {
  install: (app: App) => {
    app.component(_IconAddCircleLine.name, _IconAddCircleLine);
  }
});

export default IconAddCircleLine;