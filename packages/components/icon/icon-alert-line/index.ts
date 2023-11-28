import type { App } from 'vue';
import _IconAlertLine from './icon-alert-line.vue';

const IconAlertLine = Object.assign(_IconAlertLine, {
  install: (app: App) => {
    app.component(_IconAlertLine.name, _IconAlertLine);
  }
});

export default IconAlertLine;