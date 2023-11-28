import type { App } from 'vue';
import _IconArrowLeftRightLine from './icon-arrow-left-right-line.vue';

const IconArrowLeftRightLine = Object.assign(_IconArrowLeftRightLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftRightLine.name, _IconArrowLeftRightLine);
  }
});

export default IconArrowLeftRightLine;