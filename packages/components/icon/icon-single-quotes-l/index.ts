import type { App } from 'vue';
import _IconSingleQuotesL from './icon-single-quotes-l.vue';

const IconSingleQuotesL = Object.assign(_IconSingleQuotesL, {
  install: (app: App) => {
    app.component(_IconSingleQuotesL.name, _IconSingleQuotesL);
  }
});

export default IconSingleQuotesL;