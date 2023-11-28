import type { App } from 'vue';
import _IconWoolenHat from './icon-woolen-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWoolenHat.name = getComponentsPrefix() + _IconWoolenHat.name;

const IconWoolenHat = Object.assign(_IconWoolenHat, {
  install: (app: App) => {
    app.component(_IconWoolenHat.name, _IconWoolenHat);
  }
});

export default IconWoolenHat;