import type { App } from 'vue';
import _IconMenuSearchLine from './icon-menu-search-line.vue';

const IconMenuSearchLine = Object.assign(_IconMenuSearchLine, {
  install: (app: App) => {
    app.component(_IconMenuSearchLine.name, _IconMenuSearchLine);
  }
});

export default IconMenuSearchLine;