import type { App } from 'vue';
import _IconMoonLine from './icon-moon-line.vue';

const IconMoonLine = Object.assign(_IconMoonLine, {
  install: (app: App) => {
    app.component(_IconMoonLine.name, _IconMoonLine);
  }
});

export default IconMoonLine;