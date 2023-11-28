import type { App } from 'vue';
import _IconBluetooth from './icon-bluetooth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBluetooth.name = getComponentsPrefix() + _IconBluetooth.name;

const IconBluetooth = Object.assign(_IconBluetooth, {
  install: (app: App) => {
    app.component(_IconBluetooth.name, _IconBluetooth);
  }
});

export default IconBluetooth;