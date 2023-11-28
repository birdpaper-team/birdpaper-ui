import type { App } from 'vue';
import _IconH4 from './icon-h-4.vue';

const IconH4 = Object.assign(_IconH4, {
  install: (app: App) => {
    app.component(_IconH4.name, _IconH4);
  }
});

export default IconH4;