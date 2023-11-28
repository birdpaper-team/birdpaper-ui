import type { App } from 'vue';
import _IconArrowDropLeftLine from './icon-arrow-drop-left-line.vue';

const IconArrowDropLeftLine = Object.assign(_IconArrowDropLeftLine, {
  install: (app: App) => {
    app.component(_IconArrowDropLeftLine.name, _IconArrowDropLeftLine);
  }
});

export default IconArrowDropLeftLine;