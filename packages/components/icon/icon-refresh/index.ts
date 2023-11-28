import type { App } from 'vue';
import _IconRefresh from './icon-refresh.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRefresh.name = getComponentsPrefix() + _IconRefresh.name;

const IconRefresh = Object.assign(_IconRefresh, {
  install: (app: App) => {
    app.component(_IconRefresh.name, _IconRefresh);
  }
});

export default IconRefresh;