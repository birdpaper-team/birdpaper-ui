import type { App } from 'vue';
import _IconArrowLeftLine from './icon-arrow-left-line.vue';

const IconArrowLeftLine = Object.assign(_IconArrowLeftLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftLine.name, _IconArrowLeftLine);
  }
});

export default IconArrowLeftLine;