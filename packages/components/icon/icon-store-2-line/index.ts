import type { App } from 'vue';
import _IconStore2Line from './icon-store-2-line.vue';

const IconStore2Line = Object.assign(_IconStore2Line, {
  install: (app: App) => {
    app.component(_IconStore2Line.name, _IconStore2Line);
  }
});

export default IconStore2Line;