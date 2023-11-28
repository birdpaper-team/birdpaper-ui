import type { App } from 'vue';
import _IconPin from './icon-pin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPin.name = getComponentsPrefix() + _IconPin.name;

const IconPin = Object.assign(_IconPin, {
  install: (app: App) => {
    app.component(_IconPin.name, _IconPin);
  }
});

export default IconPin;