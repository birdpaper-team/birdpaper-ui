import type { App } from 'vue';
import _IconCodeSLine from './icon-code-s-line.vue';

const IconCodeSLine = Object.assign(_IconCodeSLine, {
  install: (app: App) => {
    app.component(_IconCodeSLine.name, _IconCodeSLine);
  }
});

export default IconCodeSLine;