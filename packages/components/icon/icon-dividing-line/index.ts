import type { App } from 'vue';
import _IconDividingLine from './icon-dividing-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDividingLine.name = getComponentsPrefix() + _IconDividingLine.name;

const IconDividingLine = Object.assign(_IconDividingLine, {
  install: (app: App) => {
    app.component(_IconDividingLine.name, _IconDividingLine);
  }
});

export default IconDividingLine;