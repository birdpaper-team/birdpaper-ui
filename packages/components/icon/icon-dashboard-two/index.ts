import type { App } from 'vue';
import _IconDashboardTwo from './icon-dashboard-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDashboardTwo.name = getComponentsPrefix() + _IconDashboardTwo.name;

const IconDashboardTwo = Object.assign(_IconDashboardTwo, {
  install: (app: App) => {
    app.component(_IconDashboardTwo.name, _IconDashboardTwo);
  }
});

export default IconDashboardTwo;