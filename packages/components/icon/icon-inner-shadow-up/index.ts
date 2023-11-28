import type { App } from 'vue';
import _IconInnerShadowUp from './icon-inner-shadow-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInnerShadowUp.name = getComponentsPrefix() + _IconInnerShadowUp.name;

const IconInnerShadowUp = Object.assign(_IconInnerShadowUp, {
  install: (app: App) => {
    app.component(_IconInnerShadowUp.name, _IconInnerShadowUp);
  }
});

export default IconInnerShadowUp;