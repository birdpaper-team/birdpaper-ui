import type { App } from 'vue';
import _IconBatteryFull from './icon-battery-full.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryFull.name = getComponentsPrefix() + _IconBatteryFull.name;

const IconBatteryFull = Object.assign(_IconBatteryFull, {
  install: (app: App) => {
    app.component(_IconBatteryFull.name, _IconBatteryFull);
  }
});

export default IconBatteryFull;