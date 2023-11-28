import type { App } from 'vue';
import _IconCloseLine from './icon-close-line.vue';

const IconCloseLine = Object.assign(_IconCloseLine, {
  install: (app: App) => {
    app.component(_IconCloseLine.name, _IconCloseLine);
  }
});

export default IconCloseLine;