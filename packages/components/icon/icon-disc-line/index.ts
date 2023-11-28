import type { App } from 'vue';
import _IconDiscLine from './icon-disc-line.vue';

const IconDiscLine = Object.assign(_IconDiscLine, {
  install: (app: App) => {
    app.component(_IconDiscLine.name, _IconDiscLine);
  }
});

export default IconDiscLine;