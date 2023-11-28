import type { App } from 'vue';
import _IconArrowRightSLine from './icon-arrow-right-s-line.vue';

const IconArrowRightSLine = Object.assign(_IconArrowRightSLine, {
  install: (app: App) => {
    app.component(_IconArrowRightSLine.name, _IconArrowRightSLine);
  }
});

export default IconArrowRightSLine;