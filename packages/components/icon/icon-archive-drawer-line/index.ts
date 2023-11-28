import type { App } from 'vue';
import _IconArchiveDrawerLine from './icon-archive-drawer-line.vue';

const IconArchiveDrawerLine = Object.assign(_IconArchiveDrawerLine, {
  install: (app: App) => {
    app.component(_IconArchiveDrawerLine.name, _IconArchiveDrawerLine);
  }
});

export default IconArchiveDrawerLine;