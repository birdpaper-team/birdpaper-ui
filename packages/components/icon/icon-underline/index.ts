import type { App } from 'vue';
import _IconUnderline from './icon-underline.vue';

const IconUnderline = Object.assign(_IconUnderline, {
  install: (app: App) => {
    app.component(_IconUnderline.name, _IconUnderline);
  }
});

export default IconUnderline;