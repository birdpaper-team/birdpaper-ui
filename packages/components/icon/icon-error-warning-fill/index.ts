import type { App } from 'vue';
import _IconErrorWarningFill from './icon-error-warning-fill.vue';

const IconErrorWarningFill = Object.assign(_IconErrorWarningFill, {
  install: (app: App) => {
    app.component(_IconErrorWarningFill.name, _IconErrorWarningFill);
  }
});

export default IconErrorWarningFill;