import type { App } from 'vue';
import _IconClose from './icon-close.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClose.name = getComponentsPrefix() + _IconClose.name;

const IconClose = Object.assign(_IconClose, {
  install: (app: App) => {
    app.component(_IconClose.name, _IconClose);
  }
});

export default IconClose;