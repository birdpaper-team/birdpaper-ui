import type { App } from 'vue';
import _IconTruck from './icon-truck.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTruck.name = getComponentsPrefix() + _IconTruck.name;

const IconTruck = Object.assign(_IconTruck, {
  install: (app: App) => {
    app.component(_IconTruck.name, _IconTruck);
  }
});

export default IconTruck;