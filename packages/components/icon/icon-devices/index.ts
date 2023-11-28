import type { App } from 'vue';
import _IconDevices from './icon-devices.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDevices.name = getComponentsPrefix() + _IconDevices.name;

const IconDevices = Object.assign(_IconDevices, {
  install: (app: App) => {
    app.component(_IconDevices.name, _IconDevices);
  }
});

export default IconDevices;