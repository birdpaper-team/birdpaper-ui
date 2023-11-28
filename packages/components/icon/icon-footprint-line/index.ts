import type { App } from 'vue';
import _IconFootprintLine from './icon-footprint-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFootprintLine.name = getComponentsPrefix() + _IconFootprintLine.name;

const IconFootprintLine = Object.assign(_IconFootprintLine, {
  install: (app: App) => {
    app.component(_IconFootprintLine.name, _IconFootprintLine);
  }
});

export default IconFootprintLine;