import type { App } from 'vue';
import _IconAlertLine from './icon-alert-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlertLine.name = getComponentsPrefix() + _IconAlertLine.name;

const IconAlertLine = Object.assign(_IconAlertLine, {
  install: (app: App) => {
    app.component(_IconAlertLine.name, _IconAlertLine);
  }
});

export default IconAlertLine;