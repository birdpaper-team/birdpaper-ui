import type { App } from 'vue';
import _IconAppsLine from './icon-apps-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAppsLine.name = getComponentsPrefix() + _IconAppsLine.name;

const IconAppsLine = Object.assign(_IconAppsLine, {
  install: (app: App) => {
    app.component(_IconAppsLine.name, _IconAppsLine);
  }
});

export default IconAppsLine;