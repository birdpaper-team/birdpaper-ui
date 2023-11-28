import type { App } from 'vue';
import _IconBatteryStorage from './icon-battery-storage.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryStorage.name = getComponentsPrefix() + _IconBatteryStorage.name;

const IconBatteryStorage = Object.assign(_IconBatteryStorage, {
  install: (app: App) => {
    app.component(_IconBatteryStorage.name, _IconBatteryStorage);
  }
});

export default IconBatteryStorage;