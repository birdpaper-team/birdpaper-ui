import type { App } from 'vue';
import _IconFormatClear from './icon-format-clear.vue';

const IconFormatClear = Object.assign(_IconFormatClear, {
  install: (app: App) => {
    app.component(_IconFormatClear.name, _IconFormatClear);
  }
});

export default IconFormatClear;