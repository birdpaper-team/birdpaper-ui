import type { App } from 'vue';
import _IconSTurnLeft from './icon-s-turn-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSTurnLeft.name = getComponentsPrefix() + _IconSTurnLeft.name;

const IconSTurnLeft = Object.assign(_IconSTurnLeft, {
  install: (app: App) => {
    app.component(_IconSTurnLeft.name, _IconSTurnLeft);
  }
});

export default IconSTurnLeft;