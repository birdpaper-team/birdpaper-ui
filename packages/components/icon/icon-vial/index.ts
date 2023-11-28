import type { App } from 'vue';
import _IconVial from './icon-vial.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVial.name = getComponentsPrefix() + _IconVial.name;

const IconVial = Object.assign(_IconVial, {
  install: (app: App) => {
    app.component(_IconVial.name, _IconVial);
  }
});

export default IconVial;