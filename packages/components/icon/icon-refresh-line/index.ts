import type { App } from 'vue';
import _IconRefreshLine from './icon-refresh-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRefreshLine.name = getComponentsPrefix() + _IconRefreshLine.name;

const IconRefreshLine = Object.assign(_IconRefreshLine, {
  install: (app: App) => {
    app.component(_IconRefreshLine.name, _IconRefreshLine);
  }
});

export default IconRefreshLine;