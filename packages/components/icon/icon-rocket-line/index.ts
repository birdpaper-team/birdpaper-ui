import type { App } from 'vue';
import _IconRocketLine from './icon-rocket-line.vue';

const IconRocketLine = Object.assign(_IconRocketLine, {
  install: (app: App) => {
    app.component(_IconRocketLine.name, _IconRocketLine);
  }
});

export default IconRocketLine;