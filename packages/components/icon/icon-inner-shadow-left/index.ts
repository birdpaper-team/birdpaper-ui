import type { App } from 'vue';
import _IconInnerShadowLeft from './icon-inner-shadow-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowLeft.name = getComponentsPrefix() + _IconInnerShadowLeft.name;

const IconInnerShadowLeft = Object.assign(_IconInnerShadowLeft, {
  install: (app: App) => {
    app.component(_IconInnerShadowLeft.name, _IconInnerShadowLeft);
  }
});

export default IconInnerShadowLeft;