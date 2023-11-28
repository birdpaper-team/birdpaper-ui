import type { App } from 'vue';
import _IconBatteryWorkingOne from './icon-battery-working-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryWorkingOne.name = getComponentsPrefix() + _IconBatteryWorkingOne.name;

const IconBatteryWorkingOne = Object.assign(_IconBatteryWorkingOne, {
  install: (app: App) => {
    app.component(_IconBatteryWorkingOne.name, _IconBatteryWorkingOne);
  }
});

export default IconBatteryWorkingOne;