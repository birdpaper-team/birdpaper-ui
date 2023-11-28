import type { App } from 'vue';
import _IconEyeFill from './icon-eye-fill.vue';

const IconEyeFill = Object.assign(_IconEyeFill, {
  install: (app: App) => {
    app.component(_IconEyeFill.name, _IconEyeFill);
  }
});

export default IconEyeFill;