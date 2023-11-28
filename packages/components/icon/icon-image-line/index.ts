import type { App } from 'vue';
import _IconImageLine from './icon-image-line.vue';

const IconImageLine = Object.assign(_IconImageLine, {
  install: (app: App) => {
    app.component(_IconImageLine.name, _IconImageLine);
  }
});

export default IconImageLine;