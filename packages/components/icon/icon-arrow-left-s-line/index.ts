import type { App } from 'vue';
import _IconArrowLeftSLine from './icon-arrow-left-s-line.vue';

const IconArrowLeftSLine = Object.assign(_IconArrowLeftSLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftSLine.name, _IconArrowLeftSLine);
  }
});

export default IconArrowLeftSLine;