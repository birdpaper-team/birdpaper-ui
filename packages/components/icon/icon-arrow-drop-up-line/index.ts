import type { App } from 'vue';
import _IconArrowDropUpLine from './icon-arrow-drop-up-line.vue';

const IconArrowDropUpLine = Object.assign(_IconArrowDropUpLine, {
  install: (app: App) => {
    app.component(_IconArrowDropUpLine.name, _IconArrowDropUpLine);
  }
});

export default IconArrowDropUpLine;