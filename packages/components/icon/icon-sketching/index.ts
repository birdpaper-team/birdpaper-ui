import type { App } from 'vue';
import _IconSketching from './icon-sketching.vue';

const IconSketching = Object.assign(_IconSketching, {
  install: (app: App) => {
    app.component(_IconSketching.name, _IconSketching);
  }
});

export default IconSketching;