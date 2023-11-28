import type { App } from 'vue';
import _IconFontSize from './icon-font-size.vue';

const IconFontSize = Object.assign(_IconFontSize, {
  install: (app: App) => {
    app.component(_IconFontSize.name, _IconFontSize);
  }
});

export default IconFontSize;