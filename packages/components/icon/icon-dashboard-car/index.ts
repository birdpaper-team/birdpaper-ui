import type { App } from 'vue';
import _IconDashboardCar from './icon-dashboard-car.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDashboardCar.name = getComponentsPrefix() + _IconDashboardCar.name;

const IconDashboardCar = Object.assign(_IconDashboardCar, {
  install: (app: App) => {
    app.component(_IconDashboardCar.name, _IconDashboardCar);
  }
});

export default IconDashboardCar;