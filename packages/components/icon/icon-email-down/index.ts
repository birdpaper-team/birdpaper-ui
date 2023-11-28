import type { App } from 'vue';
import _IconEmailDown from './icon-email-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmailDown.name = getComponentsPrefix() + _IconEmailDown.name;

const IconEmailDown = Object.assign(_IconEmailDown, {
  install: (app: App) => {
    app.component(_IconEmailDown.name, _IconEmailDown);
  }
});

export default IconEmailDown;