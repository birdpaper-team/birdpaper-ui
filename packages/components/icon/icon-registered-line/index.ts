import type { App } from 'vue';
import _IconRegisteredLine from './icon-registered-line.vue';

const IconRegisteredLine = Object.assign(_IconRegisteredLine, {
  install: (app: App) => {
    app.component(_IconRegisteredLine.name, _IconRegisteredLine);
  }
});

export default IconRegisteredLine;