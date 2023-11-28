import type { App } from 'vue';
import _IconNut from './icon-nut.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNut.name = getComponentsPrefix() + _IconNut.name;

const IconNut = Object.assign(_IconNut, {
  install: (app: App) => {
    app.component(_IconNut.name, _IconNut);
  }
});

export default IconNut;