import type { App } from 'vue';
import _IconVuejsFill from './icon-vuejs-fill.vue';

const IconVuejsFill = Object.assign(_IconVuejsFill, {
  install: (app: App) => {
    app.component(_IconVuejsFill.name, _IconVuejsFill);
  }
});

export default IconVuejsFill;