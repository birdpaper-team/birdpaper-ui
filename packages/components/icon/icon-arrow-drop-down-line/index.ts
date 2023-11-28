import type { App } from 'vue';
import _IconArrowDropDownLine from './icon-arrow-drop-down-line.vue';

const IconArrowDropDownLine = Object.assign(_IconArrowDropDownLine, {
  install: (app: App) => {
    app.component(_IconArrowDropDownLine.name, _IconArrowDropDownLine);
  }
});

export default IconArrowDropDownLine;