import type { App } from 'vue';
import _IconSearchFill from './icon-search-fill.vue';

const IconSearchFill = Object.assign(_IconSearchFill, {
  install: (app: App) => {
    app.component(_IconSearchFill.name, _IconSearchFill);
  }
});

export default IconSearchFill;