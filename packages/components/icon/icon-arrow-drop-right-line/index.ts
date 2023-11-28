import type { App } from 'vue';
import _IconArrowDropRightLine from './icon-arrow-drop-right-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowDropRightLine.name = getComponentsPrefix() + _IconArrowDropRightLine.name;

const IconArrowDropRightLine = Object.assign(_IconArrowDropRightLine, {
  install: (app: App) => {
    app.component(_IconArrowDropRightLine.name, _IconArrowDropRightLine);
  }
});

export default IconArrowDropRightLine;