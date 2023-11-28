import type { App } from 'vue';
import _IconH6 from './icon-h-6.vue';

const IconH6 = Object.assign(_IconH6, {
  install: (app: App) => {
    app.component(_IconH6.name, _IconH6);
  }
});

export default IconH6;