import type { App } from 'vue';
import _IconGarlic from './icon-garlic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGarlic.name = getComponentsPrefix() + _IconGarlic.name;

const IconGarlic = Object.assign(_IconGarlic, {
  install: (app: App) => {
    app.component(_IconGarlic.name, _IconGarlic);
  }
});

export default IconGarlic;