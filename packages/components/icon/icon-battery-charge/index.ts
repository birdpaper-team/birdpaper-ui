import type { App } from 'vue';
import _IconBatteryCharge from './icon-battery-charge.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryCharge.name = getComponentsPrefix() + _IconBatteryCharge.name;

const IconBatteryCharge = Object.assign(_IconBatteryCharge, {
  install: (app: App) => {
    app.component(_IconBatteryCharge.name, _IconBatteryCharge);
  }
});

export default IconBatteryCharge;