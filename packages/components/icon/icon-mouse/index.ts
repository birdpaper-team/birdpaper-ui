import type { App } from 'vue';
import _IconMouse from './icon-mouse.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMouse.name = getComponentsPrefix() + _IconMouse.name;

const IconMouse = Object.assign(_IconMouse, {
  install: (app: App) => {
    app.component(_IconMouse.name, _IconMouse);
  }
});

export default IconMouse;