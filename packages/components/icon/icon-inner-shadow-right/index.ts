import type { App } from 'vue';
import _IconInnerShadowRight from './icon-inner-shadow-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowRight.name = getComponentsPrefix() + _IconInnerShadowRight.name;

const IconInnerShadowRight = Object.assign(_IconInnerShadowRight, {
  install: (app: App) => {
    app.component(_IconInnerShadowRight.name, _IconInnerShadowRight);
  }
});

export default IconInnerShadowRight;