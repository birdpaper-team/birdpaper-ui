import type { App } from 'vue';
import _IconAddCircleFill from './icon-add-circle-fill.vue';

const IconAddCircleFill = Object.assign(_IconAddCircleFill, {
  install: (app: App) => {
    app.component(_IconAddCircleFill.name, _IconAddCircleFill);
  }
});

export default IconAddCircleFill;