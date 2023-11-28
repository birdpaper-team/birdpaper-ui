import type { App } from 'vue';
import _IconArrowDropUpLine from './icon-arrow-drop-up-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowDropUpLine.name = getComponentsPrefix() + _IconArrowDropUpLine.name;

const IconArrowDropUpLine = Object.assign(_IconArrowDropUpLine, {
  install: (app: App) => {
    app.component(_IconArrowDropUpLine.name, _IconArrowDropUpLine);
  }
});

export default IconArrowDropUpLine;