import type { App } from 'vue';
import _IconArrowLeftLine from './icon-arrow-left-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeftLine.name = getComponentsPrefix() + _IconArrowLeftLine.name;

const IconArrowLeftLine = Object.assign(_IconArrowLeftLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftLine.name, _IconArrowLeftLine);
  }
});

export default IconArrowLeftLine;