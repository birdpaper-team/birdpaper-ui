import type { App } from 'vue';
import _IconKeyTwo from './icon-key-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKeyTwo.name = getComponentsPrefix() + _IconKeyTwo.name;

const IconKeyTwo = Object.assign(_IconKeyTwo, {
  install: (app: App) => {
    app.component(_IconKeyTwo.name, _IconKeyTwo);
  }
});

export default IconKeyTwo;