import type { App } from 'vue';
import _IconRidingLine from './icon-riding-line.vue';

const IconRidingLine = Object.assign(_IconRidingLine, {
  install: (app: App) => {
    app.component(_IconRidingLine.name, _IconRidingLine);
  }
});

export default IconRidingLine;