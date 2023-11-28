import type { App } from 'vue';
import _IconErrorWarningLine from './icon-error-warning-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconErrorWarningLine.name = getComponentsPrefix() + _IconErrorWarningLine.name;

const IconErrorWarningLine = Object.assign(_IconErrorWarningLine, {
  install: (app: App) => {
    app.component(_IconErrorWarningLine.name, _IconErrorWarningLine);
  }
});

export default IconErrorWarningLine;