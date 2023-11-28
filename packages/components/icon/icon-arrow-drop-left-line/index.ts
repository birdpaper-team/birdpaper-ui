import type { App } from 'vue';
import _IconArrowDropLeftLine from './icon-arrow-drop-left-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowDropLeftLine.name = getComponentsPrefix() + _IconArrowDropLeftLine.name;

const IconArrowDropLeftLine = Object.assign(_IconArrowDropLeftLine, {
  install: (app: App) => {
    app.component(_IconArrowDropLeftLine.name, _IconArrowDropLeftLine);
  }
});

export default IconArrowDropLeftLine;