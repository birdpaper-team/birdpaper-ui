import type { App } from 'vue';
import _IconHomeLine from './icon-home-line.vue';

const IconHomeLine = Object.assign(_IconHomeLine, {
  install: (app: App) => {
    app.component(_IconHomeLine.name, _IconHomeLine);
  }
});

export default IconHomeLine;