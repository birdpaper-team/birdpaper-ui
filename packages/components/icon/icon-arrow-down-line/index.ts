import type { App } from 'vue';
import _IconArrowDownLine from './icon-arrow-down-line.vue';

const IconArrowDownLine = Object.assign(_IconArrowDownLine, {
  install: (app: App) => {
    app.component(_IconArrowDownLine.name, _IconArrowDownLine);
  }
});

export default IconArrowDownLine;