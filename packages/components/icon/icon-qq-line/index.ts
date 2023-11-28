import type { App } from 'vue';
import _IconQqLine from './icon-qq-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconQqLine.name = getComponentsPrefix() + _IconQqLine.name;

const IconQqLine = Object.assign(_IconQqLine, {
  install: (app: App) => {
    app.component(_IconQqLine.name, _IconQqLine);
  }
});

export default IconQqLine;