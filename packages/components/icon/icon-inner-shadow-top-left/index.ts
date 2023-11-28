import type { App } from 'vue';
import _IconInnerShadowTopLeft from './icon-inner-shadow-top-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowTopLeft.name = getComponentsPrefix() + _IconInnerShadowTopLeft.name;

const IconInnerShadowTopLeft = Object.assign(_IconInnerShadowTopLeft, {
  install: (app: App) => {
    app.component(_IconInnerShadowTopLeft.name, _IconInnerShadowTopLeft);
  }
});

export default IconInnerShadowTopLeft;