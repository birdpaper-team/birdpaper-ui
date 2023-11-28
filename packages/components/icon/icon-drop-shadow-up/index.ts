import type { App } from 'vue';
import _IconDropShadowUp from './icon-drop-shadow-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDropShadowUp.name = getComponentsPrefix() + _IconDropShadowUp.name;

const IconDropShadowUp = Object.assign(_IconDropShadowUp, {
  install: (app: App) => {
    app.component(_IconDropShadowUp.name, _IconDropShadowUp);
  }
});

export default IconDropShadowUp;