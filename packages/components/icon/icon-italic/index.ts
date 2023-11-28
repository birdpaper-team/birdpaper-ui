import type { App } from 'vue';
import _IconItalic from './icon-italic.vue';

const IconItalic = Object.assign(_IconItalic, {
  install: (app: App) => {
    app.component(_IconItalic.name, _IconItalic);
  }
});

export default IconItalic;