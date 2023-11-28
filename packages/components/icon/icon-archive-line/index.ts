import type { App } from 'vue';
import _IconArchiveLine from './icon-archive-line.vue';

const IconArchiveLine = Object.assign(_IconArchiveLine, {
  install: (app: App) => {
    app.component(_IconArchiveLine.name, _IconArchiveLine);
  }
});

export default IconArchiveLine;