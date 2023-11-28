import type { App } from 'vue';
import _IconWalkLine from './icon-walk-line.vue';

const IconWalkLine = Object.assign(_IconWalkLine, {
  install: (app: App) => {
    app.component(_IconWalkLine.name, _IconWalkLine);
  }
});

export default IconWalkLine;