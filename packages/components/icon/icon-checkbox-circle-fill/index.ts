import type { App } from 'vue';
import _IconCheckboxCircleFill from './icon-checkbox-circle-fill.vue';

const IconCheckboxCircleFill = Object.assign(_IconCheckboxCircleFill, {
  install: (app: App) => {
    app.component(_IconCheckboxCircleFill.name, _IconCheckboxCircleFill);
  }
});

export default IconCheckboxCircleFill;