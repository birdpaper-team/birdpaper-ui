import type { App } from 'vue';
import _IconDashboardOne from './icon-dashboard-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDashboardOne.name = getComponentsPrefix() + _IconDashboardOne.name;

const IconDashboardOne = Object.assign(_IconDashboardOne, {
  install: (app: App) => {
    app.component(_IconDashboardOne.name, _IconDashboardOne);
  }
});

export default IconDashboardOne;