import type { App } from 'vue';
import _IconSunHat from './icon-sun-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSunHat.name = getComponentsPrefix() + _IconSunHat.name;

const IconSunHat = Object.assign(_IconSunHat, {
  install: (app: App) => {
    app.component(_IconSunHat.name, _IconSunHat);
  }
});

export default IconSunHat;