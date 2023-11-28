import type { App } from 'vue';
import _IconLocalPin from './icon-local-pin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLocalPin.name = getComponentsPrefix() + _IconLocalPin.name;

const IconLocalPin = Object.assign(_IconLocalPin, {
  install: (app: App) => {
    app.component(_IconLocalPin.name, _IconLocalPin);
  }
});

export default IconLocalPin;