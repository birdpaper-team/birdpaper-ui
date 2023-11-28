import type { App } from 'vue';
import _IconSubtractLine from './icon-subtract-line.vue';

const IconSubtractLine = Object.assign(_IconSubtractLine, {
  install: (app: App) => {
    app.component(_IconSubtractLine.name, _IconSubtractLine);
  }
});

export default IconSubtractLine;