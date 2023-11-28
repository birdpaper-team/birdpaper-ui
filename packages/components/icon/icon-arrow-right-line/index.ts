import type { App } from 'vue';
import _IconArrowRightLine from './icon-arrow-right-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowRightLine.name = getComponentsPrefix() + _IconArrowRightLine.name;

const IconArrowRightLine = Object.assign(_IconArrowRightLine, {
  install: (app: App) => {
    app.component(_IconArrowRightLine.name, _IconArrowRightLine);
  }
});

export default IconArrowRightLine;