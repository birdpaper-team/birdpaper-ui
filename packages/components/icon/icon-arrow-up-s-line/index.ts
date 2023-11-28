import type { App } from 'vue';
import _IconArrowUpSLine from './icon-arrow-up-s-line.vue';

const IconArrowUpSLine = Object.assign(_IconArrowUpSLine, {
  install: (app: App) => {
    app.component(_IconArrowUpSLine.name, _IconArrowUpSLine);
  }
});

export default IconArrowUpSLine;