import type { App } from 'vue';
import _IconCheckLine from './icon-check-line.vue';

const IconCheckLine = Object.assign(_IconCheckLine, {
  install: (app: App) => {
    app.component(_IconCheckLine.name, _IconCheckLine);
  }
});

export default IconCheckLine;