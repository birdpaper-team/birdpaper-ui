import type { App } from 'vue';
import _IconCloseRemind from './icon-close-remind.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseRemind.name = getComponentsPrefix() + _IconCloseRemind.name;

const IconCloseRemind = Object.assign(_IconCloseRemind, {
  install: (app: App) => {
    app.component(_IconCloseRemind.name, _IconCloseRemind);
  }
});

export default IconCloseRemind;