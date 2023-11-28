import type { App } from 'vue';
import _IconArrowDownSLine from './icon-arrow-down-s-line.vue';

const IconArrowDownSLine = Object.assign(_IconArrowDownSLine, {
  install: (app: App) => {
    app.component(_IconArrowDownSLine.name, _IconArrowDownSLine);
  }
});

export default IconArrowDownSLine;