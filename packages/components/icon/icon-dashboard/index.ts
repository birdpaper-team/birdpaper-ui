import type { App } from 'vue';
import _IconDashboard from './icon-dashboard.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDashboard.name = getComponentsPrefix() + _IconDashboard.name;

const IconDashboard = Object.assign(_IconDashboard, {
  install: (app: App) => {
    app.component(_IconDashboard.name, _IconDashboard);
  }
});

export default IconDashboard;