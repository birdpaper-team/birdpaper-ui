import type { App } from 'vue';
import _IconRunLine from './icon-run-line.vue';

const IconRunLine = Object.assign(_IconRunLine, {
  install: (app: App) => {
    app.component(_IconRunLine.name, _IconRunLine);
  }
});

export default IconRunLine;