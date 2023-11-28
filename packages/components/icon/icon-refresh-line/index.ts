import type { App } from 'vue';
import _IconRefreshLine from './icon-refresh-line.vue';

const IconRefreshLine = Object.assign(_IconRefreshLine, {
  install: (app: App) => {
    app.component(_IconRefreshLine.name, _IconRefreshLine);
  }
});

export default IconRefreshLine;