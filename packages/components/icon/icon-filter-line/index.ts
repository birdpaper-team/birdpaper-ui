import type { App } from 'vue';
import _IconFilterLine from './icon-filter-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFilterLine.name = getComponentsPrefix() + _IconFilterLine.name;

const IconFilterLine = Object.assign(_IconFilterLine, {
  install: (app: App) => {
    app.component(_IconFilterLine.name, _IconFilterLine);
  }
});

export default IconFilterLine;