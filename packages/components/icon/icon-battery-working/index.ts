import type { App } from 'vue';
import _IconBatteryWorking from './icon-battery-working.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryWorking.name = getComponentsPrefix() + _IconBatteryWorking.name;

const IconBatteryWorking = Object.assign(_IconBatteryWorking, {
  install: (app: App) => {
    app.component(_IconBatteryWorking.name, _IconBatteryWorking);
  }
});

export default IconBatteryWorking;