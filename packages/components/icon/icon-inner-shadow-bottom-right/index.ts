import type { App } from 'vue';
import _IconInnerShadowBottomRight from './icon-inner-shadow-bottom-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowBottomRight.name = getComponentsPrefix() + _IconInnerShadowBottomRight.name;

const IconInnerShadowBottomRight = Object.assign(_IconInnerShadowBottomRight, {
  install: (app: App) => {
    app.component(_IconInnerShadowBottomRight.name, _IconInnerShadowBottomRight);
  }
});

export default IconInnerShadowBottomRight;