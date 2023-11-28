import type { App } from 'vue';
import _IconQqLine from './icon-qq-line.vue';

const IconQqLine = Object.assign(_IconQqLine, {
  install: (app: App) => {
    app.component(_IconQqLine.name, _IconQqLine);
  }
});

export default IconQqLine;