import type { App } from 'vue';
import _IconSearchLine from './icon-search-line.vue';

const IconSearchLine = Object.assign(_IconSearchLine, {
  install: (app: App) => {
    app.component(_IconSearchLine.name, _IconSearchLine);
  }
});

export default IconSearchLine;