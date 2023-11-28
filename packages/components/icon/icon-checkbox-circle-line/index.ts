import type { App } from 'vue';
import _IconCheckboxCircleLine from './icon-checkbox-circle-line.vue';

const IconCheckboxCircleLine = Object.assign(_IconCheckboxCircleLine, {
  install: (app: App) => {
    app.component(_IconCheckboxCircleLine.name, _IconCheckboxCircleLine);
  }
});

export default IconCheckboxCircleLine;