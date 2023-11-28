import type { App } from 'vue';
import _IconSetOff from './icon-set-off.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSetOff.name = getComponentsPrefix() + _IconSetOff.name;

const IconSetOff = Object.assign(_IconSetOff, {
  install: (app: App) => {
    app.component(_IconSetOff.name, _IconSetOff);
  }
});

export default IconSetOff;