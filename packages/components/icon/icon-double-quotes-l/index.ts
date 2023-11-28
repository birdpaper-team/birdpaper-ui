import type { App } from 'vue';
import _IconDoubleQuotesL from './icon-double-quotes-l.vue';

const IconDoubleQuotesL = Object.assign(_IconDoubleQuotesL, {
  install: (app: App) => {
    app.component(_IconDoubleQuotesL.name, _IconDoubleQuotesL);
  }
});

export default IconDoubleQuotesL;