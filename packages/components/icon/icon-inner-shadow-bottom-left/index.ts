import type { App } from 'vue';
import _IconInnerShadowBottomLeft from './icon-inner-shadow-bottom-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowBottomLeft.name = getComponentsPrefix() + _IconInnerShadowBottomLeft.name;

const IconInnerShadowBottomLeft = Object.assign(_IconInnerShadowBottomLeft, {
  install: (app: App) => {
    app.component(_IconInnerShadowBottomLeft.name, _IconInnerShadowBottomLeft);
  }
});

export default IconInnerShadowBottomLeft;