import type { App } from 'vue';
import _IconTurnOffBluetooth from './icon-turn-off-bluetooth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTurnOffBluetooth.name = getComponentsPrefix() + _IconTurnOffBluetooth.name;

const IconTurnOffBluetooth = Object.assign(_IconTurnOffBluetooth, {
  install: (app: App) => {
    app.component(_IconTurnOffBluetooth.name, _IconTurnOffBluetooth);
  }
});

export default IconTurnOffBluetooth;