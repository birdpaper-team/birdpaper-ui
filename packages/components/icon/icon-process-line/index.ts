import type { App } from 'vue';
import _IconProcessLine from './icon-process-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconProcessLine.name = getComponentsPrefix() + _IconProcessLine.name;

const IconProcessLine = Object.assign(_IconProcessLine, {
  install: (app: App) => {
    app.component(_IconProcessLine.name, _IconProcessLine);
  }
});

export default IconProcessLine;