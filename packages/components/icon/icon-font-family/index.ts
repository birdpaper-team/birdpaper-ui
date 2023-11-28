import type { App } from 'vue';
import _IconFontFamily from './icon-font-family.vue';

const IconFontFamily = Object.assign(_IconFontFamily, {
  install: (app: App) => {
    app.component(_IconFontFamily.name, _IconFontFamily);
  }
});

export default IconFontFamily;