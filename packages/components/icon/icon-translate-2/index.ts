import type { App } from 'vue';
import _IconTranslate2 from './icon-translate-2.vue';

const IconTranslate2 = Object.assign(_IconTranslate2, {
  install: (app: App) => {
    app.component(_IconTranslate2.name, _IconTranslate2);
  }
});

export default IconTranslate2;