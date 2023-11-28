import type { App } from 'vue';
import _IconArrowLeftRightLine from './icon-arrow-left-right-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeftRightLine.name = getComponentsPrefix() + _IconArrowLeftRightLine.name;

const IconArrowLeftRightLine = Object.assign(_IconArrowLeftRightLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftRightLine.name, _IconArrowLeftRightLine);
  }
});

export default IconArrowLeftRightLine;