import type { App } from 'vue';
import _IconMoreLine from './icon-more-line.vue';

const IconMoreLine = Object.assign(_IconMoreLine, {
  install: (app: App) => {
    app.component(_IconMoreLine.name, _IconMoreLine);
  }
});

export default IconMoreLine;