import type { App } from 'vue';
import _IconGoogleFill from './icon-google-fill.vue';

const IconGoogleFill = Object.assign(_IconGoogleFill, {
  install: (app: App) => {
    app.component(_IconGoogleFill.name, _IconGoogleFill);
  }
});

export default IconGoogleFill;