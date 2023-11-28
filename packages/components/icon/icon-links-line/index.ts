import type { App } from 'vue';
import _IconLinksLine from './icon-links-line.vue';

const IconLinksLine = Object.assign(_IconLinksLine, {
  install: (app: App) => {
    app.component(_IconLinksLine.name, _IconLinksLine);
  }
});

export default IconLinksLine;