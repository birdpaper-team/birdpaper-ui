import type { App } from 'vue';
import _IconMetaLine from './icon-meta-line.vue';

const IconMetaLine = Object.assign(_IconMetaLine, {
  install: (app: App) => {
    app.component(_IconMetaLine.name, _IconMetaLine);
  }
});

export default IconMetaLine;