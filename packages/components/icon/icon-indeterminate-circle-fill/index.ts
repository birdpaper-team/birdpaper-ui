import type { App } from 'vue';
import _IconIndeterminateCircleFill from './icon-indeterminate-circle-fill.vue';

const IconIndeterminateCircleFill = Object.assign(_IconIndeterminateCircleFill, {
  install: (app: App) => {
    app.component(_IconIndeterminateCircleFill.name, _IconIndeterminateCircleFill);
  }
});

export default IconIndeterminateCircleFill;