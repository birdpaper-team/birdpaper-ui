import type { App } from 'vue';
import _IconInnerShadowDown from './icon-inner-shadow-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowDown.name = getComponentsPrefix() + _IconInnerShadowDown.name;

const IconInnerShadowDown = Object.assign(_IconInnerShadowDown, {
  install: (app: App) => {
    app.component(_IconInnerShadowDown.name, _IconInnerShadowDown);
  }
});

export default IconInnerShadowDown;