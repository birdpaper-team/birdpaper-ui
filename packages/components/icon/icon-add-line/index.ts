import type { App } from 'vue';
import _IconAddLine from './icon-add-line.vue';

const IconAddLine = Object.assign(_IconAddLine, {
  install: (app: App) => {
    app.component(_IconAddLine.name, _IconAddLine);
  }
});

export default IconAddLine;