import type { App } from 'vue';
import _IconCarBattery from './icon-car-battery.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCarBattery.name = getComponentsPrefix() + _IconCarBattery.name;

const IconCarBattery = Object.assign(_IconCarBattery, {
  install: (app: App) => {
    app.component(_IconCarBattery.name, _IconCarBattery);
  }
});

export default IconCarBattery;