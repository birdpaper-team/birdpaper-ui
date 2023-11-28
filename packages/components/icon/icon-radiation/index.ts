import type { App } from 'vue';
import _IconRadiation from './icon-radiation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadiation.name = getComponentsPrefix() + _IconRadiation.name;

const IconRadiation = Object.assign(_IconRadiation, {
  install: (app: App) => {
    app.component(_IconRadiation.name, _IconRadiation);
  }
});

export default IconRadiation;