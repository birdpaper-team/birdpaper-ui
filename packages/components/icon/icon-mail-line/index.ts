import type { App } from 'vue';
import _IconMailLine from './icon-mail-line.vue';

const IconMailLine = Object.assign(_IconMailLine, {
  install: (app: App) => {
    app.component(_IconMailLine.name, _IconMailLine);
  }
});

export default IconMailLine;