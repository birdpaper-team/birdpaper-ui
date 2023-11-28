import type { App } from 'vue';
import _IconDropShadowLeft from './icon-drop-shadow-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDropShadowLeft.name = getComponentsPrefix() + _IconDropShadowLeft.name;

const IconDropShadowLeft = Object.assign(_IconDropShadowLeft, {
  install: (app: App) => {
    app.component(_IconDropShadowLeft.name, _IconDropShadowLeft);
  }
});

export default IconDropShadowLeft;