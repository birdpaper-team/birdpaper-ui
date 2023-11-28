import type { App } from 'vue';
import _IconSunLine from './icon-sun-line.vue';

const IconSunLine = Object.assign(_IconSunLine, {
  install: (app: App) => {
    app.component(_IconSunLine.name, _IconSunLine);
  }
});

export default IconSunLine;