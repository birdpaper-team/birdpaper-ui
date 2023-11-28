import type { App } from 'vue';
import _IconFontColor from './icon-font-color.vue';

const IconFontColor = Object.assign(_IconFontColor, {
  install: (app: App) => {
    app.component(_IconFontColor.name, _IconFontColor);
  }
});

export default IconFontColor;