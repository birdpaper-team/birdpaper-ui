import type { App } from 'vue';
import _IconGamepad from './icon-gamepad.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGamepad.name = getComponentsPrefix() + _IconGamepad.name;

const IconGamepad = Object.assign(_IconGamepad, {
  install: (app: App) => {
    app.component(_IconGamepad.name, _IconGamepad);
  }
});

export default IconGamepad;