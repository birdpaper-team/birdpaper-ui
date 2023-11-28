import type { App } from 'vue';
import _IconDropShadowDown from './icon-drop-shadow-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDropShadowDown.name = getComponentsPrefix() + _IconDropShadowDown.name;

const IconDropShadowDown = Object.assign(_IconDropShadowDown, {
  install: (app: App) => {
    app.component(_IconDropShadowDown.name, _IconDropShadowDown);
  }
});

export default IconDropShadowDown;