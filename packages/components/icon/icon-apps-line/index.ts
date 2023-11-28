import type { App } from 'vue';
import _IconAppsLine from './icon-apps-line.vue';

const IconAppsLine = Object.assign(_IconAppsLine, {
  install: (app: App) => {
    app.component(_IconAppsLine.name, _IconAppsLine);
  }
});

export default IconAppsLine;