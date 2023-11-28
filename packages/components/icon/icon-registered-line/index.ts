import type { App } from 'vue';
import _IconRegisteredLine from './icon-registered-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRegisteredLine.name = getComponentsPrefix() + _IconRegisteredLine.name;

const IconRegisteredLine = Object.assign(_IconRegisteredLine, {
  install: (app: App) => {
    app.component(_IconRegisteredLine.name, _IconRegisteredLine);
  }
});

export default IconRegisteredLine;