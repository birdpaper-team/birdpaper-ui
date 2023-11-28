import type { App } from 'vue';
import _IconBatteryFailure from './icon-battery-failure.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryFailure.name = getComponentsPrefix() + _IconBatteryFailure.name;

const IconBatteryFailure = Object.assign(_IconBatteryFailure, {
  install: (app: App) => {
    app.component(_IconBatteryFailure.name, _IconBatteryFailure);
  }
});

export default IconBatteryFailure;