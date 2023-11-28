import type { App } from 'vue';
import _IconArrowUpLine from './icon-arrow-up-line.vue';

const IconArrowUpLine = Object.assign(_IconArrowUpLine, {
  install: (app: App) => {
    app.component(_IconArrowUpLine.name, _IconArrowUpLine);
  }
});

export default IconArrowUpLine;