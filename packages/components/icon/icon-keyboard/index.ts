import type { App } from 'vue';
import _IconKeyboard from './icon-keyboard.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKeyboard.name = getComponentsPrefix() + _IconKeyboard.name;

const IconKeyboard = Object.assign(_IconKeyboard, {
  install: (app: App) => {
    app.component(_IconKeyboard.name, _IconKeyboard);
  }
});

export default IconKeyboard;