import type { App } from 'vue';
import _IconHistory from './icon-history.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHistory.name = getComponentsPrefix() + _IconHistory.name;

const IconHistory = Object.assign(_IconHistory, {
  install: (app: App) => {
    app.component(_IconHistory.name, _IconHistory);
  }
});

export default IconHistory;