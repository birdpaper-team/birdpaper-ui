import type { App } from 'vue';
import _IconH2 from './icon-h-2.vue';

const IconH2 = Object.assign(_IconH2, {
  install: (app: App) => {
    app.component(_IconH2.name, _IconH2);
  }
});

export default IconH2;